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
import { Label } from "@/components/ui/label";
import { PlusCircle, Search } from "lucide-react";

export default function InventoryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Forest Inventory</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Item
          </Button>
        </div>
      </div>
      <Tabs defaultValue="trees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trees">Trees</TabsTrigger>
          <TabsTrigger value="plants">Plants</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
        </TabsList>
        <TabsContent value="trees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tree Inventory</CardTitle>
              <CardDescription>
                Manage and track all tree species in the forest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search trees..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Species</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Height (m)</TableHead>
                    <TableHead>Health Status</TableHead>
                    <TableHead>Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Pine (Pinus sylvestris)
                    </TableCell>
                    <TableCell>253</TableCell>
                    <TableCell>15-20 years</TableCell>
                    <TableCell>18.5</TableCell>
                    <TableCell>Healthy</TableCell>
                    <TableCell>North Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Oak (Quercus robur)
                    </TableCell>
                    <TableCell>187</TableCell>
                    <TableCell>50-75 years</TableCell>
                    <TableCell>22.7</TableCell>
                    <TableCell>Healthy</TableCell>
                    <TableCell>Central Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Maple (Acer saccharum)
                    </TableCell>
                    <TableCell>129</TableCell>
                    <TableCell>30-40 years</TableCell>
                    <TableCell>16.2</TableCell>
                    <TableCell>Monitoring</TableCell>
                    <TableCell>East Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Birch (Betula pendula)
                    </TableCell>
                    <TableCell>215</TableCell>
                    <TableCell>10-15 years</TableCell>
                    <TableCell>12.8</TableCell>
                    <TableCell>Healthy</TableCell>
                    <TableCell>South Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Cedar (Thuja plicata)
                    </TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>25-35 years</TableCell>
                    <TableCell>19.3</TableCell>
                    <TableCell>Treatment Required</TableCell>
                    <TableCell>West Sector</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="plants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plant Inventory</CardTitle>
              <CardDescription>
                Manage and track all plant species in the forest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search plants..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Species</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Coverage (m²)</TableHead>
                    <TableHead>Season</TableHead>
                    <TableHead>Conservation Status</TableHead>
                    <TableHead>Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Ferns (Dryopteris filix-mas)
                    </TableCell>
                    <TableCell>Undergrowth</TableCell>
                    <TableCell>450</TableCell>
                    <TableCell>Perennial</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>North Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wild Strawberry (Fragaria vesca)
                    </TableCell>
                    <TableCell>Ground Cover</TableCell>
                    <TableCell>320</TableCell>
                    <TableCell>Spring/Summer</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>Central Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Blue Cohosh (Caulophyllum thalictroides)
                    </TableCell>
                    <TableCell>Herbaceous</TableCell>
                    <TableCell>175</TableCell>
                    <TableCell>Spring</TableCell>
                    <TableCell>Protected</TableCell>
                    <TableCell>East Sector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Moss (Bryophyta)
                    </TableCell>
                    <TableCell>Ground Cover</TableCell>
                    <TableCell>980</TableCell>
                    <TableCell>Perennial</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>All Sectors</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Wild Garlic (Allium ursinum)
                    </TableCell>
                    <TableCell>Herbaceous</TableCell>
                    <TableCell>210</TableCell>
                    <TableCell>Spring</TableCell>
                    <TableCell>Common</TableCell>
                    <TableCell>South Sector</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="equipment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Inventory</CardTitle>
              <CardDescription>
                Manage and track all forestry equipment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search equipment..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Equipment</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Last Maintenance</TableHead>
                    <TableHead>Storage Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Chainsaw (Husqvarna 450)
                    </TableCell>
                    <TableCell>Power Tool</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>May 15, 2023</TableCell>
                    <TableCell>Tool Shed A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Forestry Survey Kit
                    </TableCell>
                    <TableCell>Measurement</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>June 3, 2023</TableCell>
                    <TableCell>Storage Room B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      All-Terrain Vehicle
                    </TableCell>
                    <TableCell>Vehicle</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>April 22, 2023</TableCell>
                    <TableCell>Vehicle Bay</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Tree Planter Tools
                    </TableCell>
                    <TableCell>Hand Tool</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>Fair</TableCell>
                    <TableCell>March 10, 2023</TableCell>
                    <TableCell>Tool Shed B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Drones (DJI Phantom 4)
                    </TableCell>
                    <TableCell>Monitoring</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>June 18, 2023</TableCell>
                    <TableCell>Equipment Room</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
