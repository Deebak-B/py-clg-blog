package com.mscomm.blogservice.service;

import com.mscomm.blogservice.entity.*;

public interface BlogService {
    Blog saveBlog(Blog blog);

    Blog getBlogById(Long blogId);
}