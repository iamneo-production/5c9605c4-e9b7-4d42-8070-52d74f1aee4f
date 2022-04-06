package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.UserDaoo;

import com.examly.springapp.service.Signupserviceimpl;


import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("*")
public class SignUpController{
	@Autowired
    private Signupserviceimpl userService;


	public SignUpController() {
	}


	public SignUpController(Signupserviceimpl userService) {
	super();
	this.userService = userService;
	}
	
	@PostMapping("/signup")	 
	public String addUser(@RequestBody UserDaoo user)
	{	
		try{
			userService.saveAll(user);
		    return "Registration success!!";
		}
		catch(Exception e){
			return "Enter proper fields or url";
		}
		
	}

	@GetMapping("/allUsers")
	public List<UserDaoo> getUser(){
		return this.userService.getUsers();
	}

	@GetMapping("/getUserById/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id){
		return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
        
    }

	@PutMapping("/updateUserById/{id}")
	public String update(@RequestBody UserDaoo user, @PathVariable Long id) {
        try {
            UserDaoo existUser = userService.gettUserById(id);
			existUser.setUsername(user.username);
			existUser.setEmail(user.email);
			existUser.setmobileNumber(user.mobileNumber);
			existUser.setPassword(user.password);
            userService.saveUser(existUser);
			
			return "Successfully updated";
            
        } catch (Exception e) {
            return "Please enter valid id";
        }
    }
	

	@DeleteMapping("/deleteUserById/{id}")
    public String delete(@PathVariable Long id) {
		try{
			userService.deleteUser(id);
			return "Successfully deleted";
		}
		catch(Exception e){
			return "Please enter valid id";
		}
        
    }
}