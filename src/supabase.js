import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hivjhgrcrdqbnprjvodm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdmpoZ3JjcmRxYm5wcmp2b2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MTIxMjksImV4cCI6MjA0OTk4ODEyOX0.LB92Cx9s7y9q6DI4VMWO-DnBAKkAmTbB9p6cZP_a3-I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
