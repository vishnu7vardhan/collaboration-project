package com.niit.dao;

import javax.transaction.Transactional;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.hibernate.Criteria;
import com.niit.model.User1;
import org.hibernate.Query;


@Repository("userDAO")
public class UserDAOImpl implements UserDAO {
	@Autowired
	private SessionFactory sessionFactory;
	
	public UserDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	


	
	
	
	public UserDAOImpl() {
		super();
	}

	@Transactional
	public List<User1> list() {
		
		@SuppressWarnings("unchecked")
		List<User1> listUser = (List<User1>) 
		          sessionFactory.getCurrentSession()
				.createCriteria(User1.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();

		return listUser;
	}
	@Transactional
	public void saveOrUpdate(User1 user) {
		sessionFactory.getCurrentSession().saveOrUpdate(user);
	}
	@Transactional
	public void delete(String Id) {
		User1 UserToDelete = new User1();
		UserToDelete.setId(Id);
	
		sessionFactory.getCurrentSession().delete(UserToDelete);
	}
	@Transactional
	public User1 get(String Id) {
		String hql = "from USER where Id=" + "'"+Id +"'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		
		@SuppressWarnings("unchecked")
		List<User1> listUser = (List<User1>) query.list();
		
		if (listUser != null && !listUser.isEmpty()) {
			return listUser.get(0);
		}
		
		return null;
	}
	@Transactional
	public User1 getByName(String Name) {
		String hql = "from USER where Name=" + "'"+ Name +"'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		
		@SuppressWarnings("unchecked")
		List<User1> listUser = (List<User1>) query.list();
		
		if (listUser != null && !listUser.isEmpty()) {
			return listUser.get(0);
		}
		
		return null;
	}


}
