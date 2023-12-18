export async function fetchDataFromSupabase(
  regionTitleCase,
  regionNames,
  newDate,
  currentYear
) {
  // Use the passed variables as needed
  console.log("Region Title Case in supabase.mjs:", regionTitleCase);
  console.log("Region Names in supabase.mjs:", regionNames);
  console.log("New Date in supabase.mjs:", newDate);
  console.log("Current Year in supabase.mj:", currentYear);

  try {
    // Initialize Supabase client
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
      db: { schema: "airtable" },
    });

    // Fetch data from Supabase
    const { data, error } = await supabaseClient
      .from("incidents")
      .select(
        `
                    publish,
                    domain,
                    alert_id, 
                    position, 
                    date, 
                    description, 
                    header, 
                    details_url_absolute, 
                    regions!inner(name), 
                    alert_types!inner(name, color)
                    `
      )
      .in(
        "regions.name",
        regionTitleCase === "World" ? regionNames : [regionTitleCase]
      )
      .eq("publish", true)
      .eq("domain", "Maritime")
      .gte(
        "date",
        newDate !== null
          ? newDate
          : new Date(`${currentYear}-01-01T00:00:00.000Z`).toISOString()
      )
      .lte(
        "date",
        newDate !== null
          ? new Date(
              `${selectedItemYear.value}-12-31T23:59:59.999Z`
            ).toISOString()
          : new Date(`${currentYear}-12-31T23:59:59.999Z`).toISOString()
      );

    if (error) {
      console.error("Supabase error", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
