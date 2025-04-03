import React from 'react';
import './Tags.css';

const Tags = (props) => {

    const { tag, setter } = props;

    return (
        <div className="all-posts">
            <p onClick={() => { setter(tag) }}>{tag}</p>
        </div>
    );
};

export default Tags