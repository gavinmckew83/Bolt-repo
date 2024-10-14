"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get your free AI Automation Guide and discover how Bourdain can revolutionize your operations.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/free-guide">Get Your Free Guide</Link>
        </Button>
      </div>
    </section>
  );
}