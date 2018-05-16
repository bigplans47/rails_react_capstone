import React from 'react';
import ReactDOM from 'react-dom';

class PostFooter extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const data = new FormData(event.target);
    // data.append()
    console.log(data);
    var thoughts = document.getElementById("thoughts").value
    console.log(thoughts);
    let entry = {thought:thoughts}
    console.log(entry);
    fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify(entry),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      })
    });
  }


  // fetchPost2 () {
  //   console.log('here')
  //   axios.get( `api/posts/${id}` )
  //   console.log('here2')
  //       .then(response => {
  //         this.setState({ post: response.data });
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  // }
  render () {
    return (
      <div>
        <h1>Test create new</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="thoughts">Enter thoughts</label>
          <input id="thoughts" name="thoughts" type="text" />
          <br></br>
          <button>Send data</button>
        </form>
      </div>
    );
  }

}

export default PostFooter;
