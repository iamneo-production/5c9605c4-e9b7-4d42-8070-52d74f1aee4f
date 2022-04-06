package com.examly.springapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="bookings")
public class Booking implements Serializable{
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    private Long userid;
    private String vehicleName;

    @Column(name = "`from`")
    private String from;

    @Column(name = "`to`")
    private String to;
    
    private String vehicleTiming;

    @Column(name = "`date`")
    private String date; 
       
    private String pricePerHead;
    private String noOfPersons;
    
    public Booking(Long id, long userid, String vehicleName, String from, String to, String vehicleTiming, String date,
            String pricePerHead, String noOfPersons) {
        this.id = id;
        this.userid = userid;
        this.vehicleName = vehicleName;
        this.from = from;
        this.to = to;
        this.vehicleTiming = vehicleTiming;
        this.date = date;
        this.pricePerHead = pricePerHead;
        this.noOfPersons = noOfPersons;
    }
    public Booking() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public long getUserid() {
        return userid;
    }
    public void setUserid(long userid) {
        this.userid = userid;
    }
    public String getVehicleName() {
        return vehicleName;
    }
    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }
    public String getFrom() {
        return from;
    }
    public void setFrom(String from) {
        this.from = from;
    }
    public String getTo() {
        return to;
    }
    public void setTo(String to) {
        this.to = to;
    }
    public String getVehicleTiming() {
        return vehicleTiming;
    }
    public void setVehicleTiming(String vehicleTiming) {
        this.vehicleTiming = vehicleTiming;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getPricePerHead() {
        return pricePerHead;
    }
    public void setPricePerHead(String pricePerHead) {
        this.pricePerHead = pricePerHead;
    }
    public String getNoOfPersons() {
        return noOfPersons;
    }
    public void setNoOfPersons(String noOfPersons) {
        this.noOfPersons = noOfPersons;
    }

    

}