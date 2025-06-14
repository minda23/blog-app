"use client";
import { useState, useEffect, useReducer, useContext } from "react";
import Blogs from "./blogCard";
import Link from 'next/link'
import './menu.css';


const app = (props) => {
    const { setter, blog } = props;

    return (
        <div>
            <ul className="menu">
                <li>Blogs</li>
                <li>Tags</li>

                <Link href="/" style={{ textDecoration: "none" }}>
                    <li className="home">Home </li>
                </Link>

                <li>About</li>
                <img className="search-btn" src="/img/icons8-search.svg" alt="Search Icon" width="37" height="37" />
            </ul>
            <div>
            </div>
        </div >
    )
}

export default app