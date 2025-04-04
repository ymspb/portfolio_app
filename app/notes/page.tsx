import { createClient, SupabaseClient } from "@supabase/supabase-js";

export default async function Notes() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

  const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
