'use client';

import React from 'react';
import './Tag.css';

const Tag = (props) => {
    const { tag, setter, blogCount } = props;

    return (
        <div className='container-post'>
            <div className="all-posts">
                <div>
                    <p onClick={() => { setter(tag) }}>{tag}</p>
                </div>
                <div>
                    <p>{blogCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Tag