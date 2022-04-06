package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class Login {
    @Id
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;


    @Override
    public String toString() {
        return "Login [email=" + email + ", password=" + password + "]";
    }

    public Login() {
    }
    
    public Login(String email, String password) {
        this.email = email;
        this.password = password;
    }
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    
}
