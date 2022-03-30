package com.examly.springapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="passengers")
public class Passenger implements Serializable{
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;

    public String firstName;
	public String lastName;
	public String age;
	public String gender;

    //  {firstName="abc",
	//  lastName="def",
	//  age=20,
	//  gender=m}


    @Override
    public String toString() {
        return "Passenger [age=" + age + ", firstName=" + firstName + ", gender=" + gender + ", id=" + id
                + ", lastName=" + lastName + "]";
    }
    public Passenger() {
    }
    public Passenger(Long id, String firstName, String lastName, String age, String gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    } 

    

}
