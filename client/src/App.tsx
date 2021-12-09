import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import './App.css';

class App extends React.Component {
  state = {
    posts: [],
    post:null
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }
  viewPost = (post) => {
    console.log('view ${post.title}');
    this.setState({
      post: post
    });
  }
  deletePost = post => {
    axios
    .delete('http://localhost:500/api/posts/${post.id}')
    .then(response => {
      const newPosts = this.state.posts.filter(p => p.id !== post.id);
      this.setState({
        posts:[...newPosts]
      });
    })
    .catch(error =>{
      console.error('Error deleting post: ${error}');
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            BlogBox
          </header>
          <main className="App-content">
            <Routes>
              <Route exact path="/">
                <PostList
                posts={posts}
                clickPost={this.viewPost} 
                deletePost={this.deletePost}  />
              </Route>
              <Route path="/posts/:postId">
                <Post post={posts} />
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}


export default App;
