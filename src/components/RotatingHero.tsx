import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock, Warehouse, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import hero images
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const RotatingHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: hero1,
      alt: "Abel Trucking delivery van in Randburg",
      title: "Local Randburg Delivery",
      subtitle: "Your trusted 4 Ways neighbor for all transport needs"
    },
    {
      src: hero2,
      alt: "Long distance trucking from Johannesburg",
      title: "Gauteng to Anywhere",
      subtitle: "Professional freight services across South Africa"
    },
    {
      src: hero3,
      alt: "Abel Trucking depot in 4 Ways Randburg",
      title: "Based in 4 Ways Randburg", 
      subtitle: "Local business serving Gauteng and beyond since 2014"
    },
    {
      src: hero4,
      alt: "House removal services in Randburg area",
      title: "House Removals & Storage",
      subtitle: "Careful handling of your belongings with secure storage options"
    }
  ];

  // Rotate images every 6 seconds (slightly slower feels more natural)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentImageIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-start h-full">
        <div className="text-left text-white max-w-4xl mx-auto px-4 sm:px-8">
          {/* Main Logo/Brand */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            ABEL TRUCKING
          </h1>
          
          <div className="text-lg md:text-xl mb-2 text-yellow-400 font-medium">
            {currentImage.title}
          </div>
          
          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl">
            {currentImage.subtitle}
          </p>

          {/* Contact Info */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-semibold">081 591 8610</span>
            </div>
            <p className="text-white/80">4 Ways Randburg • abeltrucksandjobbing@gmail.com</p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>Local Randburg Business</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Warehouse className="h-4 w-4 text-blue-400" />
              <span>Storage Available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:0815918610">
              <Button 
                size="lg" 
                variant="default"
                className="px-8 py-3 text-lg font-semibold group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
            <Link to="/quote">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-3 text-lg group"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

{/* Image Indicators */}
      <div className="absolute bottom-8 left-8 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-yellow-400 w-8"
                : "bg-white/40 hover:bg-white/70"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

     
    </section>
  );
};

export default RotatingHero;