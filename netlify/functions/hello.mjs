export default async () => {
  const test =
    event.queryStringParameters?.test ??
    "This is a test. The query string parameter 'test' was not provided.";
  return new Response(test);
};
