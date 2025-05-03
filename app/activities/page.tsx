import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Search, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ActivitiesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Forest Activities</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Schedule Activity
          </Button>
        </div>
      </div>
      <Tabs defaultValue="maintenance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="planting">Planting</TabsTrigger>
          <TabsTrigger value="harvesting">Harvesting</TabsTrigger>
          <TabsTrigger value="conservation">Conservation</TabsTrigger>
        </TabsList>
        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Activities</CardTitle>
              <CardDescription>
                Track and schedule forest maintenance activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search activities..." className="pl-8" />
                </div>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar View
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Trail Maintenance
                    </TableCell>
                    <TableCell>East Ridge Trail</TableCell>
                    <TableCell>June 15, 2023</TableCell>
                    <TableCell>June 20, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>Trail Crew A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Invasive Species Removal
                    </TableCell>
                    <TableCell>South Sector</TableCell>
                    <TableCell>July 5, 2023</TableCell>
                    <TableCell>July 25, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>Conservation Team</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Boundary Fence Repair
                    </TableCell>
                    <TableCell>North Perimeter</TableCell>
                    <TableCell>July 15, 2023</TableCell>
                    <TableCell>July 18, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>Maintenance Crew B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Bridge Maintenance
                    </TableCell>
                    <TableCell>River Crossing</TableCell>
                    <TableCell>August 1, 2023</TableCell>
                    <TableCell>August 5, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>Engineering Team</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Fire Break Clearing
                    </TableCell>
                    <TableCell>Western Boundary</TableCell>
                    <TableCell>August 10, 2023</TableCell>
                    <TableCell>August 20, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>Fire Management Team</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Annual Maintenance Plan Progress</CardTitle>
              <CardDescription>
                Current progress on scheduled maintenance activities for the
                year.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Trail System Maintenance
                      </p>
                      <p className="text-sm text-muted-foreground">
                        35 of 42 km complete
                      </p>
                    </div>
                    <p className="text-sm font-medium">83%</p>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Invasive Species Control
                      </p>
                      <p className="text-sm text-muted-foreground">
                        12 of 25 hectares treated
                      </p>
                    </div>
                    <p className="text-sm font-medium">48%</p>
                  </div>
                  <Progress value={48} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Infrastructure Inspection
                      </p>
                      <p className="text-sm text-muted-foreground">
                        18 of 24 structures inspected
                      </p>
                    </div>
                    <p className="text-sm font-medium">75%</p>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="planting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Planting Activities</CardTitle>
              <CardDescription>
                Track and schedule tree and plant planting activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search planting activities..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar View
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Planting Project</TableHead>
                    <TableHead>Species</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Target Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Completion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Reforestation Zone A
                    </TableCell>
                    <TableCell>Mixed Hardwoods</TableCell>
                    <TableCell>Northeast Sector</TableCell>
                    <TableCell>5,000 saplings</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>78%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Riparian Buffer Restoration
                    </TableCell>
                    <TableCell>Willow, Alder, Dogwood</TableCell>
                    <TableCell>Main River</TableCell>
                    <TableCell>1,200 plants</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>45%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wildlife Food Source
                    </TableCell>
                    <TableCell>Oak, Hickory, Chestnut</TableCell>
                    <TableCell>Central Forest</TableCell>
                    <TableCell>850 trees</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>0%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Pollinator Garden
                    </TableCell>
                    <TableCell>Native Wildflowers</TableCell>
                    <TableCell>Visitor Center</TableCell>
                    <TableCell>2,500 sq. ft.</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>100%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Erosion Control Planting
                    </TableCell>
                    <TableCell>Native Grasses</TableCell>
                    <TableCell>South Slope</TableCell>
                    <TableCell>3 hectares</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>0%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Planting Success Rate</CardTitle>
              <CardDescription>
                Survival rate statistics for previous year's plantings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Hardwood Trees (2022)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2,850 of 3,500 surviving
                      </p>
                    </div>
                    <p className="text-sm font-medium">81%</p>
                  </div>
                  <Progress value={81} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Coniferous Trees (2022)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        4,200 of 5,000 surviving
                      </p>
                    </div>
                    <p className="text-sm font-medium">84%</p>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Wetland Species (2022)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        920 of 1,200 surviving
                      </p>
                    </div>
                    <p className="text-sm font-medium">77%</p>
                  </div>
                  <Progress value={77} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="harvesting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Harvesting Activities</CardTitle>
              <CardDescription>
                Track and schedule sustainable harvesting activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search harvesting activities..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar View
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Harvesting Operation</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Area</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sustainability Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Selective Harvest - Mature Oak
                    </TableCell>
                    <TableCell>Timber</TableCell>
                    <TableCell>Management Block 12</TableCell>
                    <TableCell>5.2 hectares</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>★★★★☆</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Thinning - Pine Plantation
                    </TableCell>
                    <TableCell>Timber</TableCell>
                    <TableCell>Management Block 8</TableCell>
                    <TableCell>7.8 hectares</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>★★★★★</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Maple Syrup Collection
                    </TableCell>
                    <TableCell>Non-timber</TableCell>
                    <TableCell>Sugar Bush</TableCell>
                    <TableCell>12.5 hectares</TableCell>
                    <TableCell>
                      <Badge className="bg-slate-100 text-slate-800">
                        Season Ended
                      </Badge>
                    </TableCell>
                    <TableCell>★★★★★</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Salvage - Storm Damage
                    </TableCell>
                    <TableCell>Timber</TableCell>
                    <TableCell>Northeast Corner</TableCell>
                    <TableCell>3.1 hectares</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>★★★★☆</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wild Mushroom Collection
                    </TableCell>
                    <TableCell>Non-timber</TableCell>
                    <TableCell>Various Locations</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>★★★★★</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Annual Harvest Sustainability</CardTitle>
              <CardDescription>
                Tracking sustainable harvest metrics over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Current Year Status</h3>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>Annual Allowable Cut: 1,250 cubic meters</li>
                    <li>Harvested to Date: 780 cubic meters (62%)</li>
                    <li>
                      Forest Growth Rate: 1,450 cubic meters/year (estimated)
                    </li>
                    <li>Net Forest Volume Change: +670 cubic meters</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Post-Harvest Assessment
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Recent harvest sites are showing excellent regeneration with
                    85% of target species successfully establishing. Wildlife
                    surveys show minimal disturbance to key indicator species.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="conservation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conservation Activities</CardTitle>
              <CardDescription>
                Track and schedule conservation and preservation activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conservation activities..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar View
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Lead Organization</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wetland Restoration
                    </TableCell>
                    <TableCell>Habitat Restoration</TableCell>
                    <TableCell>Southern Marsh</TableCell>
                    <TableCell>March 15, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>Wetlands Trust</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Rare Orchid Protection
                    </TableCell>
                    <TableCell>Species Conservation</TableCell>
                    <TableCell>Eastern Ridge</TableCell>
                    <TableCell>April 1, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>Botanical Society</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wildlife Corridor Enhancement
                    </TableCell>
                    <TableCell>Connectivity</TableCell>
                    <TableCell>North-South Corridor</TableCell>
                    <TableCell>May 10, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>Wildlife Federation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Spring Monitoring
                    </TableCell>
                    <TableCell>Water Resource</TableCell>
                    <TableCell>All Water Sources</TableCell>
                    <TableCell>Ongoing</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Continuous
                      </Badge>
                    </TableCell>
                    <TableCell>Watershed Alliance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Old Growth Study Plot
                    </TableCell>
                    <TableCell>Research</TableCell>
                    <TableCell>Ancient Grove</TableCell>
                    <TableCell>June 15, 2022</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">
                        Long-term
                      </Badge>
                    </TableCell>
                    <TableCell>University Research</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Conservation Partnerships</CardTitle>
              <CardDescription>
                Key partnerships supporting our conservation efforts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium">Watershed Alliance</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Monitoring water quality and restoring riparian areas
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Current Projects: 3
                    </p>
                  </div>
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium">University Research Program</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Long-term ecological monitoring and research
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Current Projects: 5
                    </p>
                  </div>
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium">
                      Wildlife Conservation Society
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Habitat protection for endangered species
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Current Projects: 2
                    </p>
                  </div>
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium">Native Plant Society</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Rare plant monitoring and protection
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Current Projects: 1
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
