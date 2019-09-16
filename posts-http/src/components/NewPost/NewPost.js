import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: 'Max',
    };
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
    };
    axios.post('/posts', data).then(response => {
      // eslint-disable-next-line no-console
      console.log(response);
    });
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <span>Title</span>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <span>Content</span>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <span>Author</span>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler} type="button">
          Add Post
        </button>
      </div>
    );
  }
}

export default NewPost;
