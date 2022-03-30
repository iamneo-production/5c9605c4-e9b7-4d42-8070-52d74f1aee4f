package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


import com.examly.springapp.dao.UserDao1;
import com.examly.springapp.model.UserDaoo;

import java.util.*;
@Service
public class Signupserviceimpl {
	List<UserDaoo> list;
	@Autowired
	private UserDao1 userrepo;
	

	public Signupserviceimpl(UserDao1 userrepo) {
		super();
		this.userrepo = userrepo;
		list=new ArrayList<>();
	}
	public Signupserviceimpl()
	{
		
	}
	
	public void saveAll(UserDaoo user){
	    userrepo.save(user);
	}

	public List<UserDaoo> getUsers() {
		return this.userrepo.findAll();
	}

	public  ResponseEntity<Object> getUserById(Long id) {
		UserDaoo u=userrepo.findById(id).get();
		if(u==null){
			return new ResponseEntity<>("Not found ", HttpStatus.NOT_FOUND);
		}
		else{
			return new ResponseEntity<>(u, HttpStatus.OK);
		}
        // return userrepo.findById(id).get();
    }

	public UserDaoo gettUserById(Long id){
		return userrepo.findById(id).get();
	}
	public void saveUser(UserDaoo user) {
        userrepo.save(user);
    }

	public void deleteUser(Long id) {
        userrepo.deleteById(id);
    }

// 	// public ResponseEntity<Object> getbybillno(int billno) {
//     //     Sales tempsales = salesRepository.findByBillno(billno);
//     //     if(tempsales==null){
//     //         return new ResponseEntity<>("Not found ", HttpStatus.NOT_FOUND);
//     //     }
//     //     else{
//     //         return  new ResponseEntity<>(tempsales,HttpStatus.OK);
//     //     }
//     // }

}


















// // @Service
// // public class Signupserviceimpl implements Signupservice{
// //     List<User> list;
// //     public Signupserviceimpl() {
// //         list=new ArrayList<>();
// //     }
// //     @Autowired
// // 	public UserDao dao;

// // 	@Override
// // 	public List<User> getUser() {
// // 		return this.dao.findAll();
// // 	}

// // 	@Override
    
// // 	public User addUser(User user) {
// // 		// TODO Auto-generated method stub
// // //		list.add(new Users(user.getName(),user.getUsername(),user.getMobile(),user.getEmail(),user.getPassword()));
// // 		dao.save(user);
// // 		return user;
// // 	}

    
// // }
