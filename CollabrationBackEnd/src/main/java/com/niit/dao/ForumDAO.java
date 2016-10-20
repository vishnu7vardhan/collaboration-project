package com.niit.dao;

import java.util.List;

import com.niit.model.Forum;



public interface ForumDAO {

	public List<Forum> list();

	public Forum get(String id);
	
	public boolean saveOrUpdate(Forum forum);

	public boolean delete(String id);

}
