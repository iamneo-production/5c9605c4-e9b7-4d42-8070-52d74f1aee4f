package com.examly.springapp.service;

import com.examly.springapp.model.UserDaoo;
import com.examly.springapp.model.UserDto;
import com.examly.springapp.dao.UserDao1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserDao1 userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDaoo user = userDao.findByUsername(username);
		System.out.println("hello "+user.getPassword());
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public UserDaoo save(UserDto user) {
		UserDaoo newUser = new UserDaoo();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setmobileNumber(user.getMobileNumber());
        newUser.setEmail(user.getEmail());
		return userDao.save(newUser);
	}
}