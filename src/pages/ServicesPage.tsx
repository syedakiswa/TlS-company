import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Truck, Users, TrendingUp, Shield, Package, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Freight Brokerage',
      description: 'Comprehensive freight brokerage services connecting shippers with reliable carriers across North America.',
      features: [
        'Full Truckload (FTL) services',
        'Less Than Truckload (LTL) options',
        'Expedited shipping available',
        'Specialized equipment matching',
      ],
    },
    {
      icon: Users,
      title: 'Carrier Matching',
      description: 'Intelligent carrier matching system to find the perfect transportation partner for your specific needs.',
      features: [
        'Vetted carrier network',
        'Real-time availability checking',
        'Best rate negotiations',
        'Performance tracking',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Logistics Consulting',
      description: 'Strategic logistics consulting to optimize your supply chain and reduce transportation costs.',
      features: [
        'Supply chain analysis',
        'Route optimization',
        'Cost reduction strategies',
        'Process improvement',
      ],
    },
    {
      icon: Shield,
      title: 'Tracking & Insurance',
      description: 'Comprehensive tracking and insurance services for complete peace of mind on every shipment.',
      features: [
        'Real-time GPS tracking',
        'Full cargo insurance',
        '24/7 monitoring',
        'Proactive issue resolution',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Package,
      title: 'Specialized Freight',
      description: 'Handling of oversized, hazardous, or temperature-controlled shipments.',
    },
    {
      icon: MapPin,
      title: 'Cross-Border Shipping',
      description: 'Seamless transportation between US, Canada, and Mexico.',
    },
    {
      icon: Clock,
      title: 'Expedited Services',
      description: 'Time-critical shipping with guaranteed delivery windows.',
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground lg:text-5xl">Our Services</h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={service.title} className="border-border">
                <div className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <CardHeader className="lg:py-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent">
                      <service.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="lg:py-8">
                    <h4 className="mb-4 font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Additional Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Specialized solutions for unique shipping requirements
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {additionalServices.map((service) => (
              <Card key={service.title} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Why Choose Our Services</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  With over a decade of experience in the freight brokerage industry, we've built 
                  a reputation for reliability, efficiency, and exceptional customer service.
                </p>
                <p>
                  Our extensive carrier network spans across the United States and North America, 
                  ensuring we can handle any shipping requirement, no matter how complex or urgent.
                </p>
                <p>
                  We leverage cutting-edge technology combined with personal attention to provide 
                  you with the best possible logistics solutions at competitive rates.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/quote">Get Started Today</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop"
                alt="Logistics operations"
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Contact us today to discuss how our services can benefit your business.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Request a Quote</Link>
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
