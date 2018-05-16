import React from 'react';
import ReactDOM from 'react-dom';

class PostFooter extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let thoughts = document.getElementById("thoughts").value
    let feelings = document.getElementById("feelings").value
    let body_sensations = document.getElementById("body_sensations").value
    let thought_ratings = document.getElementById("thought_ratings").value
    let feeling_ratings = document.getElementById("feeling_ratings").value
    let body_sensation_ratings = document.getElementById("body_sensation_ratings").value
    let hour_sleeps = document.getElementById("hour_sleeps").value
    let hour_works = document.getElementById("hour_works").value
    let hour_excercises = document.getElementById("hour_excercises").value
    let hour_opens = document.getElementById("hour_opens").value
    let hour_mediates = document.getElementById("hour_mediates").value
    //note acceptences not working due to boolean conversion needed
    let acceptances = document.getElementById("acceptances").value
    let text_bodys = document.getElementById("text_bodys").value


    console.log(thoughts);
    let entry = {thought:thoughts, feeling:feelings, body_sensation:body_sensations, thought_rating:thought_ratings, feeling_rating:feeling_ratings, body_sensation_rating:body_sensation_ratings, hour_sleep:hour_sleeps, hour_work:hour_works, hour_excercise:hour_excercises, hour_open:hour_opens, hour_mediate:hour_mediates, acceptance:acceptances, text_body:text_bodys}
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

  render () {
    return (
      <div>
        <h1>Create a Post</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="thoughts">Thoughts </label>
          <input id="thoughts" name="thoughts" type="text" />
          <br></br>
          <label htmlFor="feelings">Feelings </label>
          <input id="feelings" name="feelings" type="text" />
          <br></br>
          <label htmlFor="body_sensations">Body Sensation </label>
          <input id="body_sensations" name="body_sensations" type="text" />
          <br></br>
          <label htmlFor="thought_ratings">Thought Rating 1-3 3 is best </label>
          <input id="thought_ratings" name="thought_ratings" type="text" />
          <br></br>
          <label htmlFor="feeling_ratings">Feeling Rating 1-3 3 is best </label>
          <input id="feeling_ratings" name="feeling_ratings" type="text" />
          <br></br>
          <label htmlFor="body_sensation_ratings">Body Sensation Rating 1-3 3 is best </label>
          <input id="body_sensation_ratings" name="body_sensation_ratings" type="text" />
          <br></br>
          <label htmlFor="hour_sleeps">Hours of Sleep </label>
          <input id="hour_sleeps" name="hour_sleeps" type="text" />
          <br></br>
          <label htmlFor="hour_works">Hours of Work </label>
          <input id="hour_works" name="hour_works" type="text" />
          <br></br>
          <label htmlFor="hour_excercises">Hours of Exercise </label>
          <input id="hour_excercises" name="hour_excercises" type="text" />
          <br></br>
          <label htmlFor="hour_opens">Hours of Free Time </label>
          <input id="hour_opens" name="hour_opens" type="text" />
          <br></br>
          <label htmlFor="hour_mediates">Hours of Meditation </label>
          <input id="hour_mediates" name="hour_mediates" type="text" />
          <br></br>
          <label htmlFor="acceptances">Do you accept your thoughts, feelings and sensations? </label>
          <input id="acceptances" name="acceptances" type="text" />
          <br></br>
          <label htmlFor="text_bodys">Journal Notes about your day </label>
          <input id="text_bodys" name="text_bodys" type="text" />
          <br></br>
          <button>Create Entry</button>
        </form>
      </div>
    );
  }
}

export default PostFooter;
