import React from 'react';

import './Post.css';

const post = (props) => (
    <article onClick={props.clicked} className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author id: + {props.id}</div>
        </div>
    </article>
);

export default post;