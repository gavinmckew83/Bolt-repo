"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Revolutionize Your Business with AI';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Bourdain AI delivers cutting-edge automation solutions to streamline your operations and boost productivity.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;