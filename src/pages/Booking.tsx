import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { courses } from '@/data/mockData';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    preferredSchedule: '',
    message: '',
    agreeTerms: false,
    newsletter: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Enrollment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in ArtVibe Studios. We'll contact you within 24 hours to confirm your enrollment and schedule your first class.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              Submit Another Enrollment
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
            src="https://picsum.photos/1920/400?random=booking" 
            alt="Enroll at ArtVibe Studios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Enroll Now</h1>
          <p className="text-xl text-gray-200">
            Start your creative journey with us today
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-br from-pastel-pink/10 to-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-navy-900 to-navy-800 text-white">
                <CardTitle className="text-2xl text-center">Course Enrollment Form</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                      <User className="mr-2" size={20} />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                      <Calendar className="mr-2" size={20} />
                      Course Selection
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="course">Select Course *</Label>
                        <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course.id} value={course.title}>
                                {course.title} - {course.category} - {course.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Experience Level *</Label>
                        <RadioGroup
                          value={formData.experience}
                          onValueChange={(value) => handleInputChange('experience', value)}
                          className="flex flex-wrap gap-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="beginner" id="beginner" />
                            <Label htmlFor="beginner">Beginner</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="intermediate" id="intermediate" />
                            <Label htmlFor="intermediate">Intermediate</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="advanced" id="advanced" />
                            <Label htmlFor="advanced">Advanced</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Schedule Preferences */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                      <Clock className="mr-2" size={20} />
                      Schedule Preferences
                    </h3>
                    <div>
                      <Label htmlFor="schedule">Preferred Schedule *</Label>
                      <Select value={formData.preferredSchedule} onValueChange={(value) => handleInputChange('preferredSchedule', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday-morning">Weekday Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="weekday-afternoon">Weekday Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="weekday-evening">Weekday Evening (5PM - 9PM)</SelectItem>
                          <SelectItem value="saturday">Saturday Morning</SelectItem>
                          <SelectItem value="sunday">Sunday Morning</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                      <MessageSquare className="mr-2" size={20} />
                      Additional Information
                    </h3>
                    <div>
                      <Label htmlFor="message">Tell us about your goals or any questions</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="What do you hope to achieve? Any specific goals or questions?"
                        className="mt-2"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Terms and Newsletter */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and privacy policy. I understand that my personal data will be processed in accordance with GDPR regulations. *
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        I would like to receive updates about new courses, events, and special offers from ArtVibe Studios.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
                      disabled={!formData.agreeTerms}
                    >
                      Submit Enrollment
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-2">
                      We'll contact you within 24 hours to confirm your enrollment
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Information Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-gold-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-gray-600">
                    Choose from weekday, evening, or weekend classes to fit your schedule
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="text-gold-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Expert Instructors</h3>
                  <p className="text-sm text-gray-600">
                    Learn from industry professionals with years of teaching experience
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-gold-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Trial Classes Available</h3>
                  <p className="text-sm text-gray-600">
                    Try a class before committing - we want you to find the perfect fit
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}