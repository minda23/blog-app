"use client";
import { useState, useEffect } from "react";
import './blogPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const blogPost = (props) => {
    const { blog } = props;


    return (
        <>
            <div className="post">
                <p>{blog.description}</p>
            </div>
            <div className="article-post">
                {!!blog.Body && blog.Body.map((BodyPart, index) => (
                    <div key={index}>
                        {BodyPart.children.map((child, key) => (
                            <div className="body-text" key={key}>
                                {child.code ? (
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={a11yDark}
                                        customStyle={{ background: '#324159', marginTop: '0', marginBottom: '0', padding: '0.1rem' }}
                                    >
                                        {child.text}
                                    </SyntaxHighlighter>
                                ) : (
                                    <p>{child.text}</p>
                                )}

                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}


export default blogPost;
