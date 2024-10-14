"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const FreeGuide = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual form submission logic here
    toast.success('Thank you! Your free guide has been sent to your email.');
    setEmail('');
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Get Your Free AI Automation Guide</CardTitle>
          <CardDescription>
            Discover how AI can transform your business operations and boost productivity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Get My Free Guide</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeGuide;