import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { WebClient } from '@slack/web-api';

import Header from './Header';
import FilesList from './FilesList';

const clientId = process.env.REACT_APP_SLACK_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SLACK_CLIENT_SECRET;
const signingSecret = process.env.REACT_APP_SLACK_SIGNING_SECRET;
const basicToken = process.env.REACT_APP_BASIC_TOKEN;
const web = new WebClient(basicToken);

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <article>
        <a
          href={`https://slack.com/oauth/authorize?scope=identity.basic&client_id=${clientId}`}
        >
          <img
            src="https://api.slack.com/img/sign_in_with_slack.png"
            alt="Sign in with Slack"
          />
        </a>
        <FilesList web={web} />
      </article>
    </div>
  );
}

export default App;
