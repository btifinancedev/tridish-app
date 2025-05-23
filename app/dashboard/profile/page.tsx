"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Loader2, CreditCard, Trash2 } from "lucide-react"
const supabaseUrl = "https://rvnaiucmhbssnqaqwudc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bmFpdWNtaGJzc25xYXF3dWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5OTAwMjYsImV4cCI6MjA2MzU2NjAyNn0.PZTd5XZuibDiFqFlbFhJFPj0C4gxs14YszPZ95A9nag"
const supabase = createClient(supabaseUrl, supabaseAnonKey)


export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        setEmail(user.email || "")
      }
    }

    getUser()
  }, [])

  async function updatePassword() {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    try {
      setLoading(true)
      setError(null)

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) {
        setError(error.message)
        return
      }

      setSuccess(true)
      setNewPassword("")
      setConfirmPassword("")
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            </div>

            <Tabs defaultValue="account" className="space-y-4">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="banking">Banking</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>View and update your account details.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={email} disabled />
                      <p className="text-sm text-muted-foreground">
                        Your email address is your identity on our platform and is used to log in.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-id">User ID</Label>
                      <Input id="user-id" value={user?.id || ""} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="created-at">Account Created</Label>
                      <Input
                        id="created-at"
                        value={"Feb 12, 2024"}
                        disabled
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password to keep your account secure.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                    {success && (
                      <Alert className="bg-green-50 text-green-800 border-green-200">
                        <AlertDescription>Password updated successfully!</AlertDescription>
                      </Alert>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={updatePassword} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        "Update Password"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Notification settings coming soon</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="banking">
                <Card>
                  <CardHeader>
                    <CardTitle>Banking Information</CardTitle>
                    <CardDescription>Manage your connected bank accounts.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Chase Bank</p>
                            <p className="text-sm text-muted-foreground">Account ending in 4567</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-md border border-dashed p-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <CreditCard className="h-8 w-8 text-muted-foreground mb-2" />
                        <h3 className="font-medium">Add a new bank account</h3>
                        <p className="text-sm text-muted-foreground mb-4">Connect a bank account to transfer funds.</p>
                        <Button>Add Bank Account</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

