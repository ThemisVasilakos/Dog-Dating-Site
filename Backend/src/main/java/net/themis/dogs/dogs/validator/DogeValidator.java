package net.themis.dogs.dogs.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DogeValidator {
    private Pattern pattern;
    Matcher matcher;

    public DogeValidator() {
    }

    public boolean dogeInfoValidator(String info){
        this.pattern = Pattern.compile("[\\D]{3,}");
        this.matcher = pattern.matcher(info);
        return this.matcher.matches();
    }

    public boolean dogeAgeValidator(String info){
        this.pattern = Pattern.compile("[1-9]+");
        this.matcher = pattern.matcher(info);
        return this.matcher.matches();
    }
}
