import React from 'react';
import './Tags.css';

const Tags = (props) => {

    const { blog, setter } = props;

    return (
        <div className="all-posts">
            <p onClick={() => { setter(blog.category) }}>{blog.category}</p>
        </div>
    );
};

export default Tags