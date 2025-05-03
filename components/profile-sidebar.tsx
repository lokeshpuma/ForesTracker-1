"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, FileText, Settings, User, UserCircle } from "lucide-react";

interface ProfileSidebarProps {
  userName?: string;
  userEmail?: string;
  userRole?: string;
  userAvatar?: string;
  userAvatarFallback?: string;
  activeTasks?: number;
  completionRate?: number;
}

export function ProfileSidebar({
  userName = "Alex Johnson",
  userEmail = "alex.johnson@forestmanager.com",
  userRole = "Forest Management Specialist",
  userAvatar = "/images/user-avatar.jpg",
  userAvatarFallback = "FM",
  activeTasks = 12,
  completionRate = 86,
}: ProfileSidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="py-6 space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>{userAvatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{userName}</h3>
            <p className="text-sm text-muted-foreground">{userRole}</p>
            <p className="text-xs text-muted-foreground">{userEmail}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center justify-center rounded-md border p-3">
            <span className="text-xl font-bold">{activeTasks}</span>
            <span className="text-xs text-muted-foreground">Active Tasks</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md border p-3">
            <span className="text-xl font-bold">{completionRate}%</span>
            <span className="text-xs text-muted-foreground">
              Completion Rate
            </span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="py-4 flex-1 overflow-auto">
        <h4 className="mb-4 text-sm font-semibold">Recent Activity</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-8 w-1 rounded-full bg-green-500"></div>
            <div>
              <p className="text-sm">Completed tree health assessment</p>
              <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-8 w-1 rounded-full bg-blue-500"></div>
            <div>
              <p className="text-sm">Updated wildlife sighting records</p>
              <p className="text-xs text-muted-foreground">
                Yesterday, 3:45 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-8 w-1 rounded-full bg-amber-500"></div>
            <div>
              <p className="text-sm">Scheduled maintenance for East sector</p>
              <p className="text-xs text-muted-foreground">May 2, 9:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="py-4">
        <h4 className="mb-4 text-sm font-semibold">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" asChild className="justify-start">
            <Link href="/profile">
              <UserCircle className="mr-2 h-4 w-4" />
              Edit Profile
            </Link>
          </Button>
          <Button variant="outline" asChild className="justify-start">
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button variant="outline" asChild className="justify-start">
            <Link href="/tasks">
              <Calendar className="mr-2 h-4 w-4" />
              My Tasks
            </Link>
          </Button>
          <Button variant="outline" asChild className="justify-start">
            <Link href="/reports">
              <FileText className="mr-2 h-4 w-4" />
              My Reports
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
