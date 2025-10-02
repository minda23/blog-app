"use client";
import { useState, createContext } from "react";
import Loader from "./Loader";
import Menu from "@/app/components/menu";
import Tag from "@/app/components/Tag"; 
import './app.css';

export const HeaderContext = createContext("React");

const HeaderPage = (props) => {

    const { children, data } = props;
    const [selectedTag, setSelectedBlogByTag] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    let filteredBlogByTag = data;

    
           
    const categoryCounts = {
        "React": 0,
        "Vanilla Js": 0,
    };

    const changecategory = Object.entries(categoryCounts).map(([categoryName]) => {
        const blogsInCategory = data.filter((item) => item.Category2 === categoryCounts);
        const count = blogsInCategory.length;
        return [count, categoryName];
    });

    filteredBlogByTag.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));


    if (selectedTag !== "") {
        filteredBlogByTag = data.filter((element) => element.Category2 === selectedTag);
    }
    
    
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
    <HeaderContext value={selectedTag}>
       <div className="container">
        <Menu />
        <div className="blog-section">

                <div className="blogs-container">
                    <div className="all-tags-container">
                        {changecategory.map(([count, tag]) => (
                          
                                <Tag key={tag}
                                 
                                    onSelect={() => {
                                        setSelectedBlogByTag(tag);
                                        }}
                                    onDeselect={() => {
                                       setSelectedBlogByTag("");
                                    }}
                                    selectedTag={selectedTag}
                                    tagName={tag}
                                    blogCount={count}
                                     
                                   />
                           ))}                                
                    
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
        </div>
    </div>
    </HeaderContext>
    )
}
export default HeaderPage