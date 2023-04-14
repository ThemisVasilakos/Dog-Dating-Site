package net.themis.dogs.dogs.service;

import net.themis.dogs.dogs.model.Match;
import net.themis.dogs.dogs.model.User;
import net.themis.dogs.dogs.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@SpringBootTest
class CustomUserDetailServiceTest {

    @Autowired
    private MatchService matchService;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void validators(){
        Pattern pattern = Pattern.compile("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
        Matcher matcher = pattern.matcher("fdgdfgh@1243.co");
        boolean check = matcher.matches();
        System.out.println("email: "+check);

        pattern = Pattern.compile("[\\D]{3,}");
        matcher = pattern.matcher("sdh");
        check = matcher.matches();
        System.out.println("name: "+check);

        pattern = Pattern.compile("[0-9]{10}");
        matcher = pattern.matcher("1234567890");
        check = matcher.matches();
        System.out.println("phone number: "+check);
    }

    @Test
    void myMatches() {
        String tmp = matchService.findMatchByFromAndToUsername("magos","themis");
        System.out.println(tmp.equals("yes"));
    }

    @Test
    void defineMatch() {
        Match match = new Match();
        match.setFromUser("themis");
        match.setShownUser("mike");
        match.setLiked("no");
        matchService.saveMatch(match);
    }

    @Test
    void  getRandomUser(){
        List<User> users = userRepository.findAll();
        User user = users.get(new Random().nextInt(users.size()));
        System.out.println(user.getUsername());
    }

    @Test
    void  saveUser(){
        User user = new User();
        user.setUsername("themis");
        user.setRole("ROLE_ADMIN");
        user.setDogName("ragnar");
        //set rest of fields
        userRepository.save(user);
    }
}