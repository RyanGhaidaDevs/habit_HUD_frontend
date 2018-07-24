import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  renderPosts() {
    //since we are mapping over an obj; first arg is Obj and second is map fn().  
   return _.map(this.props.posts, post => {
     return (
       <li className="list-group-item" key={post.id}>
       <Link to={`/posts/${post.id}`}> 
       {post.created_at.split("T")[0]}
       </Link>
       </li>
     );
   });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right"> 
          <Link className="btn btn-primary" to="/posts/new">
            Add Entry 
          </Link>
        </div>
        <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Habit HUB 
          </Link>
        </div>
        <h3> Journal Entries </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul> 
      </div>
    );
  }
}


function mapStateToProps(state){
  return { posts: state.posts };
}

// Shortcut to mapDispatchToProps; Component now has acces to fetchPosts ActionCreator. 
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);