package com.examly.springapp.dao;
import com.examly.springapp.model.UserDaoo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao1 extends JpaRepository<UserDaoo, Long> {
    UserDaoo findByUsername(String username);
    // UserDaoo findById(Long id);
}