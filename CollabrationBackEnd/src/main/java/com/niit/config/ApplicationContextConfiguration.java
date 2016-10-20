package com.niit.config;

import java.util.Properties;

import javax.management.relation.Role;
import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.niit.dao.BlogDAO;
import com.niit.dao.BlogDAOImpl;

import com.niit.dao.EventDao;
import com.niit.dao.EventDaoImpl;
import com.niit.dao.ForumDAO;
import com.niit.dao.ForumDAOImpl;
import com.niit.dao.UserDAO;
import com.niit.dao.UserDAOImpl;
import com.niit.model.Blog;
import com.niit.model.Event;
import com.niit.model.Forum;
import com.niit.model.User1;


@Configuration
@ComponentScan("com.niit.*")
@EnableTransactionManagement
public class ApplicationContextConfiguration {

	@Bean(name = "dataSource")
	public DataSource getDataSource() {
		
		/* BasicDataSource dataSource = new BasicDataSource();
		 dataSource.setDriverClassName("org.h2.Driver");
		 dataSource.setUrl("jdbc:h2:tcp://localhost/~/temp");
		 dataSource.setUsername("sa"); dataSource.setPassword("sa");
		*/ 

		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("oracle.jdbc.driver.OracleDriver");
		dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:xe");
		dataSource.setUsername("system");
		dataSource.setPassword("sa");

		return dataSource;
	}

	private Properties getHibernateProperties() {
		Properties properties = new Properties();
		properties.put("hibernate.show_sql", "true");
		
		//  properties.put("hibernate.dialect","org.hibernate.dialect.H2Dialect");
		

		properties.put("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");

		properties.put("hibernate.hbm2ddl.auto", "update");
		return properties;
	}

	@Autowired
	@Bean(name = "sessionFactory")
	public SessionFactory getSessionFactory(DataSource dataSource) {

		LocalSessionFactoryBuilder sessionBuilder = new LocalSessionFactoryBuilder(dataSource);
		sessionBuilder.addProperties(getHibernateProperties());
		sessionBuilder.addAnnotatedClasses(User1.class);
		sessionBuilder.addAnnotatedClasses(Role.class);
		sessionBuilder.addAnnotatedClass(Forum.class);
		sessionBuilder.addAnnotatedClass(Blog.class);
		sessionBuilder.addAnnotatedClass(Event.class);
		/*sessionBuilder.addAnnotatedClass(Chat.class);
		sessionBuilder.addAnnotatedClass(Friend.class);*/
		return sessionBuilder.buildSessionFactory();
	}

	@Autowired
	@Bean(name = "transactionManager")
	public HibernateTransactionManager getTransactionManager(SessionFactory sessionFactory) {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager(sessionFactory);

		return transactionManager;
	}

	@Autowired
	@Bean(name = "userDAO")
	public UserDAO getusersDetailDao(SessionFactory sessionFactory) {
		return new UserDAOImpl(sessionFactory);
	}
	@Autowired
	@Bean(name = "eventDao")
	public EventDao getEventDao(SessionFactory sessionFactory) {
		return new EventDaoImpl(sessionFactory);
	}
	/*@Autowired
	@Bean(name = "roleDao")
	public RoleDAO getroleDao(SessionFactory sessionFactory) {
		return new RoleDAOImpl(sessionFactory);
	}
	
	@Autowired
	@Bean(name = "chatDao")
	public ChatDao getChatDao(SessionFactory sessionFactory) {
		return new ChatDaoImpl(sessionFactory);
	}
	*/
	@Autowired
	@Bean(name = "blogDAO")
	public BlogDAO getBlogDao(SessionFactory sessionFactory) {
		return new BlogDAOImpl(sessionFactory);
	}
/*	
	@Autowired
	@Bean(name = "friendDAO")
	public FriendDAO getFriendDao(SessionFactory sessionFactory) {
	return new FriendDAOImpl(sessionFactory);
	}*/

	@Autowired
	@Bean(name = "forumDAO")
	public ForumDAO getForumDao(SessionFactory sessionFactory) {
	return new ForumDAOImpl(sessionFactory);
	}

}
