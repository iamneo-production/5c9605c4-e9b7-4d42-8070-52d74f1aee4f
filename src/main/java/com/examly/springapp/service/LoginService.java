package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.examly.springapp.dao.LoginDao;
import com.examly.springapp.model.Login;

import java.util.*;
@Service
public class LoginService {
    @Autowired
	private LoginDao userrepo;

    public LoginService() {
    }

    public LoginService(LoginDao userrepo) {
        super();
        this.userrepo = userrepo;
    }

    public void saveAll(Login user){
	    userrepo.save(user);
	}
    
}
