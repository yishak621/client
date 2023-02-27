import React from 'react';
import { Router, Route } from 'react-router-dom';
//routes
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/Streamdelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';
import history from '../history';
const App = () => {
  //in route it compares the url path with path prop in Route so for the "/" we use exact keyoard to prevent extra routing the component since we use 'contains ' method
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};
export default App;

//if we place a Header component outside a BrowserRouter-we can use 'Link' so we should make the Header as a child of Browser router
//WILD CARD NAVIGATION
// <Route path="/streams/edit/:id" exact component={StreamEdit} />
//to enable routing to a specific stream using id ....we use id[we can say the name as we want] and we can grab that form our props
//we are not limited to only navigate through one params ...but we can also use <Route path="/streams/edit/:id:another" exact component={StreamEdit} />
