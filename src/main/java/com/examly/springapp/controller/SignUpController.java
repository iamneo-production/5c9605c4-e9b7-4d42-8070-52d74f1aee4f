package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.UserDaoo;
import com.examly.springapp.dao.UserDao1;
import com.examly.springapp.service.Signupserviceimpl;


import java.util.List;
import java.util.Objects;

// @CrossOrigin(origins = "https://8081-bacdafecabdcceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/") 

@RestController
@RequestMapping("/user")
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
		System.out.println("hello");
		try{
			userService.saveAll(user);
			System.out.println(user.toString());
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
            // existUser.setId(user.id); 
			System.out.println(existUser.toString());
			System.out.println(user.toString());
			System.out.println(existUser.getEmail());

			
			existUser.setUsername(user.username);
			existUser.setEmail(user.email);
			existUser.setmobileNumber(user.mobileNumber);
			// existUser.setUseroradmin(user.useroradmin);
			existUser.setPassword(user.password);
            userService.saveUser(existUser);
			// return existUser.getEmail();
			return "Successfully updated";
            // return new ResponseEntity<>(,HttpStatus.OK);
        } catch (Exception e) {
            return "Please enter valid id";
        }
    }
// 	// public ResponseEntity<Object> update(int billno) {
//     //     user tempuser = userRepository.update(billno);
//     //     if(tempuser==null){
//     //         return new ResponseEntity<>("Not found ", HttpStatus.NOT_FOUND);
//     //     }
//     //     else{
//     //         return  new ResponseEntity<>(tempsales,HttpStatus.OK);
//     //     }
//     // }

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






























// // {
// //     "useroradmin":"user",
// //     "email":"abcd@gmail.com",
// //     "username":"abc",
// //     "phonenumber":"1234567891",
// //     "password":"1234",
// //     "confrmpassword":"1234"
// // }





// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.web.bind.annotation.CrossOrigin;
// // import org.springframework.web.bind.annotation.GetMapping;
// // import org.springframework.web.bind.annotation.PostMapping;
// // import org.springframework.web.bind.annotation.RequestBody;
// // import org.springframework.web.bind.annotation.RequestParam;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.RestController;
// // import org.springframework.web.servlet.ModelAndView;



// // @RestController
// // public class SignUpController {
// //     @Autowired
// // 	private Signupservice Users;
// // 	UserDao  ud;
	
// // 	@GetMapping("/user")
// // 	public List<User> getUser(){
// // 		return this.Users.getUser();
// // 	}

// // 	// @PostMapping("/signup")
// // 	// public ResponseEntity<?> addUser(@RequestBody User user) {
// // 	// 	return ResponseEntity.ok("User registered successfully!");
// // 	// 	// return this.Users.addUser(user);
// // 	// }
// // }
