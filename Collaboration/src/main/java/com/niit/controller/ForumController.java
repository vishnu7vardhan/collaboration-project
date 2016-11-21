package com.niit.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.ForumDao;
import com.niit.model.Forum;

@RestController
public class ForumController {
	@Autowired
	ForumDao forumDao;
	@RequestMapping(value="/addForum",headers="Accept=application/json",method=RequestMethod.POST)
	public void addForum(@RequestBody Forum forum)
	{
		/*int userId=(Integer) session.getAttribute("loggedInUserId");
		forum.setUsersID(userId);
		
		System.out.println("user id inside forum is "+userId);
		*/
		forumDao.saveOrUpdateForum(forum);
	}
	@RequestMapping(value="/viewForums",headers="Accept=application/json",method=RequestMethod.GET)
	public List<Forum> viewForums()
	{
		return forumDao.getAllForums();
	}
	@RequestMapping(value="/updateForum",headers="Accept=application/json",method=RequestMethod.PUT)
	public void updateForum(@RequestBody Forum forum)
	{
		System.out.println("Inside update forum");
		forumDao.saveOrUpdateForum(forum);
	}
	@RequestMapping(value="/deleteForum/{id}",headers="Accept=application/json",method=RequestMethod.DELETE)
	public void deleteForum(@PathVariable String id)
	{
		forumDao.delete(id);
	}

}


