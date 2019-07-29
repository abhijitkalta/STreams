import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Router, Route, Switch} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamUpdate from './streams/StreamUpdate';
import StreamDelete from './streams/StreamDelete';
import history from '../history';
import requireAuth from './higherOrderComponents/requireAuthentication';

import Header from './Header';



function App() {
  return (
    <div className="App ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={requireAuth(StreamCreate)} />
            <Route path="/streams/:id" exact component={requireAuth(StreamShow)} />
            <Route path="/streams/edit/:id" exact component={requireAuth(StreamUpdate)} />
            <Route path="/streams/delete/:id" exact component={requireAuth(StreamDelete)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
