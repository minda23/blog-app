import { useState, useEffect } from "react";
import HeaderPage from "./headerPage";
import moment from "moment";
import Menu from "@/app/components/menu";
import Tag from "@/app/components/Tag";
import './app.css';

const Header = async () => {
    const results = await fetch("http://localhost:1337/api/articles")
    const articles = await results.json()
    const convertedData = articles.data.map((item) => ({
        ...item,
        created_at: moment(item.created_at, "-----MM-DD-YYYY").toISOString(),
    }))
    const blogData = convertedData
    console.log(blogData)
    return (
        <div>
            <HeaderPage data={blogData} />
        </div>
    );
};

export default Header;
