package com.pyclgblog.Pyclgblog.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Blog {
    @Id
    @GeneratedValue
    private int id;
    private String placement_details;
    private String hostel_details;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlacement_details() {
        return placement_details;
    }

    public void setPlacement_details(String placement_details) {
        this.placement_details = placement_details;
    }

    public String getHostel_details() {
        return hostel_details;
    }

    public void setHostel_details(String hostel_details) {
        this.hostel_details = hostel_details;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRatings() {
        return ratings;
    }

    public void setRatings(int ratings) {
        this.ratings = ratings;
    }

    private String review;

    private int ratings;

}
