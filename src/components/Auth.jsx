import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import queryString from 'query-string';

const Auth = ({ location }) => {
  const { code = '', error = '' } = queryString.parse(location.search);
  const [token, setToken] = useState('');
  const [authError, setAuthError] = useState(error);
  const shouldRedirect = code === '' || token !== '' || authError !== '';

  useEffect(() => {
    if (!shouldRedirect) {
      fetch(`/.netlify/functions/auth?code=${code}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.ok) {
            setToken(data.access_token);
          } else {
            setAuthError(data.error);
          }
        })
        .catch(err => {
          console.error(err);
          setAuthError(err.message);
        });
    }
  });

  return shouldRedirect ? (
    <Redirect
      to={{
        pathname: '/',
        state: {
          token,
          error: authError,
        },
      }}
    />
  ) : (
    ''
  );
};

export default Auth;
