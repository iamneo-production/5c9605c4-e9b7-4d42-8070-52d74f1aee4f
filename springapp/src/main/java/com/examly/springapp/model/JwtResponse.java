package com.examly.springapp.model;

import java.io.Serializable;

import javax.print.event.PrintJobAdapter;


public class JwtResponse implements Serializable {
	private static final long serialVersionUID = -8091879091924046844L;
	private String jwttoken;
	private String Username;
	private  long u_id;
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getJwttoken() {
		return jwttoken;
	}
	public void setJwttoken(String jwttoken) {
		this.jwttoken = jwttoken;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public long getU_id() {
		return u_id;
	}
	public void setU_id(long u_id) {
		this.u_id = u_id;
	} 

	
	 

	



}