import { Award, Users, Heart, Target, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function About() {
  const stats = [
    { label: "Students Enrolled", value: "500+", icon: Users },
    { label: "Expert Instructors", value: "25+", icon: Award },
    { label: "Years of Excellence", value: "15+", icon: Calendar },
    { label: "Student Success Rate", value: "98%", icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven Learning",
      description: "We believe that true creativity flourishes when students are genuinely passionate about what they're learning."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a supportive community where students encourage and inspire each other to reach new heights."
    },
    {
      icon: Award,
      title: "Excellence in Teaching",
      description: "Our instructors are not just teachers - they're industry professionals dedicated to nurturing talent."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/600?random=about" 
            alt="About ArtVibe Studios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About ArtVibe Studios</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Where creativity meets excellence in the heart of London's artistic community
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold-600 text-white">Our Story</Badge>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Nurturing Creative Excellence Since 2009
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ArtVibe Studios began as a small music school with a big dream: to create a space where creativity could flourish without boundaries. Founded by renowned musician and educator Sarah Mitchell, our studio has grown into London's premier destination for artistic education.
                </p>
                <p>
                  What started with just three piano students has evolved into a comprehensive creative academy offering world-class instruction in music, art, and drama. Our journey has been marked by countless student successes, from West End debuts to gallery exhibitions and chart-topping compositions.
                </p>
                <p>
                  Today, we continue to uphold our founding principles: excellence in teaching, personalized attention, and unwavering support for every student's creative journey. Our state-of-the-art facilities in the heart of London provide the perfect environment for artistic growth and expression.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/600/400?random=story" 
                alt="ArtVibe Studios history"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">15+ Years</p>
                <p className="text-sm">of Creative Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600">Guiding principles that shape everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 bg-white/80 backdrop-blur">
              <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional artistic education that inspires creativity, builds confidence, and empowers students to achieve their full potential. We strive to create a nurturing environment where every individual can discover and develop their unique artistic voice.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white/80 backdrop-blur">
              <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading creative arts academy in the UK, recognized for our innovative teaching methods, outstanding student achievements, and commitment to making arts education accessible to all. We envision a world where creativity is celebrated as essential to human expression and development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <p className="text-4xl font-bold text-gold-500 mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our teaching philosophy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold-600 text-white">Teaching Philosophy</Badge>
              <h2 className="text-4xl font-bold mb-6">How We Teach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">Personalized Learning</h3>
                  <p className="text-gray-300">
                    Every student is unique, and so is their learning journey. We tailor our teaching methods to individual learning styles, goals, and pace.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">Performance-Based Learning</h3>
                  <p className="text-gray-300">
                    Regular performances, exhibitions, and showcases help students build confidence and apply their skills in real-world contexts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">Holistic Development</h3>
                  <p className="text-gray-300">
                    We focus not just on technical skills, but on creativity, critical thinking, collaboration, and emotional intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/300/200?random=teach1" 
                alt="Teaching session"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://picsum.photos/300/200?random=teach2" 
                alt="Student performance"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://picsum.photos/300/200?random=teach3" 
                alt="Art class"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://picsum.photos/300/200?random=teach4" 
                alt="Music lesson"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Visit Our Studio</h2>
            <p className="text-xl text-gray-600">Experience creativity in the heart of London</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="text-gold-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Our Location</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  123 Creative Lane<br />
                  Covent Garden<br />
                  London, WC2E 8HD<br />
                  United Kingdom
                </p>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong>Nearest Tube:</strong> Covent Garden (Piccadilly Line)
                  </p>
                  <p className="text-gray-300">
                    <strong>Bus Routes:</strong> 6, 9, 11, 13, 15, 23, 87, 139, 176
                  </p>
                  <p className="text-gray-300">
                    <strong>Parking:</strong> Limited street parking and nearby NCP car parks
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map</p>
            </div>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}