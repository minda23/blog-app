"use client";
import { useState, useEffect } from "react";
import './blogCard.css';
const blogs = (props) => {




    const { setter, blog } = props;

    return (
        <>
            <div className="blog-info">
                <div>
                    <p className="date-blog">{blog.created_at.format("MMMM D, YYYY")}</p>
                    <p className="title-blog" onClick={() => { setter(blog.id) }}>{blog.title}</p>
                    <p className="subtitle-blog">{blog.subtitle}</p>
                    <img className="img-blog" src={blog.featured_image} alt="Blog" width="200" height="200"></img>
                </div>
            </div>

        </>

    );
}

export default blogs;
