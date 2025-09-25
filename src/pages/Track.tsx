import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Package, MapPin, Clock, Truck, CheckCircle, AlertCircle, Phone } from "lucide-react";

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock tracking data
  const mockTrackingData = {
    trackingNumber: "AT2024001234",
    status: "In Transit",
    estimatedDelivery: "2024-01-15",
    currentLocation: "Distribution Center - Springfield",
    service: "Long Distance Freight",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    driver: "Mike Johnson",
    driverPhone: "+1 (555) 987-6543",
    vehicle: "Truck #247",
    events: [
      {
        date: "2024-01-12",
        time: "14:30",
        location: "New York, NY",
        status: "Package Picked Up",
        description: "Package collected from sender",
        icon: <Package className="h-4 w-4" />,
        completed: true
      },
      {
        date: "2024-01-12",
        time: "16:45",
        location: "Newark Distribution Center",
        status: "Departed Facility",
        description: "Package departed from Newark facility",
        icon: <Truck className="h-4 w-4" />,
        completed: true
      },
      {
        date: "2024-01-13",
        time: "09:15",
        location: "Philadelphia, PA",
        status: "In Transit",
        description: "Package is in transit to next facility",
        icon: <MapPin className="h-4 w-4" />,
        completed: true
      },
      {
        date: "2024-01-14",
        time: "11:20",
        location: "Distribution Center - Springfield",
        status: "Arrived at Facility",
        description: "Package arrived at intermediate facility",
        icon: <CheckCircle className="h-4 w-4" />,
        completed: true,
        current: true
      },
      {
        date: "2024-01-15",
        time: "Expected",
        location: "Los Angeles, CA",
        status: "Out for Delivery",
        description: "Package will be out for delivery",
        icon: <Truck className="h-4 w-4" />,
        completed: false
      },
      {
        date: "2024-01-15",
        time: "Expected",
        location: "Los Angeles, CA",
        status: "Delivered",
        description: "Package delivered to recipient",
        icon: <CheckCircle className="h-4 w-4" />,
        completed: false
      }
    ]
  };

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, show mock data for any tracking number
    setTrackingData(mockTrackingData);
    setIsLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500/10 text-green-700 border-green-200';
      case 'in transit':
        return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'picked up':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'delayed':
        return 'bg-red-500/10 text-red-700 border-red-200';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Track Your Shipment
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Enter your tracking number to get real-time updates on your package location and delivery status.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Track Your Package
              </CardTitle>
              <CardDescription>
                Enter your tracking number to see the current status and location of your shipment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="trackingNumber" className="sr-only">
                    Tracking Number
                  </Label>
                  <Input
                    id="trackingNumber"
                    placeholder="Enter tracking number (e.g., AT2024001234)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                  />
                </div>
                <Button 
                  onClick={handleTrack}
                  disabled={isLoading || !trackingNumber.trim()}
                  className="btn-shadow"
                >
                  {isLoading ? "Tracking..." : "Track Package"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Package Info */}
              <div className="lg:col-span-1">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Package Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Tracking Number</Label>
                      <p className="font-mono text-lg">{trackingData.trackingNumber}</p>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                      <div className="mt-1">
                        <Badge className={getStatusColor(trackingData.status)}>
                          {trackingData.status}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Service Type</Label>
                      <p>{trackingData.service}</p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Origin</Label>
                      <p>{trackingData.origin}</p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Destination</Label>
                      <p>{trackingData.destination}</p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Estimated Delivery</Label>
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        {trackingData.estimatedDelivery}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Current Location</Label>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        {trackingData.currentLocation}
                      </p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Driver</Label>
                      <p>{trackingData.driver}</p>
                      <p className="text-sm text-muted-foreground">{trackingData.driverPhone}</p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Vehicle</Label>
                      <p>{trackingData.vehicle}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tracking Timeline */}
              <div className="lg:col-span-2">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Tracking History</CardTitle>
                    <CardDescription>
                      Follow your package's journey from pickup to delivery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trackingData.events.map((event, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            event.completed 
                              ? event.current 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-green-100 text-green-600'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {event.icon}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className={`font-medium ${event.current ? 'text-primary' : ''}`}>
                                {event.status}
                              </h3>
                              <span className="text-sm text-muted-foreground">
                                {event.date} {event.time}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {event.description}
                            </p>
                            <p className="text-sm font-medium text-foreground">
                              {event.location}
                            </p>
                            {event.current && (
                              <Badge variant="outline" className="mt-2 text-primary border-primary">
                                Current Location
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Can't find your tracking information or have questions about your shipment?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-shadow">
              <Phone className="mr-2 h-5 w-5" />
              Call Support
            </Button>
            <Button size="lg" variant="outline">
              <AlertCircle className="mr-2 h-5 w-5" />
              Report Issue
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Track;