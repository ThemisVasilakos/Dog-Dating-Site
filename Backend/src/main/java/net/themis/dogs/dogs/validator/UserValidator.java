package net.themis.dogs.dogs.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UserValidator {
    private Pattern pattern;
    Matcher matcher;

    public UserValidator() {
    }

    public boolean emailValidator(String email){
        this.pattern = Pattern.compile("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
        this.matcher = pattern.matcher(email);
        return this.matcher.matches();
    }

    public boolean firstNameValidator(String firstName){
        this.pattern = Pattern.compile("[\\D]{3,}");
        this.matcher = pattern.matcher(firstName);
        return this.matcher.matches();
    }

    public boolean lastNameValidator(String lastName){
        this.pattern = Pattern.compile("[\\D]{3,}");
        this.matcher = pattern.matcher(lastName);
        return this.matcher.matches();
    }

    public boolean phoneNumberValidator(String phoneNumber){
        this.pattern = Pattern.compile("[0-9]{10}");
        this.matcher = pattern.matcher(phoneNumber);
        return this.matcher.matches();
    }

    //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    public boolean passwordValidator(String password){
        this.pattern = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
        this.matcher = pattern.matcher(password);
        return this.matcher.matches();
    }
}
