package com.niit.model;

import javax.persistence.Entity;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Component
public class Blog {
		@Id
	    private String blogId;
		private String title;
		private int usersID;
		private Date dateOfCreation;
		private String content;
		private String category;
		@Transient
		private String errorCode;
		@Transient
		private String errorMessage;
	
		
		
		public int getUsersID() {
			return usersID;
		}

		public void setUsersID(int userId) {
			this.usersID = userId;
		}

		public String getCategory() {
			return category;
		}

		public void setCategory(String category) {
			this.category = category;
		}

		public String getErrorCode() {
			return errorCode;
		}

		public void setErrorCode(String errorCode) {
			this.errorCode = errorCode;
		}

		public String getErrorMessage() {
			return errorMessage;
		}
		
		public void setErrorMessage(String errorMessage) {
			this.errorMessage = errorMessage;
		}
		public String getBlogId() {
			return blogId;
		}
		public void setBlogId(String blogId) {
			this.blogId = blogId;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		
		public Date getDateOfCreation() {
			return dateOfCreation;
		}
		public void setDateOfCreation(Date dateOfCreation) {
			this.dateOfCreation = dateOfCreation;
		}
		public String getContent() {
			return content;
		}
		public void setContent(String content) {
			this.content = content;
		}
}
