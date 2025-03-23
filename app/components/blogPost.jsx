"use client";
import { useState, useEffect } from "react";
import './blogCard.css';
const blogPost = (props) => {
    const { blog } = props;


    return (
        <>
            (
            <div>
                <p>{blog.main_content}</p>
            </div>


            )
        </>

    );
}

export default blogPost;
