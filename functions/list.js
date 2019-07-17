import { WebClient } from '@slack/web-api';

exports.handler = async event => {
  // We can retrieve type of http method in event parameter
  const { httpMethod, queryStringParameters } = event;
  const { token = '' } = queryStringParameters;

  if (httpMethod === 'GET' && token !== '') {
    const web = new WebClient(token);
    const result = await web.files.list();
    const data = JSON.stringify(result);

    return { statusCode: 200, body: data };
  }

  return { statusCode: 404 };
};
