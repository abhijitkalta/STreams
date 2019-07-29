import React, { Component } from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { createStream } from '../../Actions/index';


class StreamCreate extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formValues){
    this.props.createStream(formValues);
  }


  render(){
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
};

export default connect(null, { createStream })(StreamCreate);
