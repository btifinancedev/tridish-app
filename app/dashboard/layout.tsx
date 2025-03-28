"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
const supabaseUrl = "https://xdidvicwfjeocscmngfb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkaWR2aWN3Zmplb2NzY21uZ2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODA3MDIsImV4cCI6MjA1ODE1NjcwMn0.kI9dtfNZZ3Vdimga_xLYvLF2GnlBmkTGh5-IvdapAGw"
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

