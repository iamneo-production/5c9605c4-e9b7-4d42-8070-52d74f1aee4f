package com.examly.springapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="vehicle")
public class Vehicle implements Serializable{
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    private String vehicleName;
    private String vehicleTiming;
    private String vehicleFrom;
    private String vehicleTo;
    @Column(length = 1200)
    private String vehicleImageURL;
    private String price;
    private String capacity;
    private String vehicleDescription;
    
    @Override
    public String toString() {
        return "Vehicle [capacity=" + capacity + ", id=" + id + ", price=" + price + ", vehicleDescription="
                + vehicleDescription + ", vehicleFrom=" + vehicleFrom + ", vehicleImageURL=" + vehicleImageURL
                + ", vehicleName=" + vehicleName + ", vehicleTiming=" + vehicleTiming + ", vehicleTo=" + vehicleTo
                + "]";
    }
    
    public Vehicle() {
    }

    public Vehicle(Long id, String vehicleName, String vehicleTiming, String vehicleFrom, String vehicleTo,
            String vehicleImageURL, String price, String capacity, String vehicleDescription) {
        this.id = id;
        this.vehicleName = vehicleName;
        this.vehicleTiming = vehicleTiming;
        this.vehicleFrom = vehicleFrom;
        this.vehicleTo = vehicleTo;
        this.vehicleImageURL = vehicleImageURL;
        this.price = price;
        this.capacity = capacity;
        this.vehicleDescription = vehicleDescription;
    }
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getVehicleName() {
        return vehicleName;
    }
    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }
    public String getVehicleTiming() {
        return vehicleTiming;
    }
    public void setVehicleTiming(String vehicleTiming) {
        this.vehicleTiming = vehicleTiming;
    }
    public String getVehicleFrom() {
        return vehicleFrom;
    }
    public void setVehicleFrom(String vehicleFrom) {
        this.vehicleFrom = vehicleFrom;
    }
    public String getVehicleTo() {
        return vehicleTo;
    }
    public void setVehicleTo(String vehicleTo) {
        this.vehicleTo = vehicleTo;
    }
    public String getVehicleImageURL() {
        return vehicleImageURL;
    }
    public void setVehicleImageURL(String vehicleImageURL) {
        this.vehicleImageURL = vehicleImageURL;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public String getCapacity() {
        return capacity;
    }
    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }
    public String getVehicleDescription() {
        return vehicleDescription;
    }
    public void setVehicleDescription(String vehicleDescription) {
        this.vehicleDescription = vehicleDescription;
    }

}
