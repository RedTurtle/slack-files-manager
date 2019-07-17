import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import FilesList from './FilesList';

const Home = ({ location }) => {
  const [token, setToken] = useState('');

  if (
    location.state &&
    location.state.token &&
    location.state.token !== token
  ) {
    setToken(location.state.token);
  }
  if (location.state && location.state.authError) {
    return <div>{location.state.authError}</div>;
  }
  return (
    <div>
      {token === '' && (
        <Paper>
          <a
            href={`https://slack.com/oauth/authorize?scope=identity.basic&client_id=${
              process.env.REACT_APP_SLACK_CLIENT_ID
            }&redirect_uri=${encodeURIComponent(
              `${window.location.origin}/auth`
            )}`}
          >
            <img
              src="https://api.slack.com/img/sign_in_with_slack.png"
              alt="Sign in with Slack"
            />
          </a>
        </Paper>
      )}
      {token !== '' && <FilesList token={token} />}
    </div>
  );
};

export default Home;
