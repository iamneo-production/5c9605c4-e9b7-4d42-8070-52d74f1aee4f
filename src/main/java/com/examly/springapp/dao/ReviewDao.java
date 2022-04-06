package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.examly.springapp.model.Review;

@Repository
public interface ReviewDao extends JpaRepository<Review,Long>{
    @Query(value="SELECT * from review  where vid=?",nativeQuery = true)
    List<Review> findByVid(Long vid);
    
}
