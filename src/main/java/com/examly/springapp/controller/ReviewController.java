package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;
import com.examly.springapp.dao.ReviewDao;

@RestController
@RequestMapping("/user")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @Autowired
    private ReviewDao reviewrepo;

    @PostMapping("/addreview")	 
	public String addVehicle(@RequestBody Review review)
	{
        try{
            reviewService.saveReview(review);
		    return "Review added sucessfully!!";
        }
        catch(Exception e){
            return "Please enter proper fields and details";
        }	
	}
    @GetMapping("/getreviewbyid/{vid}")
    private List<Review> userdetails(@PathVariable  Long vid)throws Exception{
        System.out.println(vid+"userid");
       List<Review> review1=reviewrepo.findbyVid(vid);
       System.out.println(review1);
       return review1;
    }

    @GetMapping("/reviews")
	public List<Review> getVehicles(){
		return this.reviewService.getReviews();
	}

    @GetMapping("/getReviewById/{userid}")
    public Review getVehicleById(@PathVariable("userid") Long userid){
        //try{
            return reviewService.getReviewByUserid(userid);
        // }
        // catch(Exception e){
        //     return "Enter valid id";
        // }
        
    }

    @PutMapping("/updateReviewById/{userid}")
	public String update(@RequestBody Review review, @PathVariable Long userid) {
        try {
            Review present= reviewService.getReviewByUserid(userid);
            review.setId(userid);            
            reviewService.saveReview(review);
			return "Successfully updated";
        } catch (NoSuchElementException e) {
            return "Please enter valid id";
        }
    }

    @DeleteMapping("/deleteReviewById/{userid}")
    public String delete(@PathVariable Long userid) {
		try{
			reviewService.deleteReview(userid);
			return "Successfully deleted";
		}
		catch(Exception e){
			return "Please enter valid id";
		}
        
    }
}
