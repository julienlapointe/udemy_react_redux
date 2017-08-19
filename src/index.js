import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// BrowserRouter interacts with the History module / library to allow the user to navigate using the browser's "forward" / "back" buttons
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import AllPosts from "./components/AllPosts.js";

// class Hello extends Component {
//   render() {
//     return(
//       <div>
//         Hello
//       </div>
//     );
//   }
// };

// class Goodbye extends Component {
//   render() {
//     return(
//       <div>
//         Goodbye
//       </div>
//     );
//   }
// };

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={AllPosts} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));