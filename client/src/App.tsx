import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  render() {
    const { posts } = this.state;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            BlogBox
          </header>
          <main className="App-content">
            <Switch>
              <Route path="/">
                <PostList posts={posts} clickPost={this.viewPost} />
              </Route>
              <Route path="/posts/:postId">
                <Post post={posts} />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}


export default App;
