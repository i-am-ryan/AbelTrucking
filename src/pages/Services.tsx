import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Home, Package, Shield, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import service images
import servicesHero from "@/assets/truck-fleet.jpg";
import truckFleet from "@/assets/truck-fleet.jpg";
import vanLoadingBoxes from "@/assets/van-loading-boxes.jpg";
import deliveryVanHighway from "@/assets/delivery-van-highway.jpg";
import deliveryTeamCustomer from "@/assets/delivery-team-customer.jpg";
import warehouseInterior from "@/assets/warehouse-interior.jpg";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Long Distance Trucking",
      description: "Professional freight transportation across the country with real-time tracking and secure handling.",
      features: ["Cross-country delivery", "Real-time GPS tracking", "Secure cargo handling", "Flexible scheduling"],
      backgroundImage: deliveryVanHighway,
      gradient: "from-blue-600/90 to-blue-800/90"
    },
    {
      icon: <Home className="h-8 w-8 text-white" />,
      title: "House Removals",
      description: "Complete residential moving services with experienced crews and proper equipment.",
      features: ["Professional packing", "Furniture disassembly", "Storage solutions", "Insurance coverage"],
      backgroundImage: vanLoadingBoxes,
     gradient: "from-blue-600/90 to-blue-800/90"
    },
    {
      icon: <Package className="h-8 w-8 text-white" />,
      title: "Local Delivery",
      description: "Fast and reliable local delivery services for businesses and individuals.",
      features: ["Same-day delivery", "Scheduled pickups", "Proof of delivery", "Competitive rates"],
      backgroundImage: deliveryTeamCustomer,
     gradient: "from-blue-600/90 to-blue-800/90"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Storage Solutions",
      description: "Secure storage facilities for short-term and long-term storage needs.",
      features: ["Climate-controlled units", "24/7 security monitoring", "Flexible rental terms", "Easy access"],
      backgroundImage: warehouseInterior,
     gradient: "from-blue-600/90 to-blue-800/90"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Specialized Transport",
      description: "Specialized handling for fragile, valuable, or oversized items requiring extra care.",
      features: ["Climate control", "Custom packaging", "White glove service", "High-value insurance"],
      backgroundImage: vanLoadingBoxes,
     gradient: "from-blue-600/90 to-blue-800/90"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "On-Time Delivery",
      description: "99.8% on-time delivery rate with real-time tracking",
      backgroundImage: deliveryVanHighway,
      gradient: "from-blue-500/80 to-blue-700/80"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage for your peace of mind",
      backgroundImage: warehouseInterior,
      gradient: "from-blue-500/80 to-blue-700/80"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Wide Coverage",
      description: "Serving all major cities and towns across the region",
      backgroundImage: truckFleet,
     gradient: "from-blue-500/80 to-blue-700/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Abel Trucking services fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Professional trucking and moving services tailored to your needs. 
            From local deliveries to cross-country freight, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid with Image Backgrounds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img
                    src={service.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-white/30">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-white transition-colors duration-300 text-primary">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                        <span className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image Backgrounds */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose Abel Trucking?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing reliable, professional service that exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img
                    src={item.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                </div>
                
                <div className="relative z-10 text-center p-8 bg-card group-hover:bg-transparent transition-colors duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-white/30">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={truckFleet}
            alt="Abel Trucking ready to serve"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        
      
      </section>
    </div>
  );
};

export default Services;