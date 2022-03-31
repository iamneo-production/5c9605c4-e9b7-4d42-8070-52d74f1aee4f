package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;


import com.examly.springapp.model.Booking;
import com.examly.springapp.dao.BookingDao;
import com.examly.springapp.service.BookingService;


@RestController
@RequestMapping("/user")
public class BookingController{
    @Autowired
    private BookingService bookingService;
    @Autowired
    private BookingDao bookrepo;

    @PostMapping("/addBooking")	 
	public String addBooking(@RequestBody Booking booking)
	{
        try{
            bookingService.saveBooking(booking);
		    return "Booking added sucessfully!!";
        }
        catch(Exception e){
            return "Please enter proper fields and details";
        }	
	}

    @GetMapping("/bookings")
	public List<Booking> getBooking(){
		return this.bookingService.getBooking();
	}

    @GetMapping("/getbooking/user")
    public List<Booking> getUserBooking(){
        return this.bookingService.getUserBooking();
    }

    // @GetMapping("/getBookingById/{id}")
    // public Booking getBookingById(@PathVariable("id") Long id){
    //     // try{
    //         return bookingService.getBookingById(id);
    //     // }
    //     // catch(Exception e){
    //     //     return "Enter valid id";
    //     // }
        
    // }

    @PutMapping("/updateBookingById/{id}")
	public String update(@RequestBody Booking booking, @PathVariable Long id) {
        System.out.println(id);
        System.out.println(booking.toString());
        try {
            Booking present= bookingService.getBookingById(id);
            booking.setId(id);            
            bookingService.saveBooking(booking);
			return "Successfully updated";
        } catch (NoSuchElementException e) {
            return "Please enter valid id";
        } 
    }

    @DeleteMapping("/deleteBookingById/{id}")
    public String delete(@PathVariable Long id) {
        System.out.println(id);
		try{
			bookingService.deleteBooking(id);
			return "Successfully deleted";
		}
		catch(Exception e){
			return "Please enter valid id";
		}
        
    }

    @GetMapping("/getbyuserid/{id}")
    private List<Booking> userdetails(@PathVariable  Long id)throws Exception{
        System.out.println(id+"userid");
       List<Booking> usebbokings=bookrepo.findbyUserid(id);
       System.out.println(usebbokings);
       return usebbokings;
    }

}