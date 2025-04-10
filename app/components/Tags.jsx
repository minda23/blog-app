import React from 'react';
import './Tags.css';

const Tags = (props) => {

    const { tag, setter, blogCount } = props;

    return (
        <div className="all-posts">
            <p onClick={() => { setter(tag) }}>{tag}</p>
            <p>{blogCount}</p>
        </div>
    );
};

export default Tags