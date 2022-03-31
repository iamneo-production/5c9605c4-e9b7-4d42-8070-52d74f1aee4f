package com.examly.springapp.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name="user",uniqueConstraints = { 
	@UniqueConstraint(columnNames = "username") 
})
public class User implements Serializable{
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	public String email;
	public String username;
	public String mobileNumber;
	public String password;


	
	@Override
	public String toString() {
		return "User [email=" + email + ", id=" + id + ", mobileNumber=" + mobileNumber + ", password=" + password
				+ ", username=" + username + "]";
	}

	public User() {
	}
	
	public User(Long id,  String email, String username, String mobileNumber, String password
			) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.password = password;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getmobileNumber() {
		return mobileNumber;
	}
	public void setmobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		//return password;
		return password.replaceAll(".", "*");
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
