package com.examly.springapp.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.examly.springapp.dao.PassengerDao;
import com.examly.springapp.model.Passenger;

@Service
public class PassengerService {
    List<Passenger> list;
    @Autowired
    private PassengerDao prepo;


    public PassengerService(PassengerDao prepo) {
        super();
        this.list = list;
        this.prepo = prepo;
    }

    public List<Passenger> getPassenger() {
		return this.prepo.findAll();
	}

    public Passenger getPassengerById(Long id) {
        return prepo.findById(id).get();
    }
    
    public void savePassenger(Passenger passenger) {
        prepo.save(passenger);
    }

    public void deletePassenger(Long id) {
        prepo.deleteById(id);
    }

}