import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../Actions/index';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamUpdate extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  handleSubmit(formValues){
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render(){
    if (!this.props.stream) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h3>Edit Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, 'title', 'description')}
            onSubmit={this.handleSubmit} />
        </div>
      )
    }

  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {
  fetchStream,
  editStream
})(StreamUpdate);
