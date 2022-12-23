package net.themis.dogs.dogs.controller;

import net.themis.dogs.dogs.service.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class test {

    @Autowired
    private CustomUserDetailService userDetailService;

    @GetMapping("/pugme/hello")
    public ResponseEntity<String> greetUser(){
        return new ResponseEntity<String>( "Hello "+userDetailService.returnUsername(), HttpStatus.OK);
    }
}
