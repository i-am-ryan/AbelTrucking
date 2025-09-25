import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Truck, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import aboutHero from "@/assets/Image1.jpeg";
import teamWorking from "@/assets/Image2.jpeg";
import warehouseInterior from "@/assets/Image4.jpeg";
import truckFleet from "@/assets/truck-fleet.jpg";
import deliveryVanHighway from "@/assets/delivery-van-highway.jpg";

const About = () => {
  const stats = [
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      number: "500+",
      label: "Successful Deliveries",
      backgroundImage: truckFleet,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "50+",
      label: "Professional Drivers",
      backgroundImage: teamWorking,
       gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      number: "10+",
      label: "Years Experience",
      backgroundImage: deliveryVanHighway,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      number: "24/7",
      label: "Secure Storage",
      backgroundImage: warehouseInterior,
       gradient: "from-blue-600 to-blue-800"
    }
  ];

  const values = [
    {
      title: "Reliability",
      description: "We understand that your cargo is important. That's why we guarantee on-time delivery and safe handling of your goods.",
      backgroundImage: truckFleet,
      gradient: "from-blue-600/80 to-blue-800/80"
    },
    {
      title: "Security",
      description: "Our secure storage facilities and professional handling ensure your items are protected at every stage.",
      backgroundImage: warehouseInterior,
      gradient: "from-blue-600/80 to-blue-800/80"
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology for tracking, routing, and customer communication to provide superior service.",
      backgroundImage: deliveryVanHighway,
      gradient: "from-blue-600/80 to-blue-800/80"
    },
    {
      title: "Sustainability",
      description: "We're committed to reducing our environmental impact through efficient routing and modern, fuel-efficient vehicles.",
      backgroundImage: aboutHero,
     gradient: "from-blue-600/80 to-blue-800/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Abel Trucking semi-truck on the road at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              About Abel Trucking
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Founded on the principles of reliability, professionalism, and customer satisfaction, 
              Abel Trucking has been serving communities with exceptional transport services since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Image Backgrounds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img
                    src={stat.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`} />
                </div>
                
                <CardContent className="relative z-10 pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-white/20">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 group-hover:text-white transition-colors duration-300 text-primary">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Enhanced Layout */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Abel Trucking was founded with a simple mission: to provide reliable, 
                  professional transportation services that businesses and individuals can depend on. 
                  What started as a small local operation has grown into a trusted name in the industry.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the years, we've built our reputation on consistent service, safe handling, 
                  and going the extra mile for our customers. We understand that when you trust us 
                  with your cargo, you're trusting us with your business.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, our modern fleet and experienced team serve customers across the region, 
                  handling everything from local deliveries to cross-country freight with the same 
                  commitment to excellence that has defined us from the beginning.
                </p>
              </div>
            </div>
            <div className="group">
              <img
                src={aboutHero}
                alt="Abel Trucking semi-truck on the road at sunset"
                className="w-full h-80 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 group">
              <img
                src={teamWorking}
                alt="Professional Abel Trucking team working together"
                className="w-full h-80 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  To deliver exceptional transportation services that exceed customer expectations 
                  while maintaining the highest standards of safety, reliability, and professionalism.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the most trusted transportation partner in our region, known for innovation, 
                  reliability, and outstanding customer service.
                </p>
              </div>
            </div>
          </div>

          {/* Facility Showcase */}
          <div className="mt-16 text-center">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
           <img
  src={warehouseInterior}
  alt="Modern Abel Trucking warehouse and logistics facility"
  className="w-full max-w-4xl mx-auto h-96 object-cover object-center transition-transform duration-700 group-hover:scale-110"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Best Services in South Africa</h3>
                  <p className="max-w-md">Modern Trucking services equipped with latest technology</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">State-of-the-Art Facilities</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Our modern warehouse and logistics facilities are equipped with the latest technology 
                to ensure efficient handling, storage, and distribution of your cargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Image Backgrounds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img
                    src={value.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient}`} />
                </div>
                
                <CardContent className="relative z-10 pt-6 p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={truckFleet}
            alt="Abel Trucking fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        
      
       
      </section>
    </div>
  );
};

export default About;