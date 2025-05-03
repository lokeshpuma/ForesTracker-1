import Link from "next/link";
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
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  CalendarDays,
  FileBarChart,
  FileText,
  Map,
  Trees,
  ArrowUpRight,
  Trash,
  ArrowRight,
  BarChart3,
  Leaf,
  CloudSun,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { OverviewStats } from "@/components/overview-stats";
import { RecentActivities } from "@/components/recent-activities";
import { ForestMap } from "@/components/forest-map";

export default function DashboardPage() {
  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading="Forest Management Dashboard"
          text="Monitor and manage forest resources effectively."
        >
          <div className="flex gap-2">
            <Button variant="outline">
              <CloudSun className="mr-2 h-4 w-4" />
              Weather Data
            </Button>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </DashboardHeader>

        {/* Alert Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start">
          <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-medium text-amber-800">Attention Required</h3>
            <p className="text-sm text-amber-700 mt-1">
              Fire risk is elevated in the Western sector due to dry conditions.
              Scheduled controlled burns have been postponed.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-amber-700 border-amber-300 hover:bg-amber-100"
          >
            View Details
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="health">Forest Health</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <OverviewStats />

            {/* Sustainability Metrics */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle>Sustainability Metrics</CardTitle>
                <CardDescription>
                  Key environmental indicators for this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Leaf className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">
                          Carbon Sequestration
                        </span>
                      </div>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      +2% from last month
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Trees className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">
                          Biodiversity Index
                        </span>
                      </div>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      +5% from last year
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Trash className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">
                          Waste Reduction
                        </span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Target: 80% by year end
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Forest Coverage Map</span>
                    <Badge className="ml-2">Live Data</Badge>
                  </CardTitle>
                  <CardDescription>
                    Visual representation of forest areas under management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ForestMap />
                </CardContent>
                <CardFooter className="justify-between">
                  <p className="text-xs text-muted-foreground">
                    Last updated: Today, 10:45 AM
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/map" className="flex items-center">
                      <Map className="mr-2 h-4 w-4" />
                      Full Map View
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    Latest management activities and events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivities />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="mr-2 h-4 w-4" /> View Analytics
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/activities" className="flex items-center">
                      View All Activities
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Scheduled activities for the next 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-4 rounded-md border bg-muted/20">
                    <div>
                      <p className="font-medium">Annual Tree Inventory</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        North Sector • Tomorrow, 8:00 AM
                      </p>
                    </div>
                    <Badge>High Priority</Badge>
                  </div>

                  <div className="flex items-start justify-between p-4 rounded-md border bg-muted/20">
                    <div>
                      <p className="font-medium">Watershed Monitoring</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        East Creek • Wednesday, 10:00 AM
                      </p>
                    </div>
                    <Badge variant="outline">Routine</Badge>
                  </div>

                  <div className="flex items-start justify-between p-4 rounded-md border bg-muted/20">
                    <div>
                      <p className="font-medium">Stakeholder Meeting</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Virtual • Friday, 2:00 PM
                      </p>
                    </div>
                    <Badge variant="secondary">Meeting</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/calendar">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    View Full Calendar
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Forest Inventory</CardTitle>
                <CardDescription>
                  Track and manage forest resources and species.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <h3 className="text-sm font-medium">
                    Inventory Distribution
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="rounded-md bg-green-100 p-3">
                      <p className="font-medium text-lg">65%</p>
                      <p className="text-xs text-green-700">Hardwood</p>
                    </div>
                    <div className="rounded-md bg-emerald-100 p-3">
                      <p className="font-medium text-lg">28%</p>
                      <p className="text-xs text-emerald-700">Conifer</p>
                    </div>
                    <div className="rounded-md bg-teal-100 p-3">
                      <p className="font-medium text-lg">5%</p>
                      <p className="text-xs text-teal-700">Shrubs</p>
                    </div>
                    <div className="rounded-md bg-cyan-100 p-3">
                      <p className="font-medium text-lg">2%</p>
                      <p className="text-xs text-cyan-700">Other</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  The inventory section provides detailed information about tree
                  species, age distribution, health status, and resource
                  quantities across different forest areas.
                </p>
                <div className="mt-4 grid gap-4">
                  <Button variant="outline" asChild>
                    <Link
                      href="/inventory"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Trees className="mr-2 h-4 w-4" />
                        Tree Inventory
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="/inventory"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <FileBarChart className="mr-2 h-4 w-4" />
                        Resource Tracking
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="/inventory"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Map className="mr-2 h-4 w-4" />
                        Inventory Map
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wildlife" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Wildlife Monitoring</CardTitle>
                <CardDescription>
                  Track and protect wildlife populations in managed forest
                  areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <h3 className="text-sm font-medium">
                    Species Population Trends
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Deer Population</span>
                        <span className="text-sm font-medium">450-550</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <p className="text-xs text-green-600">
                        +10% from previous year
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Bird Species Diversity</span>
                        <span className="text-sm font-medium">124 species</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <p className="text-xs text-green-600">
                        +4 species identified this quarter
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  The wildlife monitoring section helps track animal
                  populations, migration patterns, and conservation efforts
                  within the forest ecosystem.
                </p>
                <div className="mt-4 grid gap-4">
                  <Button variant="outline" asChild>
                    <Link
                      href="/wildlife"
                      className="flex items-center justify-between"
                    >
                      <span>Species Database</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="/wildlife"
                      className="flex items-center justify-between"
                    >
                      <span>Sighting Reports</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="/wildlife"
                      className="flex items-center justify-between"
                    >
                      <span>Conservation Projects</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Management Activities</CardTitle>
                <CardDescription>
                  Schedule and track forest management operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">
                    Activity Status Overview
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                        <span>Completed (35%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-amber-500 mr-1"></div>
                        <span>In Progress (28%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-muted mr-1"></div>
                        <span>Planned (37%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Plan and monitor activities such as planting, harvesting,
                  conservation efforts, and maintenance operations.
                </p>
                <div className="mt-4 grid gap-4">
                  <Button variant="outline" asChild>
                    <Link
                      href="/activities"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        Activity Calendar
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="/activities"
                      className="flex items-center justify-between"
                    >
                      <span>Task Management</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="/activities"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Activity Reports
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Forest Health Monitoring</CardTitle>
                <CardDescription>
                  Track and analyze ecosystem health indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-md border p-4">
                      <div className="text-2xl font-bold">87/100</div>
                      <p className="text-xs text-muted-foreground">
                        Biodiversity Index
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        ↑ 3 points from last year
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <div className="text-2xl font-bold">1,250</div>
                      <p className="text-xs text-muted-foreground">
                        Carbon Storage (tons)
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        ↑ 5% from last year
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <div className="text-2xl font-bold">72/100</div>
                      <p className="text-xs text-muted-foreground">
                        Resilience Score
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        ↑ 2 points from last year
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">
                      Key Health Indicators
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Soil Quality: Excellent</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Water Quality: Good</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        <span>
                          Pest Pressure: Moderate (monitoring 2 sectors)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Fire Risk: Low (except Western sector)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/reports">View Health Reports</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/reports">Full Analysis Dashboard</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DashboardShell>
    </>
  );
}
