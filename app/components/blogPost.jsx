"use client";
import { useState, useEffect } from "react";
import './blogPost.css';
import BlogPostPart from "./blogPostPart";

const blogPost = (props) => {
    const { blog } = props;

    return (
        <>
            <div className="heading">
                <p>{blog.description}</p>
            </div>
            <div className="article-post">
                {!!blog.Body && blog.Body.map((BodyPart, index) => (
                    <div key={index}>
                        {BodyPart.children.map((child, key) => (
                            <BlogPostPart blogPart={child} key={key} />

                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}


export default blogPost;
