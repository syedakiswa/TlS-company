import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Shield, TrendingUp, Truck, Users } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Truck,
      title: 'Extensive Carrier Network',
      description: 'Access to thousands of vetted carriers across North America for reliable shipping solutions.',
    },
    {
      icon: Clock,
      title: 'Fast & Efficient',
      description: 'Quick matching and dispatch services to keep your freight moving on schedule.',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for peace of mind on every shipment.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Rates',
      description: 'Leverage our network to get the best rates without compromising on quality.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Request a Quote',
      description: 'Fill out our simple form with your shipment details.',
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'We find the perfect carrier for your specific needs.',
    },
    {
      number: '03',
      title: 'Track & Deliver',
      description: 'Monitor your shipment in real-time until safe delivery.',
    },
  ];

  const services = [
    {
      title: 'Freight Brokerage',
      description: 'Expert freight brokerage services connecting you with reliable carriers.',
    },
    {
      title: 'Carrier Matching',
      description: 'Intelligent matching system to find the perfect carrier for your load.',
    },
    {
      title: 'Logistics Consulting',
      description: 'Strategic consulting to optimize your supply chain operations.',
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-primary-foreground lg:text-5xl xl:text-6xl">
                Your Trusted Freight Brokerage Partner
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Connecting shippers with reliable carriers across the United States and North America. 
                Fast, efficient, and cost-effective logistics solutions for your business.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/quote">Get a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-full lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                  alt="Freight trucks on highway"
                  className="h-full w-full rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver excellence in every shipment with our proven expertise
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">How We Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple, transparent process from quote to delivery
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
            Ready to Ship with Confidence?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Get a free quote today and experience the difference of working with a trusted freight broker.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
