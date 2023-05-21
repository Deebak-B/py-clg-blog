package com.pyclgblog.Pyclgblog.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pyclgblog.Pyclgblog.backend.service.*;
import com.pyclgblog.Pyclgblog.backend.model.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/blog")
@CrossOrigin
public class Blogcontroller {
	@Autowired

	private Blogservice blogservice;	
	@PostMapping("/add")
	public String add(@RequestBody Blog blog) {
		blogservice.saveBlog(blog);
		return "new Student is added!";
	}
	
	@GetMapping("/getAll")
	public List<Blog> getAllDetails(){
		return blogservice.getAllDetails();
	}
	
	
}
