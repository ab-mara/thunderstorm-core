export default async (req, context) => {
  const apiKey = Netlify.env.get("SUPABASE_API_KEY");
  return new Response("Hello, world! API Key is: " + apiKey);
};
