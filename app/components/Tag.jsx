"use client";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


import React from "react";
import "./Tag.css";

const Tag = (props) => {
  const { tagName, blogCount, onSelect, onDeselect,selectedTag } = props;

  const show = selectedTag === tagName;

  return (
    <div className="tags-wrapper" key={tagName}>
      <div className="container-post">
        <div className="all-posts">
          <div>
            <p onClick={onSelect}>{tagName}</p>
          </div>
          <div>
            <p>{blogCount}</p>
          </div>
          {show && (
              <IconButton
                onClick={onDeselect} // zavrie ikonku
                className="btn tag-close-icon"
                aria-label="close"
                sx={{
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                  zIndex: 2,
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
        </div>
      </div>
    </div>
  );
};

export default Tag;
