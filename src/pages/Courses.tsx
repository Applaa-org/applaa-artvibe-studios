import { useState } from 'react';
import { Filter, Search, Clock, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { courses } from '@/data/mockData';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = ['all', 'Music', 'Art', 'Drama'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced', 'All levels'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/400?random=courses" 
            alt="Courses at ArtVibe Studios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-gray-200">
            Discover the perfect course to unleash your creative potential
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
            >
              <Filter size={16} className="mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gradient-to-br from-pastel-pink/10 to-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-navy-900">{filteredCourses.length}</span> courses
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Grid View</Button>
              <Button variant="ghost" size="sm">List View</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-gold-600 hover:bg-gold-700">
                    {course.category}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center text-gold-600">
                      <Star size={16} className="fill-current" />
                      <span className="text-sm ml-1">4.8</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-2" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gold-600">{course.price}</span>
                    <Badge variant="secondary" className="text-xs">
                      {course.features.length} Features
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full border-gold-600 text-gold-600 hover:bg-gold-50">
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No courses found matching your criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Course Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect creative path for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Music</h3>
                <p className="text-gray-600 mb-4">
                  Piano, Guitar, Vocals, Composition, and more
                </p>
                <p className="text-sm text-gray-500 mb-4">3 courses available</p>
                <Button variant="outline" className="border-gold-600 text-gold-600 hover:bg-gold-50">
                  Explore Music
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pastel-blue to-pastel-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Art</h3>
                <p className="text-gray-600 mb-4">
                  Painting, Drawing, Digital Art, Sculpture
                </p>
                <p className="text-sm text-gray-500 mb-4">3 courses available</p>
                <Button variant="outline" className="border-gold-600 text-gold-600 hover:bg-gold-50">
                  Explore Art
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pastel-yellow to-pastel-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎭</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Drama</h3>
                <p className="text-gray-600 mb-4">
                  Acting, Musical Theatre, Performance Skills
                </p>
                <p className="text-sm text-gray-500 mb-4">2 courses available</p>
                <Button variant="outline" className="border-gold-600 text-gold-600 hover:bg-gold-50">
                  Explore Drama
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}