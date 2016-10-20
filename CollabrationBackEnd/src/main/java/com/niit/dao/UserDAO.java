package com.niit.dao;

import java.util.List;

import com.niit.model.User1;

public interface UserDAO {

	public List<User1> list();

	public User1 get(String Id);
	
	public User1 getByName(String Name);

	public void saveOrUpdate(User1 user);

	public void delete(String id);
}
