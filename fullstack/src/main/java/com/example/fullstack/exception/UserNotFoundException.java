package com.example.fullstack.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("no se pudo encontrar el ID: " + id);
    }    
}
