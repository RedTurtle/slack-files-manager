import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.resolve('./.env.local') });
}

const client_id = process.env.REACT_APP_SLACK_CLIENT_ID;
const client_secret = process.env.SLACK_CLIENT_SECRET;

exports.handler = async event => {
  // We can retrieve type of http method in event parameter
  const { httpMethod, queryStringParameters } = event;
  const { code = '' } = queryStringParameters;
  const web = new WebClient();

  if (httpMethod === 'GET' && code !== '') {
    const result = await web.oauth.access({
      client_id,
      client_secret,
      code,
      redirect_uri: 'http://localhost:3000/auth',
    });
    const data = JSON.stringify(result);

    return { statusCode: 200, body: data };
  }

  return { statusCode: 404, body: 'Not Found.' };
};
