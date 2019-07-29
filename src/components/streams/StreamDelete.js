import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../Actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends Component {

  constructor(props){
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onDismiss(){
    history.push('/');
  }

  renderActions(){
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={() => {this.props.deleteStream(id)}}>Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  render(){
    if (!this.props.stream) {
      return <div>Loading....</div>
    }

    return (
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete ${this.props.stream.title}?`}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
