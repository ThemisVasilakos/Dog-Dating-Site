package net.themis.dogs.dogs.exception;

import net.themis.dogs.dogs.validator.UserValidator;

public class UserValidatorException extends Exception{

    public UserValidatorException(String error){
        super(error);
    }
}
