package com.examly.springapp.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.examly.springapp.config.SecurityUtils;
import com.examly.springapp.dao.BookingDao;
import com.examly.springapp.model.UserDaoo;
import com.examly.springapp.model.Booking;
import com.examly.springapp.dao.UserDao1;

@Service
public class BookingService {
    List<Booking> list;
    
    @Autowired
    private BookingDao bookrepo;

    @Autowired
    private UserDao1 dao;


    public BookingService(BookingDao bookrepo) {
        super();
        this.list = list;
        this.bookrepo = bookrepo;
    }

    public List<Booking> getBooking() {
		return this.bookrepo.findAll();
	}

    public List<Booking>getUserBooking(){
        UserDaoo user = dao.findByUsername(SecurityUtils.getCurrentUserLogin().get());
        System.out.println(user.toString());
        List<Booking> temp = getBooking();
        List<Booking> result = new ArrayList<>();
        for(Booking A:temp){
            System.out.println(A.toString());
            if(A.getUserid()==(user.getId())){
                result.add(A);
            }
        }
        return result;
    }


    public Booking getBookingById(Long id) {
        return bookrepo.findById(id).get();
    }
    
    public void saveBooking(Booking booking) {
        bookrepo.save(booking);
    }

    public void deleteBooking(Long id) {
        bookrepo.deleteById(id);
    }
}