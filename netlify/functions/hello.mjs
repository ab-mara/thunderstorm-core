export default async (event) => {
  try {
    const test = event.queryStringParameters?.test;
    let responseText = test
      ? `Received test parameter: ${test}`
      : "This is a test. The query string parameter 'test' was not provided.";
    responseText = "foo";
    return new Response(responseText);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
