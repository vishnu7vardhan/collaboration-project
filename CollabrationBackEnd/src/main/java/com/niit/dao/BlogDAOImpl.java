package com.niit.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.Blog;

@Repository("blogDAO")
public class BlogDAOImpl  implements BlogDAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	public BlogDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public BlogDAOImpl() {
		super();
	}
	@Transactional
	public List<Blog> list() {
		System.out.println("list it");
		@SuppressWarnings("unchecked")
		List<Blog> listBlog = (List<Blog>) 
		          sessionFactory.getCurrentSession()
				.createCriteria(Blog.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();

		return listBlog;
	}
	@Transactional
	public void saveOrUpdate(Blog blog) {
		sessionFactory.getCurrentSession().saveOrUpdate(blog);
	}
	@Transactional
	public void delete(int Id) {
		Blog BlogToDelete = new Blog();
		BlogToDelete.setId(Id);
	
		sessionFactory.getCurrentSession().delete(BlogToDelete);
	}
	@Transactional
	public Blog get(int Id) {
		String hql = "from BLOG1 where Id=" + Id ;
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		
		@SuppressWarnings("unchecked")
		List<Blog> listBlog = (List<Blog>) query.list();
		
		if (listBlog != null && !listBlog.isEmpty()) {
			return listBlog.get(0);
		}
		
		return null;
	}


	
}
