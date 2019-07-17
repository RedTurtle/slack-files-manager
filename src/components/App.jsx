import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Auth from './Auth';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Header />
        <article>
          <Route
            exact
            path="/"
            component={({ location }) => <Home location={location} />}
          />
          <Route
            path="/auth"
            component={({ location }) => <Auth location={location} />}
          />
        </article>
      </div>
    </Router>
  );
}

export default App;
