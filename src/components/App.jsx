import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import Auth from './Auth';
import Header from './Header';
import Home from './Home';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Header />
        <article>
          {token === '' && (
            <Paper>
              <a
                href={`https://slack.com/oauth/authorize?scope=identity.basic&client_id=${
                  process.env.REACT_APP_SLACK_CLIENT_ID
                }&redirect_uri=${encodeURIComponent(
                  'http://localhost:3000/auth'
                )}`}
              >
                <img
                  src="https://api.slack.com/img/sign_in_with_slack.png"
                  alt="Sign in with Slack"
                />
              </a>
            </Paper>
          )}
          <Route
            exact
            path="/"
            component={({ location }) => (
              <Home location={location} setToken={setToken} token={token} />
            )}
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
