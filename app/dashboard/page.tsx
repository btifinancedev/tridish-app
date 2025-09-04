"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, DollarSign, Download, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BalanceCard } from "@/components/dashboard/balance-card"
import { TransactionHistory } from "@/components/dashboard/transaction-history"
const supabaseUrl = "https://rvnaiucmhbssnqaqwudc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bmFpdWNtaGJzc25xYXF3dWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5OTAwMjYsImV4cCI6MjA2MzU2NjAyNn0.PZTd5XZuibDiFqFlbFhJFPj0C4gxs14YszPZ95A9nag"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const sampleTransactions = [
  {
    id: "1",
    description: "Wire transfer to James Brick – Transfer money for business services",
    amount: 1350,
    date: "2025-08-03",
    type: "debit" as const,
  },
  {
    id: "2",
    description: "Wire transfer to Rodrigues Pama – Transfer money for consulting fee",
    amount: 1130,
    date: "2025-08-07",
    type: "debit" as const,
  },
  {
    id: "3",
    description: "Wire transfer to Jackson Tone – Transfer money for contract settlement",
    amount: 2500,
    date: "2025-08-11",
    type: "debit" as const,
  },
  {
    id: "4",
    description: "Wire transfer to Elizabeth Queen – Transfer money for luxury purchase",
    amount: 9780,
    date: "2025-08-15",
    type: "debit" as const,
  },
  {
    id: "5",
    description: "Wire transfer to Krystal King – Transfer money for investment funding",
    amount: 21000,
    date: "2025-08-19",
    type: "debit" as const,
  },
  {
    id: "6",
    description: "Wire transfer to Tommy Arthur – Transfer money for real estate transaction",
    amount: 32000,
    date: "2025-08-23",
    type: "debit" as const,
  },
  {
    id: "7",
    description: "Wire transfer to Joseph Brian – Transfer money for loan repayment",
    amount: 5000,
    date: "2025-08-27",
    type: "debit" as const,
  },
  {
    id: "8",
    description: "Wire transfer to Jacob Bruce – Transfer money for project financing",
    amount: 13200,
    date: "2025-08-31",
    type: "debit" as const,
  },
];



export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [balance, setBalance] = useState(1255000.01)

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      }
    }

    getUser()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
              <h1 className="text-xl font-bold tracking-tight">Welcome back, Tommy Arthur</h1>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 ">
                  <BalanceCard balance={balance} />
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  {/* <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                  </Card> */}
                </div>
                <div className="grid gap-4 md:grid-cols-2  ">
                  {/* <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                        <BarChart3 className="h-16 w-16 text-muted" />
                      </div>
                    </CardContent>
                  </Card> */}
                  <div className="col-span-3">
                    <TransactionHistory transactions={sampleTransactions} />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>View detailed analytics for your account.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-muted-foreground">Analytics content coming soon</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>View and download reports.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-muted-foreground">Reports content coming soon</p>
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

