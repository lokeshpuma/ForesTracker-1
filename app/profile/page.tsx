import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "@/components/user-avatar";
import {
  Calendar,
  Check,
  FileText,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  TreePine,
  User,
  UserCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Profile | Forest Management",
  description: "User profile and personal settings",
};

export default function ProfilePage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and preferences
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-muted/20">
            <UserAvatar
              size="lg"
              src="/images/user-avatar.jpg"
              alt="Alex Johnson"
              fallback="AJ"
            />
            <div className="text-center">
              <h2 className="text-xl font-bold">Alex Johnson</h2>
              <p className="text-muted-foreground">
                Forest Management Specialist
              </p>
            </div>
            <Button variant="outline" size="sm" className="mt-2">
              Change Avatar
            </Button>
            <Separator className="my-2" />
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="border rounded-md p-2 text-center">
                <p className="text-2xl font-bold text-green-600">12</p>
                <p className="text-xs text-muted-foreground">Active Tasks</p>
              </div>
              <div className="border rounded-md p-2 text-center">
                <p className="text-2xl font-bold text-amber-600">5</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Johnson" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        defaultValue="alex.johnson@forestmanager.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Input id="phone" defaultValue="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <Input id="location" defaultValue="Portland, Oregon" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Forest Management Specialist with 5 years of experience in sustainable forestry practices. Focused on ecosystem preservation and biodiversity conservation."
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>
                    Information about your role and certifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      defaultValue="Forest Management Specialist"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Conservation" />
                  </div>

                  <div className="space-y-2">
                    <Label>Certifications</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="py-1">
                        <TreePine className="mr-1 h-3 w-3" />
                        Certified Forester
                      </Badge>
                      <Badge className="py-1">
                        <Shield className="mr-1 h-3 w-3" />
                        Environmental Protection
                      </Badge>
                      <Badge className="py-1">
                        <Check className="mr-1 h-3 w-3" />
                        GIS Specialist
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    Your recent activities and tasks in the forest management
                    system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          Completed Tree Health Assessment
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          Today, 10:30 AM
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Completed comprehensive health assessment for North
                        Sector trees
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          Updated Wildlife Sighting Records
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          Yesterday, 3:45 PM
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Added 12 new wildlife sightings to the database
                      </p>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Scheduled Maintenance</h3>
                        <span className="text-xs text-muted-foreground">
                          May 2, 9:00 AM
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Set up maintenance schedule for East sector trails and
                        facilities
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          Contributed to Monthly Report
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          April 28, 2:15 PM
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Added biodiversity section to the April monthly report
                      </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Fire Risk Assessment</h3>
                        <span className="text-xs text-muted-foreground">
                          April 25, 11:20 AM
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Conducted fire risk assessment for all sectors
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activities
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assigned Tasks</CardTitle>
                  <CardDescription>
                    Tasks currently assigned to you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md bg-muted/20">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <TreePine className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Invasive Species Monitoring
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            South Creek area
                          </p>
                        </div>
                      </div>
                      <Badge>High Priority</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md bg-muted/20">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Quarterly Report Review
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Q2 conservation report
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">Medium</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md bg-muted/20">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Trail Improvement Planning
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            West Trail network
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">Scheduled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your password and account security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Shield className="mr-2 h-4 w-4" />
                    Update Password
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          Two-factor authentication is enabled
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Your account is protected with an authentication app
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Disable 2FA</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Preferences</CardTitle>
                  <CardDescription>
                    Customize your experience with the forest management system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for important events
                      </p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="email-notifications"
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 focus:ring-2 focus:ring-primary h-4 w-4"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <h3 className="font-medium">Task Reminders</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive reminders for upcoming tasks and deadlines
                      </p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="task-reminders"
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 focus:ring-2 focus:ring-primary h-4 w-4"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <h3 className="font-medium">Dashboard View</h3>
                      <p className="text-sm text-muted-foreground">
                        Show detailed view on dashboard by default
                      </p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="dashboard-view"
                        type="checkbox"
                        className="rounded border-gray-300 focus:ring-2 focus:ring-primary h-4 w-4"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <h3 className="font-medium">Data Export Format</h3>
                      <p className="text-sm text-muted-foreground">
                        Default file format for exporting data
                      </p>
                    </div>
                    <select className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-sm">
                      <option>CSV</option>
                      <option>Excel</option>
                      <option>PDF</option>
                      <option>JSON</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
