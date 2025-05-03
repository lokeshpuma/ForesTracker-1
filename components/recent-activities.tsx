import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      activity: "Tree planting completed",
      area: "North Sector",
      status: "Completed",
      date: "2 hours ago",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
    },
    {
      id: 2,
      activity: "Wildlife survey",
      area: "East Ridge",
      status: "In Progress",
      date: "5 hours ago",
      user: {
        name: "Maria Garcia",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MG",
      },
    },
    {
      id: 3,
      activity: "Invasive species removal",
      area: "South Creek",
      status: "Completed",
      date: "Yesterday",
      user: {
        name: "Sam Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
    },
    {
      id: 4,
      activity: "Trail maintenance",
      area: "West Trail",
      status: "Scheduled",
      date: "Tomorrow",
      user: {
        name: "Tara Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "TC",
      },
    },
  ]

  return (
    <div className="space-y-8">
      {activities.map((item) => (
        <div className="flex items-center" key={item.id}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.user.avatar} alt={item.user.name} />
            <AvatarFallback>{item.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.activity}</p>
            <p className="text-sm text-muted-foreground">
              {item.area} • {item.date}
            </p>
          </div>
          <div className="ml-auto">
            <Badge
              variant={
                item.status === "Completed" ? "default" : item.status === "In Progress" ? "secondary" : "outline"
              }
            >
              {item.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

