package com.example.service;


import com.example.Repository.ReviewRepository;

import com.example.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveReview(Review review){
        return reviewRepository.save(review);
    }
}
