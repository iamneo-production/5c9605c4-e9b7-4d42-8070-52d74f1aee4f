package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Passenger;
import com.examly.springapp.service.PassengerService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class PassengerController {
    @Autowired
    private PassengerService ps;

    

    @PostMapping("/addPassenger")	 
	public String addUser(@RequestBody Passenger passenger)
	{
        try{
            ps.savePassenger(passenger);
		    return "Passenger added sucessfully!!";
        }
        catch(Exception e){
            return "Please enter proper fields and details";
        }	
	}

    @GetMapping("/passengers")
	public List<Passenger> getPassenger(){
		return this.ps.getPassenger();
	}

    @GetMapping("/getPassengerById/{id}")
    public ResponseEntity<?> getPassengerById(@PathVariable("id") Long id){
        
            return new ResponseEntity<>(ps.getPassengerById(id), HttpStatus.OK);
    }

    @PutMapping("/updatePassengerById/{id}")
	public String update(@RequestBody Passenger passenger, @PathVariable Long id) {
        
        try {
            Passenger present= ps.getPassengerById(id);
            passenger.setId(id);            
            ps.savePassenger(passenger);
			return "Successfully updated";
        } catch (NoSuchElementException e) {
            return "Please enter valid id";
        }
    }

    @DeleteMapping("/deletePassengerById/{id}")
    public String delete(@PathVariable Long id) {
        
		try{
			ps.deletePassenger(id);
			return "Successfully deleted";
		}
		catch(Exception e){
			return "Please enter valid id";
		}
        
    }

}