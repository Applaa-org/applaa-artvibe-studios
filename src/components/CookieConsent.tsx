import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy-900 text-white p-6 z-50 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Cookie className="text-gold-500 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Cookie Notice</h3>
              <p className="text-sm text-gray-300">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                By continuing to use our site, you agree to our use of cookies in accordance with our 
                <a href="/privacy" className="text-gold-500 hover:text-gold-400 underline ml-1">Privacy Policy</a>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={acceptEssential}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Essential Only
            </Button>
            <Button 
              size="sm"
              onClick={acceptAll}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              Accept All
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white ml-2"
            >
              <X size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}