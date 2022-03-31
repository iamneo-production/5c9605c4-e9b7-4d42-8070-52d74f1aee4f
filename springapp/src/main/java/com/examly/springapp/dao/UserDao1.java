package com.examly.springapp.dao;
import com.examly.springapp.model.UserDaoo;
import org.springframework.data.repository.CrudRepository;
public interface UserDao1 extends CrudRepository<UserDaoo, Integer> {
    UserDaoo findByUsername(String username);
}