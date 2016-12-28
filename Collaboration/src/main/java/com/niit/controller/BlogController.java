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
import com.niit.dao.BlogDao;
import com.niit.model.Blog;
import com.niit.model.Job;

@RestController
public class BlogController {
	@Autowired
	BlogDao blogDao;
	@RequestMapping(value="/addBlog",headers="Accept=application/json",method=RequestMethod.POST)
	public void addBlog(@RequestBody Blog blog, HttpSession session)
	{
		int userId=(Integer) session.getAttribute("loggedInUserId");
		blog.setUsersID(userId);
		//blog.setDateOfCreation(new Date());
		
		
		DateFormat df = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss");
		Date today = new Date();        
		String reportDate = df.format(today);
		System.out.println("Report Date: " + reportDate);
		
		
		blog.setBlogCreationDate(reportDate);
		
		System.out.println("user id inside blog is "+userId);
		blog.setApproved(0);
		blogDao.saveOrUpdateBlog(blog);
	}
	@RequestMapping(value="/viewBlogs",headers="Accept=application/json",method=RequestMethod.GET)
	public String viewBlogs()
	{
		
		List<Blog> list= blogDao.getAllBlogs();
		
		Gson gson= new Gson();
		String object;
		object=gson.toJson(list);
		
		return object;
	}
	@RequestMapping(value="/updateBlog",headers="Accept=application/json",method=RequestMethod.PUT)
	public void updateBlog(@RequestBody Blog blog, HttpSession session)
	{
		
		System.out.println("Inside update blog");
		int userId=(Integer) session.getAttribute("loggedInUserId");
		blog.setUsersID(userId);
		//blog.setDateOfCreation(new Date());
		
		DateFormat df = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss");
		Date today = new Date();        
		String reportDate = df.format(today);
		System.out.println("Report Date: " + reportDate);
		
		
		blog.setBlogCreationDate(reportDate);
		
		
		blogDao.saveOrUpdateBlog(blog);
	}
	@RequestMapping(value="/deleteBlog/{id}",headers="Accept=application/json",method=RequestMethod.DELETE)
	public void deleteBlog(@PathVariable String id)
	{
		blogDao.delete(id);
	}
	
	@RequestMapping(value="/approveBlog/{i}",headers="Accept=application/json",method=RequestMethod.PUT)
	public void approveBlog(@RequestBody Blog blog,@PathVariable int i)
	{
		blog.setApproved(i);
		System.out.println("Inside approve blog");
		blogDao.saveOrUpdateBlog(blog);
	}

}
