"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const supabaseUrl = "https://rvnaiucmhbssnqaqwudc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bmFpdWNtaGJzc25xYXF3dWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5OTAwMjYsImV4cCI6MjA2MzU2NjAyNn0.PZTd5XZuibDiFqFlbFhJFPj0C4gxs14YszPZ95A9nag"
const supabase = createClient(supabaseUrl, supabaseAnonKey)



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/")
        return
      }

      setLoading(false)
    }

    checkUser()
  }, [router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return <>{children}</>
}

