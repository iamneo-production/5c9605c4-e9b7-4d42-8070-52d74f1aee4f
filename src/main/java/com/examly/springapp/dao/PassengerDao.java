package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Passenger;

@Repository
public interface PassengerDao extends JpaRepository<Passenger,Long>{
    
}
