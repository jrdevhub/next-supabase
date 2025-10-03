import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://npnobvlauqlswxhmtbgy.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbm9idmxhdXFsc3d4aG10Ymd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NDgyMzEsImV4cCI6MjA3NTAyNDIzMX0.DkxUogzSBR-Bg3BK9inwWL0exhOHUt92AJGVjNvpibk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
