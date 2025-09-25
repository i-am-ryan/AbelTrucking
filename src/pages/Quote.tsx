import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Package, Calendar, DollarSign, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Quote = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    fromAddress: "",
    toAddress: "",
    date: "",
    timeWindow: "",
    packageSize: "",
    weight: "",
    specialItems: [],
    additionalServices: [],
    contactName: "",
    phone: "",
    email: "",
    notes: ""
  });

 const serviceTypes = [
  { id: "local", label: "Local Delivery", description: "Within city limits" },
  { id: "longDistance", label: "Long Distance", description: "Cross-country freight" },
  { id: "houseRemoval", label: "House Removal", description: "Residential moving" },
  { id: "commercial", label: "Commercial", description: "Business transportation" },
  { id: "storage", label: "Storage Solutions", description: "Secure storage services" }
];

  const packageSizes = [
    { value: "small", label: "Small (Under 1mÂ³)" },
    { value: "medium", label: "Medium (1-5mÂ³)" },
    { value: "large", label: "Large (5-15mÂ³)" },
    { value: "extraLarge", label: "Extra Large (15mÂ³+)" }
  ];

  const specialItems = [
    { id: "fragile", label: "Fragile Items" },
    { id: "electronics", label: "Electronics" },
    { id: "antiques", label: "Antiques/Valuables" },
    { id: "plants", label: "Plants" },
    { id: "hazardous", label: "Hazardous Materials" }
  ];

  const additionalServices = [
    { id: "packing", label: "Professional Packing" },
    { id: "unpacking", label: "Unpacking Service" },
    { id: "storage", label: "Temporary Storage" },
    { id: "insurance", label: "Additional Insurance" },
    { id: "weekend", label: "Weekend/Holiday Service" }
  ];

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!formData.contactName || !formData.phone || !formData.email) {
      alert("Please fill in all required contact fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.contactName,
        from_email: formData.email,
        from_phone: formData.phone,
        service_type: serviceTypes.find(s => s.id === formData.serviceType)?.label || 'Not selected',
        pickup_address: formData.fromAddress,
        delivery_address: formData.toAddress,
        preferred_date: formData.date,
        time_window: formData.timeWindow || 'Not specified',
        package_size: packageSizes.find(s => s.value === formData.packageSize)?.label || 'Not selected',
        weight: formData.weight ? `${formData.weight}kg` : 'Not specified',
        special_items: formData.specialItems.length > 0 
          ? formData.specialItems.map(id => specialItems.find(item => item.id === id)?.label).join(', ')
          : 'None',
        additional_services: formData.additionalServices.length > 0 
          ? formData.additionalServices.map(id => additionalServices.find(service => service.id === id)?.label).join(', ')
          : 'None',
        notes: formData.notes || 'No additional notes',
        submission_date: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        'service_2zxehbw',
        'template_yzi4gii', 
        templateParams,
        'ii2lE6yDqcr6yEM3E'
      );

      if (result.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting quote request. Please call 081 591 8610.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-white/90">
            Tell us about your transportation needs and we'll provide a detailed quote
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div
                  className={`h-1 w-16 md:w-32 mx-2 ${
                    step > stepNumber ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step === 1 && <><Package className="h-5 w-5" /> Service Details</>}
              {step === 2 && <><MapPin className="h-5 w-5" /> Pickup & Delivery</>}
              {step === 3 && <><Calendar className="h-5 w-5" /> Schedule & Extras</>}
              {step === 4 && <><DollarSign className="h-5 w-5" /> Contact Information</>}
            </CardTitle>
            <CardDescription>
              {step === 1 && "What type of service do you need?"}
              {step === 2 && "Where are we picking up and delivering?"}
              {step === 3 && "When do you need this service?"}
              {step === 4 && "Contact details to send you the quote"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Step 1: Service Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-4 block">Select Service Type</Label>
                  <RadioGroup
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({...formData, serviceType: value})}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {serviceTypes.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value={service.id} id={service.id} />
                        <div className="flex-1">
                          <Label htmlFor={service.id} className="font-medium">{service.label}</Label>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="packageSize" className="text-base font-semibold">Package Size</Label>
                  <Select value={formData.packageSize} onValueChange={(value) => setFormData({...formData, packageSize: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select package size" />
                    </SelectTrigger>
                    <SelectContent>
                      {packageSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="weight" className="text-base font-semibold">Estimated Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter weight in kg"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Addresses */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fromAddress" className="text-base font-semibold">Pickup Address</Label>
                  <Textarea
                    id="fromAddress"
                    placeholder="Enter full pickup address including postcode"
                    value={formData.fromAddress}
                    onChange={(e) => setFormData({...formData, fromAddress: e.target.value})}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="toAddress" className="text-base font-semibold">Delivery Address</Label>
                  <Textarea
                    id="toAddress"
                    placeholder="Enter full delivery address including postcode"
                    value={formData.toAddress}
                    onChange={(e) => setFormData({...formData, toAddress: e.target.value})}
                    rows={3}
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Special Items (Check all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {specialItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item.id}
                          checked={formData.specialItems.includes(item.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({...formData, specialItems: [...formData.specialItems, item.id]});
                            } else {
                              setFormData({...formData, specialItems: formData.specialItems.filter(i => i !== item.id)});
                            }
                          }}
                        />
                        <Label htmlFor={item.id}>{item.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="date" className="text-base font-semibold">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="timeWindow" className="text-base font-semibold">Time Window</Label>
                  <Select value={formData.timeWindow} onValueChange={(value) => setFormData({...formData, timeWindow: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time window" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Additional Services</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {additionalServices.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service.id}
                          checked={formData.additionalServices.includes(service.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({...formData, additionalServices: [...formData.additionalServices, service.id]});
                            } else {
                              setFormData({...formData, additionalServices: formData.additionalServices.filter(i => i !== service.id)});
                            }
                          }}
                        />
                        <Label htmlFor={service.id}>{service.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-base font-semibold">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requirements or additional information"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName" className="text-base font-semibold">Full Name</Label>
                    <Input
                      id="contactName"
                      placeholder="Your full name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !formData.serviceType) ||
                    (step === 2 && (!formData.fromAddress || !formData.toAddress)) ||
                    (step === 3 && !formData.date)
                  }
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.contactName || !formData.phone || !formData.email || isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? "Sending..." : "Submit Quote Request"}
                </Button>
              )}
            </div>
          </CardContent>

          {isSubmitted && (
            <div className="p-6 text-center bg-green-50 border-t">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-700 mb-2">Quote Request Sent!</h3>
              <p className="text-green-600">We'll contact you within 24 hours with your personalized quote.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Quote;