import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {
    state = {
        posts : []
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
            .then(response =>{
                this.setState({posts: response.data});
                console.log (response.data);
                // console.log(response);
            });
    }
    render () {

        const posts = this.state.posts.map(
            (post) => <Post key={post.id} id={post.id} title={post.title}/>
        );

        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;