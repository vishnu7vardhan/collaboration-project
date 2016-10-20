package com.niit.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "USER1")
@Component
public class User1 {
	
	@Id
	@Column(name="UserId")
	private String Id;
	private String Name;
	private String Password;
	private String Email;
	private String Phone;
	
	private int YearOfJoin;
	private String RollNo;
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	
	public int getYearOfJoin() {
		return YearOfJoin;
	}
	public void setYearOfJoin(int yearOfJoin) {
		YearOfJoin = yearOfJoin;
	}
	public String getRollNo() {
		return RollNo;
	}
	public void setRollNo(String rollNo) {
		RollNo = rollNo;
	}
	

}
