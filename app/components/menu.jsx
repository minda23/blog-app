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
                <img className="search-btn" src="./img/icons8-search.svg" alt="Search Icon" width="37" height="37" />
            </ul>
            <div>
            </div>
        </div >
    )
}

export default app