package com.niit.model;

import java.util.Date;

public class OutputMessage extends Message
{
	private Date time;
    private String username;
    
    public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public OutputMessage(Message original, Date time) {
        super(original.getId(), original.getMessage());
        this.time = time;
    }
    
    public Date getTime() {
        return time;
    }
    
    public void setTime(Date time) {
        this.time = time;
    }
}
