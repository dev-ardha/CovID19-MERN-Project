import React, { Component } from 'react';
import axios from 'axios';

class FormComponent extends Component {
  constructor () {
    super()

    this.onChangePost = this.onChangePost.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = 
    {
      username: '',
      title: '',
      post: '',
      users: [],
      password: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users/')
         .then(response => {
             this.setState({
               users: response.data.map(user=> user.username),
             })
         })
  }
  
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  onChangePost(e) {
    this.setState({
      post: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const article = {
      username: this.state.username,
      title: this.state.title,
      post: this.state.post,
    }

    axios.post('api/articles/add', article)
         .then(res => console.log(res.data));

    console.log(article);

    window.location = '/bantuan';
  }

  render () {
      return (
          <div className="content article-post">
            <div className="container">
                <h2 className="subheadline text-center">Create New Article</h2>
                <form onSubmit={this.onSubmit} >
                    <input type="text"
                          required
                          placeholder="Username"
                          className="user-select title-input"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                    />
                    <input type="text"
                        required
                        name="title"
                        className="title-input"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                    />
                    <textarea type="text"
                            name="article"
                            placeholder="Write article here"
                            className="post-area"   
                            value={this.state.article} 
                            onChange={this.onChangePost} 
                    />
                    <input type="submit" value="Uplaod" className="btn btn-primary"/>
                </form>
            </div>
          </div>
      );
  }
}

export default FormComponent;