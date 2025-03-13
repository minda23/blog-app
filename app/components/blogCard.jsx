"use client";
import { useState, useEffect } from "react";
import './blogCard.css';
const blogs = (props) => {
    const { blog } = props;
    return (
        <div>
            <p>{blog.created_at}</p>
            <p>{blog.title}</p>
            <p>{blog.subtitle}</p>
        </div>
    );
}

export default blogs;
