package com.examly.springapp.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.examly.springapp.model.Login;
import com.examly.springapp.service.LoginService;

@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
	private LoginService loginService;

	public LoginController() {
	}

	public LoginController(LoginService loginService) {
		super();
		this.loginService = loginService;
	}
	
	@PostMapping("/login")	 
	public String addUser(@RequestBody Login login)
	{
		loginService.saveAll(login);
		return "Login Success!!";
	}
	
}