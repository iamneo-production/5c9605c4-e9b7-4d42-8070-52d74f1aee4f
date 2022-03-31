package com.examly.springapp.controller;

import com.examly.springapp.config.JwtTokenUtil;
import com.examly.springapp.model.JwtRequest;
import com.examly.springapp.model.JwtResponse;
import com.examly.springapp.model.UserDto;
import com.examly.springapp.dao.UserDao1;
import com.examly.springapp.model.UserDaoo;
import com.examly.springapp.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@Autowired
	private UserDao1 user1;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		// return ResponseEntity.ok(authenticationRequest.getPassword());
		System.out.println("=====");
		System.out.println(authenticationRequest.getPassword());
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		
		System.out.println("aaa");
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		System.out.println(userDetails);
		final String token = jwtTokenUtil.generateToken(userDetails);
		UserDaoo user=user1.findByUsername(authenticationRequest.getUsername());
		System.out.println(user);
	
		JwtResponse js=new JwtResponse();
		js.setJwttoken(token);
		js.setUsername(user.getUsername());
		js.setU_id(user.getId());
		return ResponseEntity.ok(js);
	}
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDto user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}

	

	private void authenticate(String username, String password) throws Exception {
		try {
			System.out.println(username+" "+password);
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			System.out.println("2");
		} catch (DisabledException e) {
			System.out.println("3");
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}