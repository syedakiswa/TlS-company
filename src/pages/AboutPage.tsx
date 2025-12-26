import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in every interaction.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in service delivery.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients and carriers.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously improve our processes and technology.',
    },
  ];

  const team = [
    {
      name: 'John Anderson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Logistics Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground lg:text-5xl">About Us</h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Your trusted partner in freight brokerage and logistics
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Shipping Broker Platform has grown from a small regional operation 
                  to one of the most trusted freight brokerage companies serving the United States and 
                  North America.
                </p>
                <p>
                  Our journey began with a simple mission: to bridge the gap between shippers and 
                  carriers through innovative technology and exceptional service. Today, we facilitate 
                  thousands of shipments monthly, connecting businesses with reliable transportation 
                  solutions.
                </p>
                <p>
                  With over a decade of experience in the logistics industry, we've built a reputation 
                  for reliability, transparency, and customer-first service. Our team of dedicated 
                  professionals works around the clock to ensure your freight moves smoothly from 
                  origin to destination.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To provide exceptional freight brokerage services that connect shippers with 
                  reliable carriers, delivering cost-effective and efficient logistics solutions 
                  while maintaining the highest standards of integrity and customer service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Eye className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading freight brokerage platform in North America, recognized for 
                  innovation, reliability, and excellence in logistics services. We aim to 
                  revolutionize the industry through technology and exceptional partnerships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-border text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <value.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
}
