package com.niit.dao;

import java.util.List;

import com.niit.model.Forum;

public interface ForumDao {

	public void saveOrUpdateForum(Forum forum);

	public Forum getForumById(String forumId);

	public List<Forum> getAllForums();
	
	public boolean delete(String forumId);
}

