package com.mscomm.blogservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "blogs")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Blog {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String collegename;
	    private String intro;
	    private String courses;
	    private String hostel;
	    private String location;
	    
}
