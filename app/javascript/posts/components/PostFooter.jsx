import React from 'react';
import ReactDOM from 'react-dom';

class PostFooter extends React.Component {
  render () {
    return (
      <div>
        <h1>Test create new</h1>
        <form>
          <label>
            Thoughts
            <input type='text' name='thoughts' />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default PostFooter;
