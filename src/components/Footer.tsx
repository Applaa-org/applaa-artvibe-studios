import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Booking', href: '/booking' }
  ];

  const courses = [
    'Piano Lessons',
    'Vocal Training',
    'Painting & Drawing',
    'Acting Classes',
    'Guitar Lessons',
    'Musical Theatre'
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-navy-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Creative with Us</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new courses, events, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-navy-800 border-navy-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AV</span>
              </div>
              <div>
                <span className="text-xl font-bold">ArtVibe</span>
                <span className="text-sm text-gold-500 block">Studios</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Where creativity meets excellence in the heart of London. nurturing artistic talent since 2009.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Popular Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-gray-300 hover:text-gold-500 transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mr-3 mt-1" size={16} />
                <span className="text-gray-300 text-sm">
                  123 Creative Lane<br />
                  Covent Garden<br />
                  London, WC2E 8HD
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gold-500 mr-3" size={16} />
                <span className="text-gray-300 text-sm">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-gold-500 mr-3" size={16} />
                <span className="text-gray-300 text-sm">info@artvibestudios.co.uk</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} ArtVibe Studios. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  GDPR Compliant
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  Safe for Children
                </Badge>
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}