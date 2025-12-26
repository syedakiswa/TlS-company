
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Users, TrendingUp, Shield, Package, MapPin, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Full Truckload (FTL)',
      description: 'Ideal for large shipments requiring the use of an entire truck, offering direct and efficient transportation.',
      features: ['Direct shipment for large cargo', 'Efficient route planning', 'Dedicated truck for single shipper'],
      gradient: 'from-red-600 to-red-700'
    },
    {
      icon: MapPin,
      title: 'Nationwide USA & North America',
      description: 'Access to a wide carrier network enabling freight movement across the country and North America.',
      features: ['Extensive carrier network', 'Cross-country shipping', 'Reliable delivery timelines'],
      gradient: 'from-rose-600 to-pink-600'
    },
    {
      icon: Package,
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective solutions for smaller shipments that do not require a full truck.',
      features: ['Shared truck space with other shipments', 'Reduced shipping costs', 'Flexible scheduling'],
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: Clock,
      title: '24/7 Load Management',
      description: 'Continuous shipment monitoring and support throughout the transportation process.',
      features: ['Real-time shipment tracking', 'Constant support and updates', 'Issue resolution anytime'],
      gradient: 'from-rose-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Fast Load Matching',
      description: 'Quickly matching freight with available and verified carriers.',
      features: ['Quick matching system', 'Verified carriers only', 'Optimized routing'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Shield,
      title: 'Verified Carriers',
      description: 'Working only with carriers that meet compliance and safety requirements.',
      features: ['Background and compliance checks', 'Safety assured shipments', 'Reliable carrier partners'],
      gradient: 'from-red-700 to-red-800'
    },
    {
      icon: Users,
      title: 'Freight Brokerage',
      description: 'Professional brokerage services connecting shippers with reliable and compliant carriers for efficient transportation.',
      features: ['Expert brokerage guidance', 'Efficient shipment coordination', 'Trusted carrier connections'],
      gradient: 'from-rose-500 to-red-600'
    },
  ];

  const additionalServices = [
    { icon: Package, title: 'Specialized Freight', description: 'Handling of oversized, hazardous, or temperature-controlled shipments.', gradient: 'from-red-600 to-rose-600' },
    { icon: MapPin, title: 'Cross-Border Shipping', description: 'Seamless transportation between US, Canada, and Mexico.', gradient: 'from-rose-500 to-red-600' },
    { icon: Clock, title: 'Expedited Services', description: 'Time-critical shipping with guaranteed delivery windows.', gradient: 'from-red-500 to-rose-500' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-rose-900 to-red-800 py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white border border-white/30">
            <Star className="h-4 w-4 text-white" /> Trusted Logistics Partner
          </span>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Reliable Logistics Solutions
          </h1>

          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Connecting shippers with verified carriers across the USA & North America. Efficient, safe, and transparent freight management for your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { icon: Truck, title: 'FTL/LTL' },
              { icon: Clock, title: '24/7 Support' },
              { icon: Shield, title: 'Verified Carriers' }
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center w-40 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center mb-2 shadow-md">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-white font-semibold text-center">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 border-0 shadow-xl text-white group">
              <Link to='/quote'>Get Started</Link>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20">
              <Link to='/contact'>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
 {/* Main Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid gap-8 lg:gap-12">
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
      </section>
      {/* Additional Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-900 to-rose-900">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-wrap gap-6 justify-center">
          {additionalServices.map((service) => (
            <Card key={service.title} className="flex flex-col items-start w-72 p-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <div className={`flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md mb-3`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-white">{service.title}</CardTitle>
              <CardDescription className="text-sm text-white/80 mt-1">{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Choose Our Services</h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over a decade of experience in the freight brokerage industry, we've built a reputation for reliability, efficiency, and exceptional customer service.
              </p>
              <p>
                Our extensive carrier network spans across the United States and North America, ensuring we can handle any shipping requirement, no matter how complex or urgent.
              </p>
              <p>
                We leverage cutting-edge technology combined with personal attention to provide you with the best possible logistics solutions at competitive rates.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 border-0 shadow-xl text-white group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-3xl blur-2xl"></div>
            <img
              src="/pack.webp"
              alt="Logistics operations"
              className="relative h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-rose-700 to-red-800 py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us handle your logistics needs with professional care and efficiency. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 shadow-xl group">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
