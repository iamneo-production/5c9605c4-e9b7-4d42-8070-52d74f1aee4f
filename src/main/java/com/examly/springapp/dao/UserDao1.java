package com.examly.springapp.dao;
import com.examly.springapp.model.UserDaoo;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
public interface UserDao1 extends CrudRepository<UserDaoo, Long> {
    UserDaoo findByUsername(String username);
    List < UserDaoo > findAll();
}