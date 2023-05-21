package com.pyclgblog.Pyclgblog.backend.repository;

import com.pyclgblog.Pyclgblog.backend.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Blogrepository extends JpaRepository<Blog,Integer> {

}
