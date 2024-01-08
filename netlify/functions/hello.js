exports.handler = async (event) => {
  const SUPABASE_API_KEY = Netlify.env.get("SUPABASE_API_KEY");
  const SUPABASE_URL = Netlify.env.get("SUPABASE_URL");
  const querystring = event.queryStringParameters;
  const test = querystring.test;
  let responseText = test
    ? `Received test parameter: ${test} from Netlify environment variables: SUPABASE_API_KEY: ${SUPABASE_API_KEY} and SUPABASE_URL: ${SUPABASE_URL}`
    : "This is a test. The query string parameter 'test' was not provided.";

  return {
    statusCode: 200,
    body: responseText,
  };
};
