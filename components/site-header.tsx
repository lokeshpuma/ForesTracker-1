"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TreePine,
  Menu,
  Bell,
  User,
  Settings,
  LogOut,
  UserCircle,
  Calendar,
  FileText,
  Inbox,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { UserDropdown } from "@/components/user-dropdown";
import {
  NotificationsPopover,
  NotificationItem,
} from "@/components/notifications-popover";
import { ProfileSidebar } from "@/components/profile-sidebar";

// Mock notifications data for demonstration
const mockNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Scheduled Maintenance",
    description: "South sector maintenance scheduled for tomorrow",
    time: "5 minutes ago",
    read: false,
    icon: "calendar",
  },
  {
    id: "2",
    title: "Monthly Report Ready",
    description: "April monthly report is now available",
    time: "2 hours ago",
    read: true,
    icon: "file",
  },
  {
    id: "3",
    title: "New Comment",
    description: "Tara Chen commented on the wildlife survey report",
    time: "Yesterday",
    read: true,
    userAvatar: "/images/user-avatar.jpg",
    userAvatarFallback: "TC",
  },
];

export function SiteHeader() {
  // Initialize with empty array and 0 unread
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Initialize notifications with better error handling
  useEffect(() => {
    try {
      // Simulate loading data
      setIsLoading(true);
      // In a real app, you might fetch this from an API
      setTimeout(() => {
        setNotifications(mockNotifications || []);
        setUnreadCount(mockNotifications?.filter((n) => !n.read).length || 0);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      console.error("Error initializing notifications:", err);
      setError(
        err instanceof Error ? err : new Error("Unknown error occurred")
      );
      setIsLoading(false);
    }
  }, []);

  // Handler for marking all as read
  const handleMarkAllAsRead = () => {
    try {
      if (!notifications || notifications.length === 0) {
        return;
      }

      const updatedNotifications = notifications.map((notification) => ({
        ...notification,
        read: true,
      }));
      setNotifications(updatedNotifications);
      setUnreadCount(0);
      console.log("Marked all notifications as read");
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <TreePine className="h-6 w-6" />
          <span className="font-bold inline-block">ForestManager</span>
        </Link>
        <MainNav className="hidden md:flex" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* Notifications Popover */}
            <NotificationsPopover
              notifications={notifications}
              unreadCount={unreadCount}
              onMarkAllAsRead={handleMarkAllAsRead}
            />

            <ModeToggle />

            {/* User Profile Dropdown */}
            <UserDropdown
              userName="Alex Johnson"
              userEmail="alex.johnson@forestmanager.com"
              onLogout={() => console.log("Logout clicked")}
            />

            {/* Right Sidebar Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-2">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Open profile sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <ProfileSidebar />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <Link href="/" className="flex items-center space-x-2 px-4">
        <TreePine className="h-6 w-6" />
        <span className="font-bold">ForestManager</span>
      </Link>
      <div className="px-4 py-2">
        <h4 className="mb-2 text-sm font-semibold">Menu</h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          <Link href="/" className="flex py-2">
            Dashboard
          </Link>
          <Link href="/inventory" className="flex py-2">
            Inventory
          </Link>
          <Link href="/wildlife" className="flex py-2">
            Wildlife
          </Link>
          <Link href="/activities" className="flex py-2">
            Activities
          </Link>
          <Link href="/reports" className="flex py-2">
            Reports
          </Link>
          <Link href="/settings" className="flex py-2">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
