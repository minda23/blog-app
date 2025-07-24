"use client"
import { useState, useContext } from "react";
import Header from "@/app/components/header"
import BlogCard from "./blogCard";
import './app.css';
import Loader from "./Loader";
import {HeaderContext} from "./headerPage"

const homePage = (props) => {
    const { blogData,setter } = props;
    const [selectedBlogId, setSelectedBlogId] = useState("")
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
      const selectedPostByTag = useContext(HeaderContext);

    function handleNext() {
        setPage(page + 1)
    }

    function handlePrevious() {
        setPage(page - 1)
    }

    let emptyBlog = {};

    if (selectedBlogId !== "") {
        const blogfull = blogData.find((element) => element.id === selectedBlogId)
        emptyBlog = blogfull;
    }

    let filteredBlogByTag = blogData;
    console.log(selectedPostByTag, selectedPostByTag !== "")
    if (selectedPostByTag !== "") {
        console.log("filter")
        let emptyTag1 = blogData.filter((element) => element.Category2 === selectedPostByTag)
        filteredBlogByTag = emptyTag1;

    }

    const categoryCounts = {
        "React": 0,
        "Vanilla js": 0,
    };

    const changecategory = Object.entries(categoryCounts).map((categoryArray) => {
        const AllBlogsInThisCategory = blogData.filter((item) => item.category === categoryArray[0])
        const NumberOfBlogsInThisCategory = AllBlogsInThisCategory.length

        return [NumberOfBlogsInThisCategory, categoryArray[0]]

    }
    )
    const start = page * 10;
    const end = (page + 1) * 10;
    const sliceData = filteredBlogByTag.slice(start, end);
    const TotalBlogs = filteredBlogByTag.length;
    const TotalPages = Math.ceil(TotalBlogs / 10);
    const mySet1 = new Set();
    blogData.forEach((blog) => mySet1.add(blog.category))
    const tags = Array.from(mySet1);


    console.log(selectedPostByTag)
    console.log(sliceData)

    if (isLoading) {
        return <Loader />
    }

    else {
        return (

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
         );
    }
}

export default homePage