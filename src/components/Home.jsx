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
            href={`https://slack.com/oauth/authorize?scope=files:read,files:write:user&client_id=${
              process.env.REACT_APP_SLACK_CLIENT_ID
            }&redirect_uri=${encodeURIComponent(
              `${window.location.origin}/auth`
            )}`}
          >
            <img
              alt="Add to Slack"
              height="40"
              width="139"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </a>
        </Paper>
      )}
      {token !== '' && <FilesList token={token} />}
    </div>
  );
};

export default Home;
