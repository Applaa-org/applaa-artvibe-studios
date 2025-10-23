import { Link } from '@tanstack/react-router';
import { ArrowRight, Music, Palette, Theater, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { courses, testimonials } from '@/data/mockData';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Index() {
  const featuredCourses = courses.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=hero" 
            alt="Students performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-gold-600 text-white hover:bg-gold-700">
            🎨 Where Creativity Comes to Life
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gold-200 bg-clip-text text-transparent">
            ArtVibe Studios
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Unleash your creative potential with expert-led music, art, and drama classes in the heart of London
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-lg px-8">
              Enroll Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 text-lg px-8">
              <Play className="mr-2" size={20} />
              Watch Tour
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="rotate-90" size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Why Choose ArtVibe Studios?</h2>
            <p className="text-xl text-gray-600">Three disciplines, endless possibilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Music className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Music</h3>
                <p className="text-gray-600 mb-4">
                  From piano to guitar, vocals to composition - discover your musical voice
                </p>
                <Link to="/courses" className="text-gold-600 hover:text-gold-700 font-medium">
                  Explore Music Courses →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-blue to-pastel-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Art</h3>
                <p className="text-gray-600 mb-4">
                  Painting, drawing, digital art, and sculpture - express yourself visually
                </p>
                <Link to="/courses" className="text-gold-600 hover:text-gold-700 font-medium">
                  Explore Art Courses →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-yellow to-pastel-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Theater className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Drama</h3>
                <p className="text-gray-600 mb-4">
                  Acting, musical theatre, and performance skills - shine on stage
                </p>
                <Link to="/courses" className="text-gold-600 hover:text-gold-700 font-medium">
                  Explore Drama Courses →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">Start your creative journey today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-gold-600">
                    {course.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gold-600 font-bold">{course.price}</span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-300">Real stories from creative minds like yours</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Creative Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have discovered their passion at ArtVibe Studios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="bg-white text-gold-600 hover:bg-gray-100 text-lg px-8">
                Book a Trial Class
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold-600 text-lg px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}