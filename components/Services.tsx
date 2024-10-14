"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brain, Cog, BarChart } from 'lucide-react';

const services = [
  {
    title: 'AI-Powered Analytics',
    description: 'Harness the power of machine learning to gain actionable insights from your data.',
    icon: Brain,
  },
  {
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation solutions.',
    icon: Cog,
  },
  {
    title: 'Predictive Modeling',
    description: 'Forecast trends and make data-driven decisions with our advanced predictive models.',
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 mb-4 text-primary">
                  {service.icon && <service.icon size={48} />}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add more details or a link here if needed */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}