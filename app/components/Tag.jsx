'use client';

import React from 'react';
import './Tag.css';

const Tag = (props) => {
    const { tag, setter, blogCount, setShow } = props;

    return (
        <div className='container-post'>
            <div className="all-posts">
                <div>
                    <p
                        onClick={() => {
                            setter(tag);
                            setShow(true);
                        }}
                    >
                        {tag}
                    </p>
                </div>
                <div>
                    <p>{blogCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Tag;




