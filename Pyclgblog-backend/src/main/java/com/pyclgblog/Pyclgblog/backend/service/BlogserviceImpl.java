package com.pyclgblog.Pyclgblog.backend.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pyclgblog.Pyclgblog.backend.model.Blog;
import com.pyclgblog.Pyclgblog.backend.repository.Blogrepository;
@Service
public class BlogserviceImpl implements Blogservice{

	@Autowired
	private Blogrepository blogrepository;
	@Override
	public Blog saveBlog(Blog blog) {
		// TODO Auto-generated method stub
		return blogrepository.save(blog);
	}
	
	public List<Blog> getAllDetails(){
		return blogrepository.findAll();
		
		
	}
	

	
}
