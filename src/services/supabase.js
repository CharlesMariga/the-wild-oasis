import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://czcyhgsuijqswovadcqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6Y3loZ3N1aWpxc3dvdmFkY3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxNzk4NjYsImV4cCI6MjAxOTc1NTg2Nn0.X1co-Dt6XP65iO7qW3as38PYs8_UG2JK2Uvl1h5hcKE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
