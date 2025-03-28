"use client";
import { useState, useEffect } from "react";
import './blogPost.css';
const blogPost = (props) => {
    const { blog } = props;


    return (
        <>
            (
            <div className="post">
                <p>{blog.main_content}</p>
            </div>


            )
        </>

    );
}

export default blogPost;
