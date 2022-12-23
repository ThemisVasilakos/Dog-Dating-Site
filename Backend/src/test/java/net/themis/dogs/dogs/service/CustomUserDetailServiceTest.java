package net.themis.dogs.dogs.service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CustomUserDetailServiceTest {

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
}