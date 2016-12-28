package com.niit.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.niit.dao.ForumDao;
import com.niit.model.Blog;
import com.niit.model.Forum;

@RestController
public class ForumController {
	@Autowired
	ForumDao forumDao;
	@RequestMapping(value="/addForum",headers="Accept=application/json",method=RequestMethod.POST)
	public void addForum(@RequestBody Forum forum,HttpSession session)
	{
		int userId=(Integer) session.getAttribute("loggedInUserId");
		forum.setUsersID(userId);
		DateFormat df = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss");
		Date today = new Date();        
		String reportDate = df.format(today);
		System.out.println("Report Date: " + reportDate);
		
		
		forum.setDateOfCreation(reportDate);
		
		
		System.out.println("user id inside forum is "+userId);
		
		
		forumDao.saveOrUpdateForum(forum);
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
	@RequestMapping(value="/viewForums",headers="Accept=application/json",method=RequestMethod.GET)
	public String viewForums()
	{
		
		List<Forum> list= forumDao.getAllForums();
		
		Gson gson= new Gson();
		String object;
		object=gson.toJson(list);
		
		return object;
	}
}


