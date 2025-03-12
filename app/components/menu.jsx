"use client";
import { useState, useEffect, useReducer, useContext } from "react";
import Blogs from "./blogs";
import './menu.css';

const app = () => {
    const [BlogData, setBlogData] = useState([]);



    return (
        <div>
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>

    )
}

export default app