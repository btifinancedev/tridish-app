"use client"

import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="display">Display</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Manage your general account settings.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="necessary" className="flex flex-col space-y-1">
                        <span>Use 24-hour time</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Display time using a 24-hour format
                        </span>
                      </Label>
                      <Switch id="necessary" />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="functional" className="flex flex-col space-y-1">
                        <span>Show activity status</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Let others see when you're active
                        </span>
                      </Label>
                      <Switch id="functional" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="performance" className="flex flex-col space-y-1">
                        <span>Enable desktop notifications</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Get notifications on your desktop
                        </span>
                      </Label>
                      <Switch id="performance" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="pt">Portuguese</SelectItem>
                          <SelectItem value="ja">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="appearance">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Customize the appearance of the app.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select defaultValue="system">
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">System</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">Select the theme for the dashboard.</p>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="animations" className="flex flex-col space-y-1">
                        <span>Show animations</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Enable animations throughout the interface
                        </span>
                      </Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="compact" className="flex flex-col space-y-1">
                        <span>Compact mode</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Use a more compact layout to fit more content
                        </span>
                      </Label>
                      <Switch id="compact" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Configure how you receive notifications.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="email-notifs" className="flex flex-col space-y-1">
                        <span>Email notifications</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Receive notifications via email
                        </span>
                      </Label>
                      <Switch id="email-notifs" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="push-notifs" className="flex flex-col space-y-1">
                        <span>Push notifications</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Receive notifications on your device
                        </span>
                      </Label>
                      <Switch id="push-notifs" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="marketing" className="flex flex-col space-y-1">
                        <span>Marketing emails</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Receive emails about new features and offers
                        </span>
                      </Label>
                      <Switch id="marketing" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="display">
                <Card>
                  <CardHeader>
                    <CardTitle>Display Settings</CardTitle>
                    <CardDescription>Customize how content is displayed.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="density">Display Density</Label>
                      <Select defaultValue="comfortable">
                        <SelectTrigger id="density">
                          <SelectValue placeholder="Select density" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="comfortable">Comfortable</SelectItem>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="dense">Dense</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="font-size">Font Size</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="font-size">
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

