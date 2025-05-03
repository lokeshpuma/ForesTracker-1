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
import { PlusCircle, Search, ArrowUpDown } from "lucide-react";

export default function WildlifePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Wildlife Management
        </h2>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Record Wildlife Sighting
          </Button>
        </div>
      </div>
      <Tabs defaultValue="mammals" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mammals">Mammals</TabsTrigger>
          <TabsTrigger value="birds">Birds</TabsTrigger>
          <TabsTrigger value="insects">Insects</TabsTrigger>
          <TabsTrigger value="aquatic">Aquatic</TabsTrigger>
        </TabsList>
        <TabsContent value="mammals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mammal Species</CardTitle>
              <CardDescription>
                Track and monitor mammal species in the forest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search mammals..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Species</TableHead>
                    <TableHead>Population Estimate</TableHead>
                    <TableHead>Trend</TableHead>
                    <TableHead>Last Sighting</TableHead>
                    <TableHead>Conservation Status</TableHead>
                    <TableHead>Primary Habitat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      White-tailed Deer (Odocoileus virginianus)
                    </TableCell>
                    <TableCell>450-550</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50">
                        Increasing
                      </Badge>
                    </TableCell>
                    <TableCell>Yesterday</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Forest Edge, Meadows</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Red Fox (Vulpes vulpes)
                    </TableCell>
                    <TableCell>75-100</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50">
                        Stable
                      </Badge>
                    </TableCell>
                    <TableCell>2 days ago</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Forest, Grassland</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Eastern Gray Squirrel (Sciurus carolinensis)
                    </TableCell>
                    <TableCell>800+</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50">
                        Increasing
                      </Badge>
                    </TableCell>
                    <TableCell>Today</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Deciduous Forest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Black Bear (Ursus americanus)
                    </TableCell>
                    <TableCell>12-15</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50">
                        Stable
                      </Badge>
                    </TableCell>
                    <TableCell>Last week</TableCell>
                    <TableCell>Protected</TableCell>
                    <TableCell>Deep Forest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      River Otter (Lontra canadensis)
                    </TableCell>
                    <TableCell>20-25</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50">
                        Decreasing
                      </Badge>
                    </TableCell>
                    <TableCell>3 days ago</TableCell>
                    <TableCell>Protected</TableCell>
                    <TableCell>Riverbanks, Streams</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mammal Tracking Program</CardTitle>
              <CardDescription>
                Details about our ongoing mammal monitoring initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">
                    Active Tracking Projects
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      Deer Population Monitoring (GPS Collars on 15 specimens)
                    </li>
                    <li>Black Bear Migration Patterns (4 tagged bears)</li>
                    <li>Small Mammal Biodiversity Survey (Monthly trapping)</li>
                    <li>
                      Predator-Prey Relationship Study (Camera traps at 25
                      locations)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Conservation Focus</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Current conservation efforts are focused on maintaining
                    wildlife corridors for large mammals and protecting critical
                    den sites for endangered species.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="birds" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bird Species</CardTitle>
              <CardDescription>
                Track and monitor bird species in the forest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search birds..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Species</TableHead>
                    <TableHead>Population Estimate</TableHead>
                    <TableHead>Seasonal Presence</TableHead>
                    <TableHead>Last Sighting</TableHead>
                    <TableHead>Conservation Status</TableHead>
                    <TableHead>Nesting Areas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Great Horned Owl (Bubo virginianus)
                    </TableCell>
                    <TableCell>35-45 pairs</TableCell>
                    <TableCell>Year-round</TableCell>
                    <TableCell>2 nights ago</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Old Growth Forest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Pileated Woodpecker (Dryocopus pileatus)
                    </TableCell>
                    <TableCell>25-30 pairs</TableCell>
                    <TableCell>Year-round</TableCell>
                    <TableCell>Yesterday</TableCell>
                    <TableCell>Protected</TableCell>
                    <TableCell>Mature Forest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Eastern Bluebird (Sialia sialis)
                    </TableCell>
                    <TableCell>100+ pairs</TableCell>
                    <TableCell>Spring/Summer</TableCell>
                    <TableCell>Today</TableCell>
                    <TableCell>Recovering</TableCell>
                    <TableCell>Forest Edge, Meadows</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wild Turkey (Meleagris gallopavo)
                    </TableCell>
                    <TableCell>150-200</TableCell>
                    <TableCell>Year-round</TableCell>
                    <TableCell>Yesterday</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Mixed Forest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Scarlet Tanager (Piranga olivacea)
                    </TableCell>
                    <TableCell>40-50 pairs</TableCell>
                    <TableCell>Spring/Summer</TableCell>
                    <TableCell>2 days ago</TableCell>
                    <TableCell>Declining</TableCell>
                    <TableCell>Deciduous Canopy</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bird Conservation Initiatives</CardTitle>
              <CardDescription>
                Ongoing projects to protect and enhance bird habitats.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Nest Box Program</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We maintain 85 nest boxes throughout the forest to support
                    cavity-nesting birds. Regular monitoring shows 73% occupancy
                    rate this season.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Migration Monitoring</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Spring and fall migration counts help us track population
                    trends and timing. Data is shared with national bird
                    conservation networks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Insect Species</CardTitle>
              <CardDescription>
                Track and monitor insect species in the forest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search insects..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Species/Group</TableHead>
                    <TableHead>Abundance</TableHead>
                    <TableHead>Trend</TableHead>
                    <TableHead>Ecological Role</TableHead>
                    <TableHead>Conservation Status</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Monarch Butterfly (Danaus plexippus)
                    </TableCell>
                    <TableCell>Moderate</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50">
                        Declining
                      </Badge>
                    </TableCell>
                    <TableCell>Pollinator</TableCell>
                    <TableCell>Threatened</TableCell>
                    <TableCell>Milkweed planting program in progress</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Native Bees (Various species)
                    </TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50">
                        Stable
                      </Badge>
                    </TableCell>
                    <TableCell>Pollinator</TableCell>
                    <TableCell>Mixed</TableCell>
                    <TableCell>25 species documented</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Fireflies (Lampyridae family)
                    </TableCell>
                    <TableCell>Moderate</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50">
                        Declining
                      </Badge>
                    </TableCell>
                    <TableCell>Predator/Indicator</TableCell>
                    <TableCell>Concern</TableCell>
                    <TableCell>Light pollution reduction efforts</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Forest Beetles (Various species)
                    </TableCell>
                    <TableCell>Very High</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50">
                        Increasing
                      </Badge>
                    </TableCell>
                    <TableCell>Decomposer</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Essential for deadwood breakdown</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Emerald Ash Borer (Agrilus planipennis)
                    </TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50">
                        Monitoring
                      </Badge>
                    </TableCell>
                    <TableCell>Invasive Pest</TableCell>
                    <TableCell>Invasive</TableCell>
                    <TableCell>Containment measures active</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="aquatic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aquatic Species</CardTitle>
              <CardDescription>
                Track and monitor aquatic species in the forest waterways.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search aquatic species..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Species</TableHead>
                    <TableHead>Population</TableHead>
                    <TableHead>Waterway</TableHead>
                    <TableHead>Water Quality</TableHead>
                    <TableHead>Conservation Status</TableHead>
                    <TableHead>Monitoring Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Brook Trout (Salvelinus fontinalis)
                    </TableCell>
                    <TableCell>Healthy</TableCell>
                    <TableCell>Highland Creek</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>Sensitive</TableCell>
                    <TableCell>Electrofishing surveys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Eastern Hellbender (Cryptobranchus alleganiensis)
                    </TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>Main River</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Endangered</TableCell>
                    <TableCell>eDNA, Visual surveys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Freshwater Mussels (Various species)
                    </TableCell>
                    <TableCell>Recovering</TableCell>
                    <TableCell>All waterways</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Mixed</TableCell>
                    <TableCell>Quadrat sampling</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      River Crayfish (Cambarus sp.)
                    </TableCell>
                    <TableCell>Abundant</TableCell>
                    <TableCell>All waterways</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Trap sampling</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Water Quality Invertebrates
                    </TableCell>
                    <TableCell>Varied</TableCell>
                    <TableCell>All waterways</TableCell>
                    <TableCell>Variable</TableCell>
                    <TableCell>Indicator species</TableCell>
                    <TableCell>Kick net sampling</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Watershed Health Indicators</CardTitle>
              <CardDescription>
                Key metrics for assessing the health of our forest waterways.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">
                    Water Quality Parameters
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>Dissolved Oxygen: 8.5-9.8 mg/L (Excellent)</li>
                    <li>pH: 6.8-7.2 (Optimal range)</li>
                    <li>Turbidity: 2.5-4.5 NTU (Good)</li>
                    <li>
                      Temperature: Seasonal variation within expected ranges
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Restoration Projects</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Currently implementing streambank stabilization at 3
                    critical erosion sites. Native riparian vegetation planting
                    ongoing at 5 restoration areas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
