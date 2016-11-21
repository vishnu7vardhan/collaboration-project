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
public class Forum {
		@Id
	    private String forumId;
		private String name;
		private String topic;
		private String content;
		private int usersID;
		private Date dateOfCreation;
		
	
		public String getForumId() {
			return forumId;
		}

		public void setForumId(String forumId) {
			this.forumId = forumId;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getTopic() {
			return topic;
		}

		public void setTopic(String topic) {
			this.topic = topic;
		}

		public int getUsersID() {
			return usersID;
		}

		public void setUsersID(int usersID) {
			this.usersID = usersID;
		}

		public Date getDateOfCreation() {
			return dateOfCreation;
		}

		public void setDateOfCreation(Date dateOfCreation) {
			this.dateOfCreation = dateOfCreation;
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
		@Transient
		private String errorCode;
		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}
		@Transient
		private String errorMessage;
	
		
		
		

		
}

