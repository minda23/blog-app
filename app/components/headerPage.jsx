"use client"
import { useState } from "react";
import Loader from "./Loader";
import Menu from "@/app/components/menu";
import Tag from "@/app/components/Tag";
import BlogPost from "@/app/components/blogPost";
import './app.css';

const HeaderPage = (props) => {
    const { children, data } = props;
    const [selectedBlogId, setSelectedBlogId] = useState("");
    const [selectedTag, setSelectedBlogByTag] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    let emptyBlog = {};
    if (selectedBlogId !== "") {
        const blogfull = data.find((element) => element.id === selectedBlogId);
        emptyBlog = blogfull;
    }

    let filteredBlogByTag = data;
    if (selectedTag !== "") {
        filteredBlogByTag = data.filter((element) => element.Category2 === selectedTag);
    }

    const categoryCounts = {
        "React": 0,
        "Vanilla js": 0,
    };

    const changecategory = Object.entries(categoryCounts).map(([categoryName]) => {
        const blogsInCategory = data.filter((item) => item.Category2 === categoryName);
        const count = blogsInCategory.length;
        return [count, categoryName];
    });

    // bezpečne sortujeme podľa ISO string dátumu
    filteredBlogByTag.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const start = page * 10;
    const end = (page + 1) * 10;
    const sliceData = filteredBlogByTag.slice(start, end);

    const mySet1 = new Set();
    data.forEach((blog) => mySet1.add(blog.Category2));
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

export default HeaderPage;
