import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          location: string
          category: string
          description: string
          image_url: string | null
          year: number
          impact: string | null
          created_at: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          excerpt: string
          content: string
          image_url: string | null
          published_at: string
          tags: string[]
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          title: string
          quote: string
          created_at: string
        }
      }
      contact_submissions: {
        Insert: {
          name: string
          email: string
          subject: string
          message: string
        }
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
      }
    }
  }
}
