package com.pyclgblog.Pyclgblog.backend.service;

import java.util.ArrayList;
import java.util.List;
import com.pyclgblog.Pyclgblog.backend.model.Blog;
public interface Blogservice {
	public Blog saveBlog(Blog blog);
	

	public List<Blog> getAllDetails();

}
