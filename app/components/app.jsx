"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/header"
import BlogCard from "./blogCard";
import BlogPost from "./blogPost";
import Menu from "./menu";
import moment from "moment";
import './app.css';
import Tag from "./Tag";
import Loader from "./Loader";
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const App = () => {

    const [BlogData, setBlogData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState("");
    const [selectedTag, setSelectedBlogByTag] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const textWithNameCode = BlogData.filter((element) => element.code === true);

    function handleNext() {
        setPage(page + 1)
    }


    function handlePrevious() {
        setPage(page - 1)

    }

    let emptyBlog = {};

    if (selectedBlogId !== "") {
        const blogfull = BlogData.find((element) => element.id === selectedBlogId)
        emptyBlog = blogfull;
    }

    let filteredBlogByTag = BlogData;
    if (selectedTag !== "") {
        let emptyTag1 = BlogData.filter((element) => element.category === selectedTag)
        filteredBlogByTag = emptyTag1;

    }

    const categoryCounts = {
        "React": 0,
        "Vanilla js": 0,
    };

    const changecategory = Object.entries(categoryCounts).map((categoryArray) => {
        const AllBlogsInThisCategory = BlogData.filter((item) => item.category === categoryArray[0])
        const NumberOfBlogsInThisCategory = AllBlogsInThisCategory.length

        return [NumberOfBlogsInThisCategory, categoryArray[0]]

    }
    )

    BlogData.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return 1;
        } else if (a.created_at < b.created_at) {
            return -1;
        }
        return 0;
    })
    // dynamicky komponent
    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:1337/api/articles")
            .then(response => response.json())
            .then(data => {

                const convertedData = data.data.map((item) => ({
                    ...item,
                    created_at: moment(item.created_at, "-----MM-DD-YYYY"),
                }))
                setBlogData(convertedData)
                setIsLoading(false);



            }).catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);

            });
    },
        []);

    const start = page * 10;
    const end = (page + 1) * 10;
    const sliceData = filteredBlogByTag.slice(start, end);
    const TotalBlogs = filteredBlogByTag.length;
    const TotalPages = Math.ceil(TotalBlogs / 10);


    const mySet1 = new Set();

    BlogData.forEach((blog) => mySet1.add(blog.category))


    const tags = Array.from(mySet1);

    if (isLoading) {
        return <Loader />
    }

    else {
        return (
            <Header>
                <div className="blog-cards">

                    {sliceData.map((blog) => (
                        <div className="blog-container" key={blog.id}>
                            <BlogCard
                                setter={setSelectedBlogId}
                                blog={blog}
                            />

                        </div>

                    ))}
                </div>

            </Header>

        );


    }
}




export default App