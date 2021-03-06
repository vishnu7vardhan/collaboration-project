package com.niit.test;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.dao.BlogDao;
import com.niit.dao.UsersDetailDao;
import com.niit.model.Blog;
import com.niit.model.UsersDetail;

public class BlogTest {

	public static void main(String[] args) {

		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.niit.*");
		context.refresh();

		Blog blog = (Blog) context.getBean("blog");
		BlogDao blogDAO = (BlogDao) context.getBean("blogDao");

		// INSERT OBJECTS INTO DB

		blog.setBlogId("BLOG_001");
		blog.setContent("Content");
		blog.setDateOfCreation(new Date());
		
				// Create an instance of SimpleDateFormat used for formatting 
				// the string representation of date (month/day/year)
				//DateFormat df = new SimpleDateFormat("medium");
				
				//DateFormat df = DateFormat.getDateInstance(DateFormat.LONG);
				
		
		
				DateFormat df = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss");
		
		
		
		
		
		
				//myString = DateFormat.getDateInstance().format(myDate);
				
				// Get the date today using Calendar object.
				Date today = new Date();        
				// Using DateFormat format method we can create a string 
				// representation of a date with the defined format.
				String reportDate = df.format(today);

				// Print what date is today!
				System.out.println("Report Date: " + reportDate);
				
				
		blog.setBlogCreationDate(reportDate);
		
		blog.setTitle("title");
		blog.setUsersID(389);
		blog.setApproved(0);
		blog.setCategory("this is category");
		blogDAO.saveOrUpdateBlog(blog);

	/*	blog.setBlogId("BLOG_002");
		blog.setContent("Content");
		blog.setDateOfCreation(new Date());
		blog.setTitle("title");
	//	blog.setUsersID("USER_001");
		blog.setCategory("this is category");
		blogDAO.saveOrUpdateBlog(blog);

		blog.setBlogId("BLOG_003");
		blog.setContent("Content");
		blog.setDateOfCreation(new Date());
	//	blog.setUsersID("USER_002");
		blog.setCategory("this is category");
		blog.setTitle("title");
		blogDAO.saveOrUpdateBlog(blog);

		blog = blogDAO.getBlogById("BLOG_002");
		System.out.println(blog.getContent() + "\t" + blog.getTitle() + "\t" + "\t" + blog.getDateOfCreation());
*/
		/*
		 * boolean flag=blogDAO.delete(blog); System.out.println("delete  "
		 * +flag);
		 */
		context.close();
	}
}