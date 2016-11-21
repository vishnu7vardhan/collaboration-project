package com.niit.dao;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.niit.model.Forum;

import java.util.List;

import javax.transaction.Transactional;

@Repository("forumDAO")
@Transactional
public class ForumDaoImpl implements ForumDao {

	@Autowired
	private SessionFactory sessionFactory;

	public ForumDaoImpl() {
		super();
	}

	public ForumDaoImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	@Transactional
	public void saveOrUpdateForum(Forum forum) {

		Session session = sessionFactory.openSession();
		try {
			session.saveOrUpdate(forum);
			session.flush();
		} catch (HibernateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Transactional
	public Forum getForumById(String forumId) {
		Session session = sessionFactory.openSession();
		return (Forum) session.get(Forum.class, forumId);
	}

	@Transactional
	public boolean delete(String forumId) {
		// TODO Auto-generated method stub
		try {

			Forum forum = getForumById(forumId);
			sessionFactory.getCurrentSession().delete(forum);
			sessionFactory.getCurrentSession().flush();

			return true;
		} catch (HibernateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return false;
	}

	@Transactional
	public List<Forum> getAllForums() {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from Forum");
		List<Forum> forums = query.list();
		return forums;
	}

}

