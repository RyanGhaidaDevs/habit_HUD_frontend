import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions'


class PostsShow extends Component {
  componentDidMount(){
    //find individual post based on id 
    //Provided by react-router; params are all wild-card values that exist in given URL 
    // i.e. /posts/:id <-- 
    const { id } = this.props.match.params
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deletePost(id, ()=> {
      this.props.history.push('/')
    });
  }

  render() {
    const { post } = this.props;

    //When component first renders and post hasn't been fetched yet. 
    if (!post) {
      return <div> Loading... </div>
    }

    return(
      <div> 
        <button 
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete Post
        </button>
        <h3 align="center" >Journal log from: {post.created_at.split("T")[0]} </h3> <br/>
        <p> {post.body} </p> <br/>
        <div className="text-xs-center"> 
          <Link className="btn btn-primary" to="/" > 
          Back to index 
          </Link>
        </div> <br/>
        <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Habit HUB 
          </Link>
        </div>
        
      </div>
    );
  }
}

// second arg is called ownProps by convention, props obj that is headed to this component
// this.props === ownProps
function mapStateToProps({ posts }, ownProps) {
  //return just the post were looking for
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)