"use client";
import { useState, useEffect } from "react";
import './blogPost.css';
const blogPost = (props) => {
    const { blog } = props;


    return (
        <>
            <div className="post">
                <p>{blog.description}</p>
            </div>
            <div className={"article-post"}>
                {!!blog.Body && blog.Body.map((BodyPart) => ( // ked blog body je vybraty tak vtedy sa zobrazi

                    BodyPart.children.map((child, key) => (
                        <div key={key}>
                            <p>{child.text}</p>
                        </div>
                    ))
                ))}

            </div >
        </>
    );
}

export default blogPost;
