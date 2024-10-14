"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual login logic here
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Client Portal Login</CardTitle>
            <CardDescription>Enter your credentials to access your personalized dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" className="w-full">Log In</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Client Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Current progress of your ongoing projects.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add project status information here */}
            <p>Project A: 75% complete</p>
            <p>Project B: 30% complete</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Latest changes and notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add recent updates here */}
            <p>New feature added to Project A</p>
            <p>Scheduled maintenance for Project B</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientPortal;