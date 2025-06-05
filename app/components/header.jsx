"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import moment from "moment";
import Menu from "@/app/components/menu";
import Tag from "@/app/components/Tag";
import './app.css';

const Header = (props) => {
    const { children } = props;
    const [BlogData, setBlogData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState("");
    const [selectedTag, setSelectedBlogByTag] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:1337/api/articles")
            .then(response => response.json())
            .then(data => {
                const convertedData = data.data.map((item) => ({
                    ...item,
                    created_at: moment(item.created_at),
                }));
                setBlogData(convertedData);
                setIsLoading(false);
            }).catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {

    }, [BlogData, selectedTag]);

    let emptyBlog = {};
    if (selectedBlogId !== "") {
        const blogfull = BlogData.find((element) => element.id === selectedBlogId);
        emptyBlog = blogfull;
    }

    let filteredBlogByTag = BlogData;
    if (selectedTag !== "") {
        filteredBlogByTag = BlogData.filter((element) => element.Category2 === selectedTag);
    }



    const categoryCounts = {
        "React": 0,
        "Vanilla js": 0,
    };

    const changecategory = Object.entries(categoryCounts).map(([categoryName]) => {
        const AllBlogsInThisCategory = BlogData.filter((item) => item.Category2 === categoryName);
        const NumberOfBlogsInThisCategory = AllBlogsInThisCategory.length;
        return [NumberOfBlogsInThisCategory, categoryName];
    });

    BlogData.sort((a, b) => {
        return a.created_at - b.created_at;
    });

    const start = page * 10;
    const end = (page + 1) * 10;
    const sliceData = filteredBlogByTag.slice(start, end);
    const TotalBlogs = filteredBlogByTag.length;
    const TotalPages = Math.ceil(TotalBlogs / 10);

    const mySet1 = new Set();
    BlogData.forEach((blog) => mySet1.add(blog.Category2));
    const tags = Array.from(mySet1);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="container">
            <Menu />
            <div className="blog-section">
                {!!selectedBlogId && <BlogPost blog={emptyBlog} />}
                {!selectedBlogId && (
                    <div className="blogs-container">
                        <div className="all-tags-container">
                            {changecategory.map(([count, tag]) => (
                                <div className="tags-wrapper" key={tag}>
                                    <Tag tag={tag} blogCount={count} setter={setSelectedBlogByTag} />
                                </div>
                            ))}
                        </div>
                        <div>
                            {children}
                        </div>




                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
