package com.examly.springapp.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.examly.springapp.dao.VehicleDao;
import com.examly.springapp.model.Vehicle;

@Service
public class VehicleService {
    List<Vehicle> list;
    @Autowired
    private VehicleDao vehiclerepo;


    public VehicleService(VehicleDao vehiclerepo) {
        super();
        this.list = list;
        this.vehiclerepo = vehiclerepo;
    }

    public List<Vehicle> getVehicles() {
		return this.vehiclerepo.findAll();
	}

    public Vehicle getVehicleById(Long id) {
        return vehiclerepo.findById(id).get();
    }
    
    public void saveVehicle(Vehicle vehicle) {
        vehiclerepo.save(vehicle);
    }

    public void deleteVehicle(Long id) {
        vehiclerepo.deleteById(id);
    }

}
