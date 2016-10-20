package com.niit.model;

import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.Id;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "BLOG")
@Component
public class Blog {

	@Id
	
	@GeneratedValue
	private int Id;
	private Date BlogDate;
	private String UserId;
	private String BlogName;
	private String Contents;
	
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public Date getBlogDate() {
		return BlogDate;
	}
	public void setBlogDate(Date blogDate) {
		BlogDate = blogDate;
	}
	public String getUserId() {
		return UserId;
	}
	public void setUserId(String userId) {
		UserId = userId;
	}
	public String getBlogName() {
		return BlogName;
	}
	public void setBlogName(String blogName) {
		BlogName = blogName;
	}
	public String getContents() {
		return Contents;
	}
	public void setContents(String contents) {
		Contents = contents;
	}
	

}
