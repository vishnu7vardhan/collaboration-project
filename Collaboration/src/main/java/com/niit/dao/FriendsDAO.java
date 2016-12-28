package com.niit.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.niit.model.Friends;
import com.niit.model.UsersDetail;
//import com.niit.model.UsersDetail;

@Repository("friendsDAO")
public interface FriendsDAO {

	public List<Friends> getMyFriend(String userID);
	
	public Friends get(String userID, String friendID);

		public boolean save(Friends friends);
		public boolean update(Friends friends);
		public boolean delete(String userID, String friendID);
		public List<Friends> getNewFriendRequests(String userID);
		public List<UsersDetail> showNewUsers(String userID);
		public void setOnline(String userID);
		public void setOffLine(String loggedInUserID);
	
	
}
