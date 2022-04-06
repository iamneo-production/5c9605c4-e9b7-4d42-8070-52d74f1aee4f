package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Vehicle;
import com.examly.springapp.service.VehicleService;


@RestController
@CrossOrigin
public class VehicleController{
    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/addvehicle")
	public String addUser(@RequestBody Vehicle vehicle)
	{
        try{
            vehicleService.saveVehicle(vehicle);
		    return "Vehicle added sucessfully!!";
        }
        catch(Exception e){
            return "Please enter proper fields and details";
        }	
	}

    
    @GetMapping("/vehicles")
	public List<Vehicle> getVehicles(){
		return this.vehicleService.getVehicles();
	}

    @GetMapping("/getVehicleById/{id}")
    public Vehicle getVehicleById(@PathVariable("id") Long id){
       
            return vehicleService.getVehicleById(id);
        
    }

    @PutMapping("/updateVehicleById/{id}")
	public String update(@RequestBody Vehicle vehicle, @PathVariable Long id) {
        
        try {
            Vehicle present= vehicleService.getVehicleById(id);
            vehicle.setId(id);            
            vehicleService.saveVehicle(vehicle);
			return "Successfully updated";
        } catch (NoSuchElementException e) {
            return "Please enter valid id";
        }
    }

    @DeleteMapping("/deleteVehicleById/{id}")
    public String delete(@PathVariable Long id) {
		try{
			vehicleService.deleteVehicle(id);
			return "Successfully deleted";
		}
		catch(Exception e){
			return "Please enter valid id";
		}
        
    }


}