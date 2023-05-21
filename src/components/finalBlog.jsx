import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import FinalBlog from "./blogFinal";


export default function Blog() {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch("http://localhost:8080/blog/getAll")
            .then(res => res.json())
            .then((result) => {
                setBlogs(result);
            })
    }, [])
    return (
        <>
            <div>
                {blogs.map((blog) => {
                    return (
                        // <FinalBlog data={blog} key={blog.id} />
                        <Container key={blog.id}>
                            Id:{blog.id}
                            <br />
                            hostel_details:{blog.hostel_details}
                            <br />
                            Placement Details:{blog.placement_details}
                            <br />
                            Ratings:{blog.ratings}
                            <br />
                            Review:{blog.review}
                        </Container>
                    )
                })
                }
            </div>



        </>
    )
}
                // <FinalBlog key={blog.id} cusName={blog.ratings} />



