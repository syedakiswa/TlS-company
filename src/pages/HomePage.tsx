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
      {/* Hero Section - ہیرو سیکشن */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay - پس منظر کی تصویر */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
            alt="پس منظر"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center animate-fade-in">
              <h1 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl leading-tight">
                آپ کا قابل اعتماد فریٹ بروکریج پارٹنر
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                ریاستہائے متحدہ اور شمالی امریکہ میں بھروسہ مند کیریئرز کے ساتھ شپرز کو جوڑنا۔ 
                آپ کے کاروبار کے لیے تیز، موثر اور سرمایہ کاری مؤثر لاجسٹکس حل۔
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/quote">قیمت حاصل کریں</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm transition-all" asChild>
                  <Link to="/services">ہماری خدمات</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-full lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
                  alt="فریٹ ٹرک"
                  className="h-full w-full rounded-lg object-cover shadow-2xl ring-2 ring-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - ہمیں کیوں منتخب کریں */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">ہمیں کیوں منتخب کریں</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ہم ہر شپمنٹ میں اپنی ثابت شدہ مہارت کے ساتھ بہترین کارکردگی فراہم کرتے ہیں
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
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

      {/* How We Work Section - ہم کیسے کام کرتے ہیں */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay - پس منظر کی تصویر */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&h=1080&fit=crop"
            alt="پس منظر"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">ہم کیسے کام کرتے ہیں</h2>
            <p className="mt-4 text-lg text-white/90">
              قیمت سے ڈیلیوری تک آسان اور شفاف عمل
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-white/80">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-white/20 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser Section - خدمات */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">ہماری خدمات</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              آپ کی ضروریات کے مطابق جامع لاجسٹکس حل
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
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
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/services">تمام خدمات دیکھیں</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - کال ٹو ایکشن */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay - پس منظر کی تصویر */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop"
            alt="پس منظر"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white lg:text-4xl leading-tight">
            اعتماد کے ساتھ شپ کرنے کے لیے تیار ہیں؟
          </h2>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">
            آج ہی مفت قیمت حاصل کریں اور ایک قابل اعتماد فریٹ بروکر کے ساتھ کام کرنے کا فرق محسوس کریں۔
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/quote">قیمت حاصل کریں</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm transition-all" asChild>
              <Link to="/contact">ہم سے رابطہ کریں</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
