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
	private LoginService userService;

	public LoginController() {
	}

	public LoginController(LoginService userService) {
		super();
		this.userService = userService;
	}

	@PostMapping("/login")	 
	public String addUser(@RequestBody Login user)
	{
		userService.saveAll(user);
		return "Login Success!!";
	}

	// https://github.com/naveen-veera/springapp.git/
	// git remote set-url origin https://github.com/iamneo-production/5c9605c4-e9b7-4d42-8070-52d74f1aee4f.git


	
}
