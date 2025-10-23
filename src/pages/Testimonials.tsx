import { useState } from 'react';
import { Star, Quote, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { testimonials } from '@/data/mockData';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Testimonials() {
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const roles = ['all', 'Student', 'Parent', 'Adult Student'];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesRole = selectedRole === 'all' || testimonial.role === selectedRole;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/400?random=testimonials" 
            alt="Student Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Student Testimonials</h1>
          <p className="text-xl text-gray-200">
            Hear what our students and parents have to say about their experience
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">{testimonials.length}</p>
              <p className="text-gold-100">Reviews</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</p>
              <p className="text-gold-100">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-gold-100">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-gold-100">Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map(role => (
                  <SelectItem key={role} value={role}>
                    {role === 'all' ? 'All Roles' : role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedRole('all');
              }}
            >
              <Filter size={16} className="mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gradient-to-br from-pastel-pink/10 to-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-navy-900">{filteredTestimonials.length}</span> testimonials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-navy-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="text-gold-500 opacity-50" size={24} />
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold-500 fill-current" size={16} />
                    ))}
                  </div>

                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge variant="secondary" className="text-xs">
                      Verified Review
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No testimonials found matching your criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedRole('all');
              }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Featured Success Story</h2>
            <p className="text-xl text-gray-600">An inspiring journey of creative growth</p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-navy-900 to-navy-800 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src="https://picsum.photos/200/200?random=featured" 
                  alt="Featured student"
                  className="w-32 h-32 rounded-full border-4 border-gold-500"
                />
                <div className="flex-1 text-center md:text-left">
                  <Quote className="text-gold-500 mb-4" size={48} />
                  <p className="text-xl md:text-2xl mb-6 leading-relaxed">
                    "ArtVibe Studios transformed my life. I came in as a shy beginner and now I'm performing on stage regularly. The support and expertise here is unmatched - they don't just teach skills, they build confidence and passion."
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-gold-500">Alexandra Chen</h3>
                    <p className="text-gray-300">Musical Theatre Student • 3 Years</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-gold-500 fill-current" size={20} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you studied with us? We'd love to hear about your journey and share your story with others.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-gold-600 hover:bg-gray-100">
            Leave a Review
          </Button>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}