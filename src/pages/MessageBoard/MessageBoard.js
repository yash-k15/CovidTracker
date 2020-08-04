import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { Card, CardContent, Typography, Grid, Input} from '@material-ui/core';
import _, { wrap } from 'lodash';
import { getPosts, savePost, deletePost } from './Actions/PostActions';
import './MessageBoard.css';

const required = value => value ? undefined : 'Required'

class MessageBoard extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter your ${field.label}...`} {...field.input} style={{width: "50%", marginLeft:"25%"}}/>
    );
  }

  renderFieldt(field) {
    return (
      <textarea type="text" placeholder={`Enter your ${field.label}...`} {...field.input} />
    );
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset()))
  }


  renderPosts() {
    return _.map(this.props.posts, (post, key) =>{
      return (
        <Card className="card"><Grid><CardContent>
          <div key={key}>
            <div className="card-block">
              <div style={{wordWrap: "break-word"}}><Typography><h3 className="card-title">{post.title}</h3></Typography>
              <p>{post.body}</p></div>
              <button onClick={() => {
                this.props.deletePost(key);
              }}>Delete</button><br></br>
            </div>
          </div>
          </CardContent></Grid></Card>
      );
    }).reverse();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <p style={{marginBottom: "0%"}}>This page is dedicated to everyone who wants to share their stories during these tough times</p>
        <div style={{width: "50%"}}>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <br/>
            <br/>
            <div>
            <Field
              name="title"
              component={this.renderField}
              label="Name"
              className="footer_title"
              validate={[ required ]}
            /></div> 
            <br/>
            <Field 
              name="body"
              type="textarea"
              component={this.renderFieldt}
              label="Message"
              className="footer_body"
              validate={[ required ]}
            />
            <br/>
            <div className="container" >
              <button type="submit" className="btn footer-button">Post</button><br/>
            </div>
          </form>
        </div>
          {this.renderPosts()}
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(MessageBoard);

form = connect(state => ({
  posts: state.posts
}), { getPosts, savePost, deletePost }) (form);

export default form;