// connecting the supabase with the project 

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mespvreoparpfibuzbdh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lc3B2cmVvcGFycGZpYnV6YmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNzYxNTQsImV4cCI6MjAzOTc1MjE1NH0.9MVUx4anLwcBXt-iRWaRzQOoDxUekfYbGR2rYIm-dpw';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
