import React from 'react';

import FilesList from './FilesList';

const Home = ({ location, setToken, token }) => {
  if (location.state && location.state.token) {
    setToken(location.state.token);
  }
  if (location.state && location.state.authError) {
    return <div>{location.state.authError}</div>;
  }
  return <div>{token !== '' && <FilesList token={token} />}</div>;
};

export default Home;
