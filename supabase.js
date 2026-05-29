import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://ftypxnjyjzchnrhgfgeq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eXB4bmp5anpjaG5yaGdmZ2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMjkwODEsImV4cCI6MjA5NTYwNTA4MX0.EHT09j1Q42riGpI8kItPx_vl04Zzhx7KxC9A4MFbuhw'
)
