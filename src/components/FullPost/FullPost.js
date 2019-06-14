import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate(){
        if ((!this.state.post) || (this.state.post && this.props.selectedPostId !== this.state.post.id) ){
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.selectedPostId)
                .then(response => {
                    this.setState({post : response.data});
                })
        }
    }

    render () {
        
        let post = <p>Please select a Post!</p>;
       
        
        if(this.state.post){
            post = (
                <div className="FullPost">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.content}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );

        }
        
        return post;
        
    }
}

export default FullPost;