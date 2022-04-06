package com.examly.springapp.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.examly.springapp.dao.ReviewDao;
import com.examly.springapp.model.Review;

@Service
public class ReviewService {
    List<Review> list;
    @Autowired
    private ReviewDao reviewrepo;


    public ReviewService(ReviewDao reviewrepo) {
        super();
        this.list = list;
        this.reviewrepo = reviewrepo;
    }

    public List<Review> getReviews() {
		return this.reviewrepo.findAll();
	}

    public Review getReviewById(Long id) {
        return reviewrepo.findById(id).get();
    }
    
    public void saveReview(Review vehicle) {
        reviewrepo.save(vehicle);
    }

    public void deleteReview(Long id) {
        reviewrepo.deleteById(id);
    }

}
