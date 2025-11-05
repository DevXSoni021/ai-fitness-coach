'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Quote } from 'lucide-react';

export default function MotivationalQuote() {
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/motivational-quote');
      const data = await response.json();
      
      if (data.success) {
        setQuote(data.quote);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Every workout brings you closer to your goals. Stay consistent, stay strong!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-primary">Daily Motivation</h3>
            </div>
            
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg italic text-foreground/90 leading-relaxed">
                "{quote}"
              </p>
            </motion.div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchQuote}
            disabled={isLoading}
            className="flex-shrink-0"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
