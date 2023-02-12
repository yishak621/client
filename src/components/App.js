import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//routes
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/Streamdelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';
const App = () => {
  //in route it compares the url path with path prop in Route so for the "/" we use exact keyoard to prevent extra routing the component since we use 'contains ' method
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;

//if we place a Header component outside a BrowserRouter-we can use 'Link' so we should make the Header as a child of Browser router
