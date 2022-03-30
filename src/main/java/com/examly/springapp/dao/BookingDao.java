package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Booking;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface BookingDao extends JpaRepository<Booking,Long>{
    @Query(value="SELECT * from bookings  where userid=?",nativeQuery = true)
    List<Booking> findbyUserid(Long id);
}