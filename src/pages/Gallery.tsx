import { useState } from 'react';
import { Filter, Grid, List, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { galleryImages } from '@/data/mockData';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', 'Music', 'Art', 'Drama'];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.alt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/400?random=gallery" 
            alt="ArtVibe Studios Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-200">
            Celebrating the creativity and achievements of our students
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
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
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="py-16 bg-gradient-to-br from-pastel-pink/10 to-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-navy-900">{filteredImages.length}</span> images
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              <Filter size={16} className="mr-2" />
              Clear Filters
            </Button>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100

 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-sm font-medium line-clamp-2">{image.alt}</p>
                            <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                              {image.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="mt-4">
                        <h3 className="text-xl font-semibold text-navy-900 mb-2">{image.alt}</h3>
                        <Badge variant="outline" className="border-gold-600 text-gold-600">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                              {image.alt}
                            </h3>
                            <Badge variant="outline" className="border-gold-600 text-gold-600 mb-4">
                              {image.category}
                            </Badge>
                            <p className="text-gray-600">
                              Click to view full image and details about this amazing work from our talented students.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="mt-4">
                        <h3 className="text-xl font-semibold text-navy-900 mb-2">{image.alt}</h3>
                        <Badge variant="outline" className="border-gold-600 text-gold-600">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No images found matching your criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">Explore highlights from our recent events and showcases</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://picsum.photos/400/300?random=collection1" 
                  alt="Summer Showcase 2024"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Summer Showcase 2024</h3>
                  <p className="text-sm opacity-90">24 photos</p>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://picsum.photos/400/300?random=collection2" 
                  alt="Student Art Exhibition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Student Art Exhibition</h3>
                  <p className="text-sm opacity-90">36 photos</p>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://picsum.photos/400/300?random=collection3" 
                  alt="Musical Theatre Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Musical Theatre Production</h3>
                  <p className="text-sm opacity-90">18 photos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
}