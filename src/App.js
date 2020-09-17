import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { getPosts } from './actions/index';
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
    console.log(this.props.getPosts())
  }
  render() {
const {posts} = this.props;
// const contents = posts.map((post) => {post})
  
    return (

    <Fragment>
      {
        posts.map((post) =>
        <main className = "main">
           <div className = "main_content">
           <h3>ID:{post.id}</h3>
           <h1>title:{post.title}</h1>
           <p>body:{post.body}</p>
           </div>
         </main>
        )
      }
    </Fragment>
       
    );
}
}

// first method to bind

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
