import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Actions/index'

class GoogleAuth extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.handleAuthChange = this.handleAuthChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '110123705922-f9iieg4qug2n2390combmqbtegtt4aus.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.handleAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.handleAuthChange);
      });
    })
  }

  handleAuthChange(isSignedIn){
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getBasicProfile().getId());
    } else {
      this.props.signOut();
    }
  }

  handleSignIn() {
    this.auth.signIn()
  }

  handleSignOut() {
    console.log(this.props.currentUserId);
    this.auth.signOut()
  }

  renderAuthButton(){
    if (this.props.isSignedIn === null) {
      return null;
    } else if(this.props.isSignedIn === true){
      return (
        <button className="ui red google button" onClick={this.handleSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui green google button" onClick={this.handleSignIn}>
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  render(){
    return (
      <div className="Google-Auth">
      {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.currentUserId
  }
}

export default connect(mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth);
