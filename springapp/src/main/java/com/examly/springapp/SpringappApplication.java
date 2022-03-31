package com.examly.springapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.dao.LoginDao;
import com.examly.springapp.model.Login;

@SpringBootApplication
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SpringappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}


	

	// @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/**").allowedMethods("*");
    // }


	// @Override
	// public void run(String... args) throws Exception {
	// 	// TODO Auto-generated method stub
		
	// }

	// @Autowired
	// private LoginDao repo;
	

	// @Override
	// public void run(String... args) throws Exception {
	// 	this.repo.save(new Login("abcd@gmail.com","abc"));
	// 	this.repo.save(new Login("xyz@gmail.com","xy"));
	// 	// this.repo.save(new Login("sahas@gmail.com","ksawk"));
	// 	// this.repo.save(new Login("koeas@gmail.com","posaksl"));
		
	// }

}


