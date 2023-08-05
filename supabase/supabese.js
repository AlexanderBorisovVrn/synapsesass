import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://azevtqtkappzxslxcque.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZXZ0cXRrYXBwenhzbHhjcXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0Nzg2NDEsImV4cCI6MjAwNDA1NDY0MX0.oOEZDlkVWkCcf88fX8326Z-2l7tUGChFTCnT1e6XVMk'
export const supabase = createClient(supabaseUrl, supabaseKey,{auth:{persistSession: false}})