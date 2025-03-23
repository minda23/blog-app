"use client";
import { useState, useEffect } from "react";
import BlogCard from "./blogCard";
import BlogPost from "./blogPost";
import Menu from "./menu";
import moment from "moment";
import './app.css';
import Tags from "./Tags";



const app = () => {
    const maximumsize = 4;

    const [BlogData, setBlogData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState("");

    let emptyBlog = {};

    if (selectedBlogId !== "") {
        const blogfull = BlogData.find((element) => element.id === selectedBlogId)
        emptyBlog = blogfull;
    }


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


                const sliceData = data.slice(1, maximumsize)

                const convertedData = sliceData.map((item) => ({
                    ...item,
                    created_at: moment(item.created_at, "-----MM-DD-YYYY"),
                }))
                setBlogData(convertedData)



            }).catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [BlogData, selectedBlogId]);

    return (
        <div>
            <Menu />
            <div className="blog-section">
                <Tags />
                {!!selectedBlogId && <BlogPost blog={emptyBlog} />}
                {!selectedBlogId &&
                    <div className="blogs">
                        {BlogData.map((blog) => (
                            <div className="blogs" key={blog.id}>
                                <BlogCard setter={setSelectedBlogId} blog={blog} />
                            </div>
                        ))}
                    </div>
                }
            </div>

            <div className="move-blog">
                <p className="previous">previous</p>
                <p className="numbers-pages">1 of 2</p>
                <p className="next">next</p>

            </div>
        </div>
    );

}

export default app