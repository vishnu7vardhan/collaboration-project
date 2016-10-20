
import java.util.Date;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.dao.BlogDAO;
import com.niit.model.Blog;

public class BlogTest {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.niit.*");
		context.refresh();

		BlogDAO blogDAO = (BlogDAO) context.getBean("blogDAO");

		Blog bl = (Blog) context.getBean("blog");

		bl.setBlogName("Blog3");
		bl.setBlogDate(new Date());

		bl.setContents("This Blog 3 is of job");

		blogDAO.saveOrUpdate(bl);

		Blog b2 = (Blog) context.getBean("blog");

		b2.setBlogName("Blog4");
		b2.setBlogDate(new Date());

		b2.setContents("This Blog 4 is of job");
		blogDAO.saveOrUpdate(b2);
	}
}