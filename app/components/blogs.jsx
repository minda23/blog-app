"use client";
import { useState, useEffect } from "react";
import './blogs.css';
const blogs = (props) => {
    const { blog } = props;
    return (
        <div>

            <div className="blog-text">
                <div className="blog-title">
                    <h1>{blog.title}</h1></div>
                <div><p>{blog.id}</p></div>
                <div className="article">
                    <article>{blog.summary}</article></div>
            </div>


        </div>
    );
}

export default blogs;
