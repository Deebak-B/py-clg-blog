package com.mscomm.blogservice.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.blogservice.entity.Blog;
import com.mscomm.blogservice.service.BlogService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/blogs")
@AllArgsConstructor
public class BlogController {
@Autowired
	private BlogService blogService;

    @PostMapping
    public ResponseEntity<Blog> saveBlog(@RequestBody Blog blog){
        Blog savedBlog = blogService.saveBlog(blog);
        return new ResponseEntity<>(savedBlog, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable("id") Long blogId){
        Blog blog = blogService.getBlogById(blogId);
        return ResponseEntity.ok(blog);
    }
}

