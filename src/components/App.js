import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { BrowserRouter, Route} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamUpdate from './streams/StreamUpdate';
import StreamDelete from './streams/StreamDelete';

import Header from './Header';



function App() {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/edit" exact component={StreamUpdate} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
