export default async (event) => {
  try {
    const test = event.queryStringParameters?.test;
    const responseText = test
      ? `Received test parameter: ${test}`
      : "This is a test. The query string parameter 'test' was not provided.";
    return new Response(responseText);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
