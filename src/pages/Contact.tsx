import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

// Import hero image for contact page
import contactHero from "@/assets/Image2.jpeg";
import warehouseImage from "@/assets/warehouse-interior.jpg";
import truckFleetImage from "@/assets/truck-fleet.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
     icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      details: ["081 591 8610", "Available 24/7"],
      description: "Call us anytime for immediate assistance",
      backgroundImage: "@/assets/delivery-van-highway.jpg"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      details: ["abeltrucksandjobbing@gmail.com", "info@abeltrucks.co.za"],
      description: "Email us for quotes and general inquiries",
      backgroundImage: "@/assets/team-working.jpg"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Address",
      details: ["4 Ways Randburg", "Randburg, Gauteng"],
      description: "Visit our main depot and office",
      backgroundImage: "@/assets/warehouse-interior.jpg"
    },
    {
 icon: <Clock className="h-6 w-6 text-white" />,
      title: "Business Hours",
      details: ["Mon-Fri: 6:00 AM - 10:00 PM", "Sat-Sun: 8:00 AM - 6:00 PM"],
      description: "Emergency services available 24/7",
      backgroundImage: "@/assets/semi-truck-sunset.jpg"
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Request Quote",
    "Track Shipment",
    "Storage Solutions",
    "Customer Support",
    "Partnership Opportunity",
    "Complaint/Feedback"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.phone || !formData.message) {
      alert("Please fill in your name, phone number, and message.");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hello Abel Trucking! 

*New Contact Form Inquiry*

*Name:* ${formData.firstName} ${formData.lastName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Inquiry Type:* ${formData.inquiryType || 'General Inquiry'}
*Subject:* ${formData.subject || 'Contact Form Inquiry'}

*Message:*
${formData.message}

Please get back to me when convenient. Thank you!`;

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/27815918610?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
     <section className="relative pt-24 pb-24 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Abel Trucking customer service team"
            className="w-full h-full object-cover"
          />
         <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/30" />
        </div>
        
        {/* Content */}
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center h-full">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
    Contact Us
  </h1>
  <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
    Ready to move your world? Get in touch with Abel Trucking - your trusted transport partner in Randburg and beyond.
  </p>
</div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </CardTitle>
                  <CardDescription className="text-center group-hover:text-foreground transition-colors duration-300">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden">
              {/* Form Header with Background */}
              <div className="relative">
                <div className="absolute inset-0">
                  <img
                    src={warehouseImage}
                    alt="Abel Trucking warehouse"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
                </div>
                <CardHeader className="relative z-10 text-center py-16">
                  <CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold text-white mb-4">
                    <MessageSquare className="h-8 w-8" />
                    Get Your Free Quote Today
                  </CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Tell us about your transportation needs and we'll provide a detailed quote within 24 hours.
                  </CardDescription>
                </CardHeader>
              </div>

              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <Label htmlFor="firstName" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                        First Name *
                      </Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-2 border-2 focus:border-primary hover:border-primary/50 transition-colors duration-200"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="lastName" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                        Last Name
                      </Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-2 border-2 focus:border-primary hover:border-primary/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <Label htmlFor="email" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                        Email
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2 border-2 focus:border-primary hover:border-primary/50 transition-colors duration-200"
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="phone" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="+27 81 123 4567" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-2 border-2 focus:border-primary hover:border-primary/50 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="group mb-6">
                    <Label htmlFor="inquiryType" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                      Inquiry Type
                    </Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                     <SelectTrigger className="mt-2 border-2 hover:border-primary/50 transition-colors duration-200 focus:ring-primary focus:border-primary">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                     <SelectContent>
  {inquiryTypes.map((type) => (
    <SelectItem 
      key={type} 
      value={type}
      className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white data-[highlighted]:bg-primary data-[highlighted]:text-white"
    >
      {type}
    </SelectItem>
  ))}
</SelectContent>
                    </Select>
                  </div>

                  <div className="group mb-6">
                    <Label htmlFor="subject" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                      Subject
                    </Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="mt-2 border-2 focus:border-primary hover:border-primary/50 transition-colors duration-200"
                    />
                  </div>

                  <div className="group mb-6">
                    <Label htmlFor="message" className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your transportation needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-2 border-2 focus:border-primary hover:border-primary/50 transition-colors duration-200 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                   className="w-full py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-white transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send WhatsApp Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={truckFleetImage}
            alt="Abel Trucking fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        

      </section>
    </div>
  );
};

export default Contact;