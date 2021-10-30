// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient('https://xncwqotwmvlxxpfozgeo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDY5MjMwNywiZXhwIjoxOTUwMjY4MzA3fQ.VpuONAMre6QQhhonuz6KOYoXbtYGo6XDQwfP-PZ6Hek');