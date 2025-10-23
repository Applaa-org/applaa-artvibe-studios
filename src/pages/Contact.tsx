import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { openingHours } from '@/data/mockData';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const todayHours = openingHours[currentDay as keyof typeof openingHours];
    if (!todayHours?.isOpen) return { isOpen: false, status: "Closed" };
    
    const [openHour, openMin] = todayHours.open.split(':').map(Number);
    const [closeHour, closeMin] = todayHours.close.split(':').map(Number);
    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;
    
    const isOpen = currentTime >= openTime && currentTime <= closeTime;
    return { isOpen, status: isOpen ? "Open Now" : "Closed" };
  };

  const { isOpen, status } = getCurrentStatus();

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting ArtVibe Studios. We'll get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/400?random=contact" 
            alt="Contact ArtVibe Studios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Get in touch and start your creative journey today
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
               <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-gold-600" size={24} />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  123 Creative Lane<br />
                  Covent Garden<br />
                  London, WC2E 8HD<br />
                  United Kingdom
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-gold-600" size={24} />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +44 20 7123 4567<br />
                  Mon-Fri: 9AM-9PM<br />
                  Sat: 10AM-4PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-gold-600" size={24} />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  info@artvibestudios.co.uk<br />
                  admissions@artvibestudios.co.uk<br />
                  support@artvibestudios.co.uk
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-gold-600" size={24} />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Hours</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Mon-Thu: 9AM-9PM<br />
                  Fri: 9AM-6PM<br />
                  Sat: 10AM-4PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-navy-900 to-navy-800 text-white">
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="enrollment">Course Enrollment</SelectItem>
                          <SelectItem value="trial">Book a Trial Class</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400 mt-2">123 Creative Lane, London</p>
                  </div>
                </div>
                <div className="p-6 bg-navy-900 text-white">
                  <h3 className="font-semibold mb-3">Getting Here</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Nearest Tube:</strong> Covent Garden (Piccadilly Line) - 3 min walk</p>
                    <p><strong>Bus Routes:</strong> 6, 9, 11, 13, 15, 23, 87, 139, 176</p>
                    <p><strong>Parking:</strong> NCP Covent Garden (5 min walk)</p>
                    <p><strong>Accessibility:</strong> Full wheelchair access available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-gradient-to-br from-pastel-pink/10 to-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Opening Hours</h2>
            <p className="text-xl text-gray-600">Find the perfect time to visit or schedule your classes</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {Object.entries(openingHours).map(([day, hours]) => {
                    const dayName = day.charAt(0).toUpperCase() + day.slice(1);
                    const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
                    const isToday = day === currentDayName;
                    
                    return (
                      <div key={day} className={`flex items-center justify-between p-4 rounded-lg ${isToday ? 'bg-gold-50 border border-gold-200' : 'bg-gray-50'}`}>
                        <div className="flex items-center">
                          <span className={`font-semibold ${isToday ? 'text-gold-700' : 'text-navy-900'}`}>
                            {dayName}
                          </span>
                          {isToday && (
                            <span className="ml-3 px-2 py-1 bg-gold-600 text-white text-xs rounded-full">
                              Today
                            </span>
                          )}
                        </div>
                        <span className={`${isToday ? 'text-gold-700 font-medium' : 'text-gray-600'}`}>
                          {hours.isOpen ? `${hours.open} - ${hours.close}` : 'Closed'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Holiday schedules may vary. Please check our announcements or call ahead during holiday periods.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Follow Our Creative Journey</h2>
            <p className="text-xl text-gray-300">Stay connected with our community and latest updates</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Facebook size={24} className="mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Twitter size={24} className="mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Instagram size={24} className="mr-2" />
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Youtube size={24} className="mr-2" />
              YouTube
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gold-500">10K+</h3>
              <p className="text-gray-300">Facebook Followers</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gold-500">15K+</h3>
              <p className="text-gray-300">Instagram Followers</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gold-500">5K+</h3>
              <p className="text-gray-300">YouTube Subscribers</p>
            </div>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}