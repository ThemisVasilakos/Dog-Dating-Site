package net.themis.dogs.dogs.service;

import net.themis.dogs.dogs.dto.UserDTO;
import net.themis.dogs.dogs.exception.UserValidatorException;
import net.themis.dogs.dogs.model.Match;
import net.themis.dogs.dogs.model.User;
import net.themis.dogs.dogs.repository.UserRepository;
import net.themis.dogs.dogs.validator.DogeValidator;
import net.themis.dogs.dogs.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class CustomUserDetailService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MatchService matchService;

    @Lazy
    @Autowired
    private PasswordEncoder bcryptEncoder;

    private UserValidator userValidator = new UserValidator();
    private DogeValidator dogeValidator = new DogeValidator();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<SimpleGrantedAuthority> roles = null;
        User user = userRepository.findByUsername(username);
        if (user != null) {
            roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), roles);
            //User(user.getUsername(), user.getPassword(), roles);
        }
        throw new UsernameNotFoundException("User not found with the username " + username);

    }

    public User save(UserDTO user) throws UserValidatorException {

        if(!userValidator.emailValidator(user.getEmail())){
            throw new UserValidatorException("Email not valid!");
        }
        if(!userValidator.firstNameValidator(user.getFirstName())){
            throw new UserValidatorException("First Name not valid!");
        }
        if(!userValidator.lastNameValidator(user.getLastName())){
            throw new UserValidatorException("Last Name not valid!");
        }
        if(!userValidator.phoneNumberValidator(user.getPhoneNumber())){
            throw new UserValidatorException("Phone number not valid!");
        }
       if(!userValidator.passwordValidator(user.getPassword())){
            throw new UserValidatorException("Password must be at least Minimum eight characters, at least one uppercase" +
                    " letter, one lowercase letter, one number and one special character");
        }
       if(!dogeValidator.dogeInfoValidator(user.getBreed())){
           throw new UserValidatorException("Dog breed not valid!");
       }
        if(!dogeValidator.dogeInfoValidator(user.getDogSex())){
            throw new UserValidatorException("Dog sex not valid!");
        }
        if(!dogeValidator.dogeInfoValidator(user.getDogName())){
            throw new UserValidatorException("Dog name not valid!");
        }
        if(!dogeValidator.dogeAgeValidator(Integer.toString(user.getAge()))){
            throw new UserValidatorException("Dog age not valid!");
        }


        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setRole(user.getRole());////setting default user
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPhoneNumber(user.getPhoneNumber());

        //Dog profile
        newUser.setDogName(user.getDogName());
        newUser.setDogBio(user.getDogBio());
        newUser.setDogSex(user.getDogSex());
        newUser.setAge(user.getAge());
        newUser.setBreed(user.getBreed());
        System.out.println(user.getDogPhoto());
        newUser.setDogPhoto(user.getDogPhoto());

        userRepository.save(newUser);

        return newUser;
    }

    public UserDTO getProfile(){
        String username = returnUsername();

        User user = userRepository.findByUsername(username);

        UserDTO userDTO = new UserDTO();

        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPhoneNumber(user.getPhoneNumber());

        userDTO.setDogName(user.getDogName());
        userDTO.setDogBio(user.getDogBio());
        userDTO.setDogSex(user.getDogSex());
        userDTO.setAge(user.getAge());
        userDTO.setBreed(user.getBreed());
        userDTO.setDogPhoto(user.getDogPhoto());

        return  userDTO;
    }

    @Transactional
    public UserDTO updateProfile(UserDTO userDTO) throws UserValidatorException {
        String username = returnUsername();

        //Update username
        if(userDTO.getUsername()!=null){
            userRepository.updateUsername(userDTO.getUsername(),username);
        }
        //Update password
        if(userDTO.getPassword()!=null){
            if(!userValidator.passwordValidator(userDTO.getPassword())){
                throw new UserValidatorException("Password must be at least Minimum eight characters, at least one uppercase"
                        + " letter, one lowercase letter, one number and one special character");
            }
            String password = userDTO.getPassword();
            userDTO.setPassword(bcryptEncoder.encode(password));
            userRepository.updatePassword(userDTO.getPassword(),username);
        }
        //Update first name
        if(userDTO.getFirstName()!=null){
            if(!userValidator.firstNameValidator(userDTO.getFirstName())){
                throw new UserValidatorException("First Name not valid!");
            }
            userRepository.updateFirstName(userDTO.getFirstName(),username);
        }
        //Update last name
        if(userDTO.getLastName()!=null){
            if(!userValidator.lastNameValidator(userDTO.getLastName())){
                throw new UserValidatorException("Last Name not valid!");
            }
            userRepository.updateLastName(userDTO.getLastName(),username);
        }
        //Update email
        if(userDTO.getEmail()!=null){
            if(!userValidator.emailValidator(userDTO.getEmail())){
                throw new UserValidatorException("Email not valid!");
            }
            userRepository.updateEmail(userDTO.getEmail(),username);
        }
        //Update phone number
        if(userDTO.getPhoneNumber()!=null){
            if(!userValidator.phoneNumberValidator(userDTO.getPhoneNumber())){
                throw new UserValidatorException("Phone number not valid!");
            }
            userRepository.updatePhoneNumber(userDTO.getPhoneNumber(),username);
        }
        //Update breed
        if(userDTO.getBreed()!=null){
            if(!dogeValidator.dogeInfoValidator(userDTO.getBreed())){
                throw new UserValidatorException("Dog breed not valid!");
            }
            userRepository.updateBreed(userDTO.getBreed(),username);
        }
        //Update dog sex
        if(userDTO.getDogSex()!=null){
            if(!dogeValidator.dogeInfoValidator(userDTO.getDogSex())){
                throw new UserValidatorException("Dog sex not valid!");
            }
            userRepository.updateDogSex(userDTO.getDogSex(),username);
        }
        //Update dog name
        if(userDTO.getDogName()!=null){
            if(!dogeValidator.dogeInfoValidator(userDTO.getDogName())){
                throw new UserValidatorException("Dog sex not valid!");
            }
            userRepository.updateDogName(userDTO.getDogName(),username);
        }
        //Update dog age
        if(userDTO.getAge()!=null){
            if(!dogeValidator.dogeAgeValidator(Integer.toString(userDTO.getAge()))){
                throw new UserValidatorException("Dog sex not valid!");
            }
            userRepository.updateAge(userDTO.getAge(),username);
        }
        //Update dog bio
        if(userDTO.getDogBio()!=null){
            if(!dogeValidator.dogeInfoValidator(userDTO.getDogBio())){
                throw new UserValidatorException("Dog sex not valid!");
            }
            userRepository.updateDogBio(userDTO.getDogBio(),username);
        }

        return  userDTO;
    }

    public String returnUsername(){
        UserDetails userDetailService = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetailService.getUsername();
        return username;
    }

    public UserDTO getRandomUser(){

        String username = returnUsername();

        User loggedUser = userRepository.findByUsername(username);

        String gender = loggedUser.getDogSex();
        String queryGender;
        if(gender.equals("female")){
            queryGender="male";
        }
        else{
            queryGender="female";
        }

        //Return the correct query
        List<User> dogUsers = userRepository.findByDogSex(username,queryGender);
        List<User> users = new ArrayList<>();

        for(int i=0;i< dogUsers.size();i++){
            String toUser = dogUsers.get(i).getUsername();
            String result = matchService.findMatchByFromAndToUsername(username,toUser);
            if(result==null){
               User tmp = new User();
               tmp = userRepository.findByUsername(toUser);
               users.add(tmp);
            }
        }

        if(users.size()==0){
            return new UserDTO();
        }

        User user;
        do{
            user = users.get(new Random().nextInt(users.size()));
        }while(user.getRole().equals("ROLE_ADMIN"));


        UserDTO userDTO = new UserDTO();

        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPhoneNumber(user.getPhoneNumber());

        userDTO.setDogName(user.getDogName());
        userDTO.setDogBio(user.getDogBio());
        userDTO.setDogSex(user.getDogSex());
        userDTO.setAge(user.getAge());
        userDTO.setBreed(user.getBreed());
        userDTO.setDogPhoto(user.getDogPhoto());

        return userDTO;
    }

    public Long findUserId(String username){
        Long id =  userRepository.findIdByUsername(username);
        return id;
    }

    public Match defineMatch(String username,String liked){
        String loggedUsername = returnUsername();
        Match match = new Match();
        match.setShownUser(username);
        match.setLiked(liked);
        match.setFromUser(loggedUsername);

        matchService.saveMatch(match);

        return match;
    }

    public List<UserDTO> myMatches(){
        String username = returnUsername();
        List<String> fromMatches = matchService.findMatchByFromUsername(username);
        List<String> likeMeBackMatches = new ArrayList<>();

        for(int i=0;i< fromMatches.size();i++){
            String tmp = fromMatches.get(i);
            String check = matchService.findMatchByFromAndToUsername(tmp,username);
            if(check!=null){
                if(check.equals("yes")){
                    likeMeBackMatches.add(tmp);
                    System.out.println(tmp);
                }

            }
        }

        List<UserDTO> myMatchesList = new ArrayList<>();

        for(int i=0;i<likeMeBackMatches.size();i++){
            User user = userRepository.findByUsername(likeMeBackMatches.get(i));
            UserDTO userDTO = new UserDTO();

            userDTO.setUsername(user.getUsername());
            userDTO.setEmail(user.getEmail());
            userDTO.setFirstName(user.getFirstName());
            userDTO.setLastName(user.getLastName());
            userDTO.setPhoneNumber(user.getPhoneNumber());

            userDTO.setDogName(user.getDogName());
            userDTO.setDogBio(user.getDogBio());
            userDTO.setDogSex(user.getDogSex());
            userDTO.setAge(user.getAge());
            userDTO.setBreed(user.getBreed());
            userDTO.setDogPhoto(user.getDogPhoto());

            myMatchesList.add(userDTO);
        }

        return myMatchesList;
    }

    public String getRole(){
        UserDetails userDetailService = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetailService.getUsername();
        User user =  userRepository.findByUsername(username);

        return user.getRole();
    }

}
