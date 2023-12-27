export default async (event) => {
  try {
    const test =
      event.queryStringParameters && event.queryStringParameters.test
        ? event.queryStringParameters.test
        : "This is a test. The query string parameter 'test' was not provided.";
    return new Response(test);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
