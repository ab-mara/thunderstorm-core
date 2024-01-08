exports.handler = async (event) => {
  const querystring = event.queryStringParameters;
  const test = querystring.test;
  let responseText = test
    ? `Received test parameter: ${test}`
    : "This is a test. The query string parameter 'test' was not provided.";

  return {
    statusCode: 200,
    body: responseText,
  };
};
