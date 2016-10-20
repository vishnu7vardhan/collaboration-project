import java.util.Date;
import java.util.List;

import org.dom4j.util.UserDataAttribute;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.dao.ForumDAO;
import com.niit.dao.UserDAO;
import com.niit.dao.UserDAOImpl;
import com.niit.model.Forum;
import com.niit.model.User1;

public class ForumTest {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.niit.*");
		context.refresh();

		Forum forum = (Forum) context.getBean("forum");

		ForumDAO forumDAO = (ForumDAO) context.getBean("forumDAO");
		
		forum.setForumId("FORUM_001");
		forum.setDateOfCreation(new Date());
		forum.setDescription("ITI JOB ONLY");
		forum.setUserID("USER_001");
		forum.setName("job");
		forum.setTopic("topic");
		forumDAO.saveOrUpdate(forum);
		
		forum.setForumId("FORUM_002");
		forum.setDateOfCreation(new Date());
		forum.setDescription("ITI JOB ONLY");
		forum.setUserID("USER_001");
		forum.setName("job");
		forum.setTopic("topic");
		forumDAO.saveOrUpdate(forum);
		
		forum.setForumId("FORUM_004");
		forum.setDateOfCreation(new Date());
		forum.setDescription("ITI JOB ONLY");
		forum.setUserID("USER_001");
		forum.setName("job");
		forum.setTopic("topic");
		forumDAO.saveOrUpdate(forum);
		
		List<Forum> list = forumDAO.list();

		for (Forum u : list) {
			System.out.println(u.getForumId() + "\t" + u.getName() + "\t" + u.getTopic()+"\t" + u.getDescription()+"\t" + u.getDateOfCreation());
		}
		
		
		/*Forum u=forumDAO.get("FORUM_001");
		System.out.println(u.getForumId() + "\t" + u.getName() + "\t" + u.getTopic()+"\t" + u.getDescription()+"\t" + u.getUserID()+"\t" + u.getDateOfCreation());
		
		boolean flag=forumDAO.delete("FORUM_001");
		System.out.println("delete  "+flag);*/
	}
}