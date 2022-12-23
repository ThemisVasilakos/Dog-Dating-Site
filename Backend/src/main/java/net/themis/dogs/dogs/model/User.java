package net.themis.dogs.dogs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user",uniqueConstraints = {@UniqueConstraint( name = "username_unique", columnNames = "username")
        ,@UniqueConstraint( name = "email_unique", columnNames = "email")
        ,@UniqueConstraint( name = "phonenumber_unique", columnNames = "phoneNumber")})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    @JsonIgnore
    private String password;

    @Column
    private String email;

    @Column
    private String phoneNumber;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String role;

    ///Dog profile
    @Column
    private String dogName;

    @Column
    private String breed;

    @Column
    private Integer age;

    @Column
    private String dogBio;

    @Column
    private String dogSex;


    public Long getId() {
        return id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDogName() {
        return dogName;
    }

    public void setDogName(String dogName) {
        this.dogName = dogName;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getDogBio() {
        return dogBio;
    }

    public void setDogBio(String dogBio) {
        this.dogBio = dogBio;
    }

    public String getDogSex() {
        return dogSex;
    }

    public void setDogSex(String dogSex) {
        this.dogSex = dogSex;
    }


}
