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
@CrossOrigin("*")
public class ReviewController{
    @Autowired
    private ReviewService reviewService;

    @Autowired
    private ReviewDao reviewrepo;

    @PostMapping("/addreview")	 
	public String addUser(@RequestBody Review review)
	{
        try{
            reviewService.saveReview(review);
		    return "Review added sucessfully!!";
        }
        catch(Exception e){
            return "Please enter proper fields and details";
        }	
	}

    @GetMapping("/reviews")
	public List<Review> getReviews(){
		return this.reviewService.getReviews();
	}

    @GetMapping("/getbyvid/{vid}")
    private List<Review> userdetails(@PathVariable  Long vid)throws Exception{
       List<Review> usereview=reviewrepo.findByVid(vid);
       return usereview;
    }
    
    @PutMapping("/updateReviewById/{id}")
	public String update(@RequestBody Review review, @PathVariable Long id) {
        try {
            Review present= reviewService.getReviewById(id);
            review.setId(id);            
            reviewService.saveReview(review);
			return "Successfully updated";
        } catch (NoSuchElementException e) {
            return "Please enter valid id";
        }
    }

    @DeleteMapping("/deleteReviewById/{id}")
    public String delete(@PathVariable Long id) {
		try{
			reviewService.deleteReview(id);
			return "Successfully deleted";
		}
		catch(Exception e){
			return "Please enter valid id";
		}
        
    }


}