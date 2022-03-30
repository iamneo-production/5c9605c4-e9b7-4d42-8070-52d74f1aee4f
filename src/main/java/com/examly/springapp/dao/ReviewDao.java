package com.examly.springapp.dao;
import com.examly.springapp.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface ReviewDao extends JpaRepository<Review,Long>{
    @Query(value="SELECT * from review  where vid=?",nativeQuery = true)
    List<Review> findbyVid(Long vid);
}
