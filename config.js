// VIJOINT Supabase configuration
// This anon key is safe for browser use. Never place a service-role key here.
const SUPABASE_URL = "https://pmskyokuxozvetcamlie.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7yzSVqYatdmeb6cN5rDzwQ_TC-R9fcW";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
