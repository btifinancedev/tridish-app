"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface Transaction {
  id: string
  description: string
  amount: number
  date: string
  type: "credit" | "debit"
}

interface TransactionHistoryProps {
  transactions: Transaction[]
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your recent account activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {transactions.map((transaction) => (
            <div className="flex items-center" key={transaction.id}>
              <div
                className={`mr-4 rounded-full p-2 ${
                  transaction.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {transaction.type === "credit" ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
              <div className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                {transaction.type === "credit" ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

