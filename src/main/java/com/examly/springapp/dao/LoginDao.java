package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Login;

@Repository
public interface LoginDao extends JpaRepository<Login,String>{
    
}
