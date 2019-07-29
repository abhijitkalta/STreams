import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions/index';
import { Link } from 'react-router-dom';

class StreamList extends Component {

  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
    this.renderAdmin = this.renderAdmin.bind(this);
    this.renderCreate = this.renderCreate.bind(this);
  }

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderAdmin(stream){
    if(stream.currentUserId === this.props.currentUserId){
      return (
          <div className="right floated content">
            <Link to={`streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
            <Link to={`streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
          </div>
        )
    }
  }

  renderCreate(){
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      )
    }
  }

  renderList(){
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        <h2>Streams </h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.currentUserId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  fetchStreams
})(StreamList);
