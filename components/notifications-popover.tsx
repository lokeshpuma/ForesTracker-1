"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Calendar, FileText } from "lucide-react";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon?: "calendar" | "file" | "user" | string;
  userAvatar?: string;
  userAvatarFallback?: string;
}

interface NotificationsPopoverProps {
  notifications: NotificationItem[];
  unreadCount: number;
  onMarkAllAsRead?: () => void;
}

export function NotificationsPopover({
  notifications = [],
  unreadCount = 0,
  onMarkAllAsRead = () => {},
}: NotificationsPopoverProps) {
  // Safety check to ensure notifications is always an array
  const safeNotifications = Array.isArray(notifications) ? notifications : [];

  // Function to safely handle notification clicks
  const handleNotificationClick = (notificationId: string) => {
    try {
      console.log(`Clicked notification: ${notificationId}`);
      // Here you could add logic to mark individual notifications as read
    } catch (error) {
      console.error(
        `Error handling notification click for ID ${notificationId}:`,
        error
      );
    }
  };

  // Function to safely handle view all link
  const handleViewAll = (e: React.MouseEvent) => {
    try {
      console.log("Viewing all notifications");
      // Optional analytics tracking could go here
    } catch (error) {
      console.error("Error navigating to all notifications:", error);
      // Don't prevent default navigation even if error occurs
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {typeof unreadCount === "number" && unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="font-medium">Notifications</h4>
          {typeof unreadCount === "number" && unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs"
              onClick={() => {
                try {
                  onMarkAllAsRead();
                } catch (error) {
                  console.error("Error marking notifications as read:", error);
                }
              }}
            >
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {safeNotifications.length === 0 ? (
            <div className="py-6 text-center">
              <p className="text-sm text-muted-foreground">No notifications</p>
            </div>
          ) : (
            safeNotifications.map((notification) => (
              <div
                key={notification?.id || `notification-${Math.random()}`}
                className={`p-4 border-b ${
                  !notification?.read ? "bg-muted/50" : ""
                } cursor-pointer hover:bg-muted/30`}
                onClick={() => handleNotificationClick(notification?.id || "")}
              >
                <div className="flex gap-3">
                  {notification?.icon === "calendar" ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </span>
                  ) : notification?.icon === "file" ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <FileText className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </span>
                  ) : notification?.userAvatar ? (
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={notification.userAvatar}
                        alt={notification.userAvatarFallback || ""}
                      />
                      <AvatarFallback>
                        {notification.userAvatarFallback || "N/A"}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <Bell className="h-4 w-4" />
                    </span>
                  )}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">
                      {notification?.title || "Notification"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification?.description || ""}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification?.time || ""}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {safeNotifications.length > 0 && (
          <div className="p-2 border-t text-center">
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/notifications" onClick={handleViewAll}>
                View all notifications
              </Link>
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
