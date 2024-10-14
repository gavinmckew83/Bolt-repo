"use client"

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bourdain AI</h3>
            <p className="text-muted-foreground">Innovative AI and automation solutions for modern businesses.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">123 AI Street, Tech City, 12345</p>
            <p className="text-muted-foreground">contact@bourdainai.com</p>
            <p className="text-muted-foreground">+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2023 Bourdain AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;