"use client";
import { useState, useEffect, useReducer, useContext } from "react";
import Blogs from "./blogs";
import Menu from "./menu";

const app = () => {
    const [BlogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch("https://jsonfakery.com/blogs")
            .then(response => response.json())
            .then(data => {

                setBlogData(data)
            })
            .catch(error => {

                console.error('Error fetching data:', error);
            });
    }, [1]);


    return (
        <div>
            <Menu />
            {BlogData.map((blog, key) => (
                <div key={key}>
                    <Blogs
                        blog={blog}
                    />

                </div>
            ))}


            <h1>môj blog</h1>
        </div>

    )
}

export default app