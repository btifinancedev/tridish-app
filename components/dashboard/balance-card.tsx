"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { TransferModal } from "./transfer-modal"

interface BalanceCardProps {
  balance: number
  currency?: string
}

export function BalanceCard({ balance, currency = "USD" }: BalanceCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
        <Wallet className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(balance)}</div>
        <p className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="pt-1">
        <TransferModal
          balance={balance}
          trigger={
            <Button size="sm" className="w-full">
              Transfer
            </Button>
          }
        />
      </CardFooter>
    </Card>
  )
}

