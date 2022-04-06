package com.examly.springapp.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="user1",uniqueConstraints = { 
	@UniqueConstraint(columnNames = "username"),
	// @UniqueConstraint(columnNames = "email") 
})
public class UserDaoo implements Serializable{
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;


	// public String useroradmin;
	public String email;
	public String username;
	public String mobileNumber;
	public String password;


	
	@Override
	public String toString() {
		return "User [ email=" + email + ", id=" + id + ", password=" + password
				+ ", mobileNumber=" + mobileNumber + ", username=" + username +  "]" ;
	}

	public UserDaoo() {
	}


	public UserDaoo(Long id, String email, String username, String mobileNumber, String password
			) {
		this.id = id;
		// this.useroradmin = useroradmin;
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
	// public String getUseroradmin() {
	// 	return useroradmin;
	// }
	// public void setUseroradmin(String useroradmin) {
	// 	this.useroradmin = useroradmin;
	// }
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
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
}