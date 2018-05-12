import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

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
    if (this.qsParams.post) {
      // assign post ID from the URL's query string
      this.postId = Number(this.qsParams.post);
    } else {
      this.postId = 1;
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
    const nextPostId = Number(this.state.post.id) + 1;

    return (
      <div>
        <Link to={`/?post=${nextPostId}`}>Next</Link>
        <p>{this.state.post.thought}</p>
        <p>{this.state.post.feeling}</p>
        <p>{this.state.post.body_sensation}</p>
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
      </div>
    );
  }

}

export default PostsDisplay;
