import React, { Component} from 'react';
import { connect } from 'react-redux';
import history from '../../history';

export default function(ComposedComponent){
  class Authentication extends Component{

    componentWillMount(){
      if(!this.props.authenticated){
        {window.alert("Sign in")}
        history.push('/');
      };
    };

    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        {window.alert("Sign in")}
        history.router.push('/');
      };
    };

    render(){
      return (
        <ComposedComponent {...this.props} />
      );
    }
  };

  function mapStateToProps(state){
    return ({
      authenticated: state.auth.isSignedIn
    });
  };

  return connect(mapStateToProps)(Authentication);
};
