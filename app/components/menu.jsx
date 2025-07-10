"use client";
import Link from 'next/link'
import './menu.css';


const app = () => {
    return (
        <div>
            <ul className="menu">
                <Link href="/" style={{ textDecoration: "none" }}>
                    <li className="home">Home </li>
                </Link>
                <a className='link-about' href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-minda/"><li>About</li></a>
            </ul>
            <div>
            </div>
        </div >
    )
}

export default app