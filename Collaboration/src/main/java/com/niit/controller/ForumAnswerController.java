package com.niit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.ForumAnswerDao;
import com.niit.model.ForumAnswer;

@RestController
public class ForumAnswerController {
	@Autowired
	ForumAnswerDao forumAnswerDao;
	@RequestMapping(value="/addAnswer",headers="Accept=application/json",method=RequestMethod.POST)
	  public void addAnswer(@RequestBody ForumAnswer forumAnswer)
	  {
		 forumAnswerDao.saveOrUpdate(forumAnswer); 
	  }
	@RequestMapping(value="/viewAnswers",headers="Accept=application/json",method=RequestMethod.GET)
	  public List<ForumAnswer> viewAnswers(ForumAnswer forumAnswer)
	  {
		 return forumAnswerDao.list();
	  }
	@RequestMapping(value="/updateAnswer",headers="Accept=application/json",method=RequestMethod.PUT)
	public void updateAnswer(@RequestBody ForumAnswer forumAnswer)
	{
		forumAnswerDao.saveOrUpdate(forumAnswer);
	}
	@RequestMapping(value="/deleteAnswer/{id}",headers="Accept=application/json",method=RequestMethod.DELETE)
	public void deleteAnswer(@PathVariable("id") int id)
	{
		forumAnswerDao.delete(id);
	}
	@RequestMapping(value="/getAnswers/{id}",headers="Accept=application/json",method=RequestMethod.GET)
	public List<ForumAnswer> getAnswer(@PathVariable("id") int id)
	{
		return forumAnswerDao.getAnswers(id);
	}
}
