

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.dao.UserDAO;
import com.niit.model.User1;

public class UserTest {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.niit.*");
		context.refresh();
		
	User1 user =(User1)context.getBean("user1");
	
	
	UserDAO userDAO = (UserDAO)context.getBean("userDAO");
	user.setId("User_03");
	user.setName("RANI");
	user.setPassword("rani");
	user.setEmail("RANI@gmail.com");
	user.setPhone("9989557955");
	user.setYearOfJoin(2011);
	
	user.setRollNo("12F323");
	userDAO.saveOrUpdate(user);
	
	User1 u1 =(User1)context.getBean("user1");
	
	u1.setId("User_04");
	u1.setName("RAMA");
	u1.setPassword("rama");
	u1.setEmail("RAMA@gmail.com");
	u1.setPhone("9908948761");
	u1.setYearOfJoin(2012);
	
	u1.setRollNo("12F324");
	userDAO.saveOrUpdate(user);
	
}
}