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
    description: "Deposit",
    amount: 992005,
    date: "2025-05-23",
    type: "credit" as const,
  },
  {
    id: "2",
    description: "Withdrawal",
    amount: 3500.0,
    date: "2025-04-12",
    type: "debit" as const,
  },
  {
    id: "3",
    description: "Payment Received",
    amount: 1200.0,
    date: "2025-04-01",
    type: "credit" as const,
  },
  {
    id: "4",
    description: "Subscription",
    amount: 15.99,
    date: "2025-01-05",
    type: "debit" as const,
  },
  {
    id: "5",
    description: "Refund",
    amount: 50.0,
    date: "2024-12-01",
    type: "credit" as const,
  },
  // Monthly rent payment
  {
    id: "6",
    description: "Rent Payment",
    amount: 1200,
    date: "2024-10-02",
    type: "debit" as const,
  },
  {
    id: "7",
    description: "Rent Payment",
    amount: 1200,
    date: "2024-11-02",
    type: "debit" as const,
  },
  {
    id: "8",
    description: "Rent Payment",
    amount: 1200,
    date: "2024-12-02",
    type: "debit" as const,
  },
  {
    id: "9",
    description: "Rent Payment",
    amount: 1200,
    date: "2025-01-02",
    type: "debit" as const,
  },
  {
    id: "10",
    description: "Rent Payment",
    amount: 1200,
    date: "2025-02-02",
    type: "debit" as const,
  },
  {
    id: "11",
    description: "Rent Payment",
    amount: 1200,
    date: "2025-03-02",
    type: "debit" as const,
  },
  {
    id: "12",
    description: "Rent Payment",
    amount: 1200,
    date: "2025-04-02",
    type: "debit" as const,
  },
  {
    id: "13",
    description: "Rent Payment",
    amount: 1200,
    date: "2025-05-02",
    type: "debit" as const,
  },
  // 6 random account charges
  {
    id: "14",
    description: "Account Charge",
    amount: 253.75,
    date: "2025-03-15",
    type: "debit" as const,
  },
  {
    id: "15",
    description: "Account Charge",
    amount: 118.90,
    date: "2025-02-10",
    type: "debit" as const,
  },
  {
    id: "16",
    description: "Account Charge",
    amount: 77.50,
    date: "2025-01-20",
    type: "debit" as const,
  },
  {
    id: "17",
    description: "Account Charge",
    amount: 320.00,
    date: "2025-04-25",
    type: "debit" as const,
  },
  {
    id: "18",
    description: "Account Charge",
    amount: 65.40,
    date: "2025-05-01",
    type: "debit" as const,
  },
  {
    id: "19",
    description: "Account Charge",
    amount: 392.10,
    date: "2024-12-18",
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

