import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import PostFooter from './PostFooter';

class PostsDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      post: {}
    };
  }

  fetchPost (id) {
    axios.get( `api/posts/${id}` )
        .then(response => {
          this.setState({ post: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }

  setPostIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    console.log(queryString.parse(location.search))
    console.log(this.qsParams)
    if (this.qsParams.post) {
      // assign post ID from the URL's query string
      this.postId = Number(this.qsParams.post);
    } else {
      // this.postId = 1;
      this.postId = this.props.startingPostId
      // update URL in browser to reflect current post in query string
      this.props.history.push(`/?post=${this.postId}`);
    }
  }

  componentDidMount () {
    this.setPostIdFromQueryString(this.props.location.search);
    this.fetchPost(this.postId);
  }

  componentWillReceiveProps (nextProps) {
    this.setPostIdFromQueryString(nextProps.location.search);
    this.fetchPost(this.postId);
  }

  render () {
    const post = this.state.post
    const nextPostId = post.next_id
    const previousPostId = post.previous_id
    return (
      <div id="testPostDisplay">
        {previousPostId &&
          <Link to={`/?post=${previousPostId}`}>Previous</Link>
        }
        <br></br>
        {nextPostId &&
          <Link to={`/?post=${nextPostId}`}>Next</Link>
        }
        <p>Thoughts - {this.state.post.thought}</p>
        <p>Feelings - {this.state.post.feeling}</p>
        <p>Body Sensations - {this.state.post.body_sensation}</p>
        <p>{this.state.post.thought_rating}</p>
        <p>{this.state.post.feeling_rating}</p>
        <p>{this.state.post.body_sensation_rating}</p>
        <p>{this.state.post.hour_sleep}</p>
        <p>{this.state.post.hour_work}</p>
        <p>{this.state.post.hour_excercise}</p>
        <p>{this.state.post.hour_open}</p>
        <p>{this.state.post.hour_mediate}</p>
        <p>{this.state.post.acceptance}</p>
        <p>{this.state.post.text_body}</p>
        <p>{this.state.post.created_at}</p>
        <PostFooter />
      </div>
    );
  }

}

export default PostsDisplay;
