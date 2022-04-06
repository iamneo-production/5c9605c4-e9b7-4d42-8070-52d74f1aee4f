package com.examly.springapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="review")
public class Review {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    private Long userid;
    private Long vid;
    private String desc;
    private String rating;
    private String username;

    
    

    @Override
    public String toString() {
        return "Review [desc=" + desc + ", id=" + id + ", rating=" + rating + ", userid=" + userid + ", username="
                + username + ", vid=" + vid + "]";
    }
    public Review() {
    }
    public Review(Long id, Long userid, Long vid, String desc, String rating, String username) {
        this.id = id;
        this.userid = userid;
        this.vid = vid;
        this.desc = desc;
        this.rating = rating;
        this.username = username;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getUserid() {
        return userid;
    }
    public void setUserid(Long userid) {
        this.userid = userid;
    }
    public Long getVid() {
        return vid;
    }
    public void setVid(Long vid) {
        this.vid = vid;
    }
    public String getDesc() {
        return desc;
    }
    public void setDesc(String desc) {
        this.desc = desc;
    }
    public String getRating() {
        return rating;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    
}
