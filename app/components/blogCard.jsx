"use client";
import { useState, useEffect } from "react";
import Link from 'next/link'
import './blogCard.css';
const blogs = (props) => {


    const { setter, blog } = props;


    return (
        <>
            <div className="blog-info">
                <div>

                    <p>{blog.id}</p>
                    <Link className="blogcard-link" href={"/articles/" + blog.documentId}>
                        <p className="title-blog">{blog.title}</p>
                    </Link>

                    <img className="img-blog" src={"./img/" + blog.Thumbnail} alt="Blog" width="200" height="200"></img>
                </div>
            </div>

        </>

    );
}

export default blogs;
