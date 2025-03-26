"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { LayoutDashboard, Settings, User, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Image } from 'next/image'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xdidvicwfjeocscmngfb.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkaWR2aWN3Zmplb2NzY21uZ2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODA3MDIsImV4cCI6MjA1ODE1NjcwMn0.kI9dtfNZZ3Vdimga_xLYvLF2GnlBmkTGh5-IvdapAGw"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center font-semibold">
            <img src="https://tridishbank-swit.onrender.com/assets/images/footer/footer-logo-1.png" />
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="px-2 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                    pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b bg-background">
        <div className="flex h-14 items-center px-4 justify-between">
          <Link href="/dashboard" className="flex items-center font-semibold">
            <span className="text-primary mr-2">●</span> My App
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {mobileNavOpen && (
          <nav className="border-t py-2">
            <ul className="px-2 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                      pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant="outline" className="w-full justify-start gap-2 mt-2" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  )
}

