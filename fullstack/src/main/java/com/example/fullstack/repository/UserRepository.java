package com.example.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fullstack.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
    
}
