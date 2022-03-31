package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Vehicle;

@Repository
public interface VehicleDao extends JpaRepository<Vehicle,Long>{
    
}
