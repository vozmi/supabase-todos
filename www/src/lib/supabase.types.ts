export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: {
          completed: boolean | null
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          completed?: boolean | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          completed?: boolean | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
