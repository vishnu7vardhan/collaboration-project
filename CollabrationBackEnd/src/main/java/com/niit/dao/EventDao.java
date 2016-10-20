package com.niit.dao;

import java.util.List;

import com.niit.model.Event;

public interface EventDao {

	public void saveOrUpdateEvent(Event blog);

	public Event getEventById(String blogId);

	public boolean delete(Event blog);
}