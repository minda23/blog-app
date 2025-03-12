"use client";
import { useState, useEffect, useReducer, useContext } from "react";
import Blogs from "./blogs";
import './menu.css';

const app = () => {

    return (
        <div>
            <ul className="menu">
                <li>Blogs</li>
                <li>Tags</li>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div>
                <img src="/img/search.png" alt="Search Icon" />
            </div>
        </div >
    )
}

export default app