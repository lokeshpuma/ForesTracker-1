import Link from "next/link";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Calendar,
  Check,
  FileText,
  Filter,
  MapPin,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Notifications | Forest Management",
  description: "View and manage all notifications",
};

// Sample notification data
const notifications = [
  {
    id: "1",
    title: "Scheduled Maintenance",
    description: "South sector maintenance scheduled for tomorrow",
    time: "5 minutes ago",
    read: false,
    type: "task",
    icon: "calendar",
  },
  {
    id: "2",
    title: "Monthly Report Ready",
    description: "April monthly report is now available",
    time: "2 hours ago",
    read: true,
    type: "report",
    icon: "file",
  },
  {
    id: "3",
    title: "New Comment from Tara Chen",
    description: "Tara Chen commented on the wildlife survey report",
    time: "Yesterday",
    read: true,
    type: "comment",
    user: {
      name: "Tara Chen",
      avatar: "/images/user-avatar.jpg",
      initials: "TC",
    },
  },
  {
    id: "4",
    title: "Fire Risk Alert",
    description: "Elevated fire risk in Western sector due to dry conditions",
    time: "Yesterday",
    read: false,
    type: "alert",
    icon: "alert",
  },
  {
    id: "5",
    title: "Inventory Update Completed",
    description: "Tree inventory for North sector has been updated",
    time: "2 days ago",
    read: true,
    type: "system",
    icon: "check",
  },
  {
    id: "6",
    title: "New Wildlife Sighting",
    description: "A protected species was spotted in the East Ridge area",
    time: "2 days ago",
    read: true,
    type: "alert",
    icon: "map",
  },
  {
    id: "7",
    title: "Task Assigned to You",
    description: "Trail maintenance has been assigned to you by Sam Wilson",
    time: "3 days ago",
    read: false,
    type: "task",
    user: {
      name: "Sam Wilson",
      avatar: "/images/user-avatar.jpg",
      initials: "SW",
    },
  },
  {
    id: "8",
    title: "Equipment Maintenance Due",
    description:
      "Regular maintenance check for field equipment is due this week",
    time: "1 week ago",
    read: true,
    type: "reminder",
    icon: "calendar",
  },
];

export default function NotificationsPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            View and manage all your notifications
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Check className="mr-2 h-4 w-4" />
            Mark All as Read
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear All
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filter Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Input id="search" placeholder="Search notifications" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Status</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-muted"
                  >
                    All
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer">
                    Unread
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-muted"
                  >
                    Read
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="task">Tasks</SelectItem>
                    <SelectItem value="alert">Alerts</SelectItem>
                    <SelectItem value="report">Reports</SelectItem>
                    <SelectItem value="comment">Comments</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Time Frame</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Select time frame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Notifications</span>
                <Badge variant="outline">{notifications.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Unread</span>
                <Badge variant="secondary">
                  {notifications.filter((n) => !n.read).length}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tasks</span>
                <Badge variant="outline">
                  {notifications.filter((n) => n.type === "task").length}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Alerts</span>
                <Badge variant="outline">
                  {notifications.filter((n) => n.type === "alert").length}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-3/4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>

            {["all", "unread", "tasks", "alerts"].map((tab) => (
              <TabsContent key={tab} value={tab} className="space-y-6">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {notifications
                        .filter((notification) => {
                          if (tab === "all") return true;
                          if (tab === "unread") return !notification.read;
                          if (tab === "tasks")
                            return notification.type === "task";
                          if (tab === "alerts")
                            return notification.type === "alert";
                          return true;
                        })
                        .map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 ${
                              !notification.read ? "bg-muted/20" : ""
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex gap-4">
                                {notification.user ? (
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage
                                      src={notification.user.avatar}
                                      alt={notification.user.name || "User"}
                                    />
                                    <AvatarFallback>
                                      {notification.user.initials}
                                    </AvatarFallback>
                                  </Avatar>
                                ) : notification.icon === "calendar" ? (
                                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Calendar className="h-5 w-5 text-blue-600" />
                                  </div>
                                ) : notification.icon === "file" ? (
                                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-green-600" />
                                  </div>
                                ) : notification.icon === "map" ? (
                                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-amber-600" />
                                  </div>
                                ) : notification.icon === "check" ? (
                                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check className="h-5 w-5 text-purple-600" />
                                  </div>
                                ) : (
                                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                                    <Bell className="h-5 w-5 text-red-600" />
                                  </div>
                                )}
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-medium">
                                      {notification.title}
                                    </h3>
                                    {!notification.read && (
                                      <Badge className="h-1.5 w-1.5 rounded-full p-0" />
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>

                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    Mark as{" "}
                                    {notification.read ? "unread" : "read"}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing{" "}
                      {
                        notifications.filter((notification) => {
                          if (tab === "all") return true;
                          if (tab === "unread") return !notification.read;
                          if (tab === "tasks")
                            return notification.type === "task";
                          if (tab === "alerts")
                            return notification.type === "alert";
                          return true;
                        }).length
                      }{" "}
                      notifications
                    </p>
                    <Button variant="outline" size="sm">
                      Load More
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
