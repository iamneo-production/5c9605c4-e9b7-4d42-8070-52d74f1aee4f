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
        // List<Review> l=reviewrepo.findAll();
        // List<Review> l1=
        // if(Review l:i){
        //     if(l.vid==null){
        //         l1=
        //     }
        // }
        // System.out.println(this.reviewrepo.findByVid());
		return this.reviewrepo.findAll();
	}

    public Review getReviewByUserid(Long userid) {
        return reviewrepo.findById(userid).get();
    }
    
    public void saveReview(Review review) {
        reviewrepo.save(review);
    }

    public void deleteReview(Long id) {
        reviewrepo.deleteById(id);
    }
}
