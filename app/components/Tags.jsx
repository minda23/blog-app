import React from 'react';
import './Tags.css';

const Tags = () => {
    const tagList = ["React", "JavaScript", "CSS", "HTML", "Node.js",
        "Web Development", "python", "Jquery", "Next.js", "Java", "Udemy", "Joomla", "wordpress"];

    return (
        <div className="all-posts">
            {tagList.map((tag, index) => (
                <div key={index} className="tag">
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tags