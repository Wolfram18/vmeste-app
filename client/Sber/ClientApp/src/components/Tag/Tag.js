import React, { Component } from 'react';
import './Tag.css';

function Tag(props) {

    return (
        <div className="tag-item">
            {props.tag}
        </div>
    );
}


export default (Tag);