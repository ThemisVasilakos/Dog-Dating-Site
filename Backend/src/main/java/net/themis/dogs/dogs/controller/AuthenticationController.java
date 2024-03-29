package net.themis.dogs.dogs.controller;

import net.themis.dogs.dogs.dto.UserDTO;
import net.themis.dogs.dogs.exception.UserValidatorException;
import net.themis.dogs.dogs.payload.AuthenticationRequest;
import net.themis.dogs.dogs.payload.AuthenticationResponse;
import net.themis.dogs.dogs.service.CustomUserDetailService;
import net.themis.dogs.dogs.service.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/pugme")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailService userDetailService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        }catch (DisabledException e)
        {
            throw new Exception("USER_DISABLED",e);
        }
        catch(BadCredentialsException e){
            throw new Exception("INVALID_CREDENTIALS",e);
        }

        UserDetails userDetails = userDetailService.loadUserByUsername(authenticationRequest.getUsername());
        String token = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
        return ResponseEntity.ok(userDetailService.save(user));
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getProfile(){
        return new ResponseEntity<UserDTO>(userDetailService.getProfile(), HttpStatus.OK);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDTO> getProfile(@RequestBody UserDTO userDTO) throws UserValidatorException {
        return new ResponseEntity<UserDTO>(userDetailService.updateProfile(userDTO), HttpStatus.OK);
    }

    @GetMapping("/role")
    public String getRole(){
        return userDetailService.getRole();
    }
}
