import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then (response => {
                let responseData = response.data;
                let slicedResponse = responseData.slice(0, 4);
                this.setState({posts: slicedResponse});
                
            })
    }

    selectPostHandler = (id) =>{
        this.setState({selectedPost : id})
    }
   
    
    render () {
        const posts = this.state.posts.map( post=> {
            return <Post key={post.id}
                    title={post.title} 
                    id={post.id} 
                    clicked={() => this.selectPostHandler(post.id)}/>
        
        })
        
        
       
        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost selectedPostId={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;