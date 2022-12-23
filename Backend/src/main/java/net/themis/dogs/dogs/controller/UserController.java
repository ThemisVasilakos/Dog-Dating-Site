package net.themis.dogs.dogs.controller;

import net.themis.dogs.dogs.dto.UserDTO;
import net.themis.dogs.dogs.exception.UserValidatorException;
import net.themis.dogs.dogs.service.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/pugme")
public class UserController {

    @Autowired
    private CustomUserDetailService userDetailService;

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getProfile(){
        return new ResponseEntity<UserDTO>(userDetailService.getProfile(), HttpStatus.OK);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDTO> getProfile(@RequestBody UserDTO userDTO) throws UserValidatorException {
        return new ResponseEntity<UserDTO>(userDetailService.updateProfile(userDTO), HttpStatus.OK);
    }

    @GetMapping("/match")
    public ResponseEntity<UserDTO> getRandom(){
        return new ResponseEntity<UserDTO>(userDetailService.getRandomUser(), HttpStatus.OK);
    }

    @PostMapping("/match")
    public ResponseEntity<?> matchProfile(@RequestParam String username, @RequestParam String liked){
        return ResponseEntity.ok(userDetailService.defineMatch(username,liked));
    }

    @GetMapping("/matches")
    public ResponseEntity<?>  getMyMatches(){
        return ResponseEntity.ok(userDetailService.myMatches());
    }
}
