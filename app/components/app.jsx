"use client";
import { useState, useEffect, useReducer, useContext } from "react";
import Blogs from "./blogCard";
import Menu from "./menu";
import moment from "moment";

const app = () => {
    const [BlogData, setBlogData] = useState([]);

    BlogData.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return 1;
        } else if (a.created_at < b.created_at) {
            return -1;
        }
        return 0;
    })

    useEffect(() => {
        fetch("https://jsonfakery.com/blogs")
            .then(response => response.json())
            .then(data => {
                const convertedData = data.map((item) => ({
                    ...item,
                    created_at: moment(item.created_at, "-----MM-DD-YYYY")

                }))
                setBlogData(convertedData)
            })
            .catch(error => {

                console.error('Error fetching data:', error);
            });
    }, []);


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