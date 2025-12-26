import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Briefcase, MessageCircle, Clock, Shield, TrendingUp, Truck, Users, Rocket, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomePage() {
 const [dotActive, setDotActive] = useState(true);

 useEffect(() => {
 const interval = setInterval(() => {
 setDotActive(prev => !prev);
 }, 1000);
 return () => clearInterval(interval);
 }, []);

 const features = [
 {
 icon: Briefcase,
 title: 'Nationwide Coverage',
 description: 'Comprehensive logistics solutions spanning every corner of the United States and North America'
 },
 {
 icon: Shield,
 title: 'Verified & Reliable Carriers',
 description: 'We partner only with fully vetted, insured carriers committed to safety and professionalism'
 },
 {
 icon: Zap,
 title: 'Fast Load Matching',
 description: 'Quick and efficient carrier connections to keep your shipments moving without delay'
 },
 {
 icon: MessageCircle,
 title: 'Transparent Communication',
 description: 'Real-time updates and clear communication throughout your entire shipment journey'
 },
 {
 icon: Clock,
 title: '24/7 Support',
 description: 'Round-the-clock availability ensuring your freight operations never stop'
 }
 ];

 const industries = [
 {
 title: 'General Freight',
 description: 'Standard cargo transportation',
 icon: Truck,
 },
 {
 title: 'Retail & Wholesale',
 description: 'Distribution and supply chain',
 icon: Briefcase,
 },
 {
 title: 'Manufacturing',
 description: 'Industrial equipment and parts',
 icon: TrendingUp,
 },
 {
 title: 'Food & Beverage',
 description: 'Temperature-controlled shipping',
 icon: Shield,
 },
 {
 title: 'Automotive',
 description: 'Vehicle parts and accessories',
 icon: Zap,
 },
 {
 title: 'Construction Materials',
 description: 'Heavy building materials',
 icon: Users,
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

 // Animation variants
 const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.15
 }
 }
 };

 const itemVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: 0.5 }
 }
 };

 return (
 <div className="flex min-h-screen w-full flex-col">
 <section
 data-aos="fade-up"
 className="hero-section min-h-[80vh] relative m-5 rounded-4xl overflow-hidden flex items-center justify-center"
 >
 {/* Background Image */}
 <img
 className="absolute w-full h-full object-cover"
 src="/hero.webp"
 alt="Hero Image"
 />

 {/* Black overlay */}
 <div className="absolute w-full h-full bg-black opacity-80"></div>

 {/* Content Container */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 className="relative z-10 max-w-5xl mx-auto px-6 text-white py-10"
 >
 {/* Badge */}
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2, duration: 0.6 }}
 className="inline-flex items-center gap-2 bg-red-700 px-4 py-2 rounded-md mb-8"
 >
 <div className={`w-2.5 h-2.5 rounded-full transition-all ${dotActive ? 'bg-white scale-125' : 'bg-gray-400'}`}></div>
 <span className="text-xs font-bold tracking-widest uppercase">TRUSTED NATIONWIDE LOGISTICS</span>
 </motion.div>

 {/* Main Heading */}
 <motion.div
 initial={{ opacity: 0, x: -50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.4, duration: 0.8 }}
 className="mb-8"
 >
 <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
 Reliable<br />
 Transportation<br />
 <span className="text-red-600">Brokerage</span><br />
 <span className="text-red-600">Solutions</span>
 </h1>
 </motion.div>

 {/* Subheading */}
 <motion.div
 initial={{ opacity: 0, x: -50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.6, duration: 0.8 }}
 className="border-l-4 border-red-600 pl-6 mb-10"
 >
 <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl">
 Connecting <span className="font-semibold">shippers with verified carriers</span> across the United States & North America delivering freight safely, efficiently, and on time.
 </p>
 </motion.div>

 {/* CTA Buttons */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8, duration: 0.6 }}
 className="flex flex-col sm:flex-row gap-4 mb-12"
 >
 <Link to='/quote'>
 <motion.button
 whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(220, 38, 38, 0.4)' }}
 whileTap={{ scale: 0.95 }}
 className="bg-red-700 hover:bg-red-800 transition-colors px-8 py-3 rounded-md font-bold text-white flex items-center justify-center gap-2 text-base shadow-lg"
 >
 <span>📋</span>
 Request a Quote
 </motion.button>
 </Link>
 <Link to='/contact'>
 <motion.button
 whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
 whileTap={{ scale: 0.95 }}
 className="bg-white hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-bold text-black flex items-center justify-center gap-2 text-base shadow-lg"
 >
 <Phone className="w-5 h-5" />
 Contact Us
 </motion.button>
 </Link>
 </motion.div>

 {/* Feature Cards */}
 <motion.div
 variants={containerVariants}
 initial="hidden"
 animate="visible"
 className="grid grid-cols-1 md:grid-cols-3 gap-6"
 >
 {/* Card 1 */}
 <motion.div
 variants={itemVariants}
 whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(220, 38, 38, 0.3)' }}
 transition={{ duration: 0.3 }}
 className="bg-black/50 backdrop-blur border border-gray-600 rounded-lg px-8 py-4 flex items-center gap-4 shadow-lg"
 >
 <div className="bg-red-700 p-3 rounded-lg flex-shrink-0">
 <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
 </div>
 <div>
 <h3 className="font-bold text-base mb-0.5">Verified Carriers</h3>
 <p className="text-sm text-gray-300">100% vetted network</p>
 </div>
 </motion.div>

 {/* Card 2 */}
 <motion.div
 variants={itemVariants}
 whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(220, 38, 38, 0.3)' }}
 transition={{ duration: 0.3 }}
 className="bg-black/50 backdrop-blur border border-gray-600 rounded-lg px-8 py-4 flex items-center gap-4 shadow-lg"
 >
 <div className="bg-red-700 p-3 rounded-lg flex-shrink-0">
 <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
 </div>
 <div>
 <h3 className="font-bold text-base mb-0.5">24/7 Support</h3>
 <p className="text-sm text-gray-300">Always available</p>
 </div>
 </motion.div>

 {/* Card 3 */}
 <motion.div
 variants={itemVariants}
 whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(220, 38, 38, 0.3)' }}
 transition={{ duration: 0.3 }}
 className="bg-black/50 backdrop-blur border border-gray-600 rounded-lg px-8 py-4 flex items-center gap-4 shadow-lg"
 >
 <div className="bg-red-700 p-3 rounded-lg flex-shrink-0">
 <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
 </div>
 <div>
 <h3 className="font-bold text-base mb-0.5">Fast Matching</h3>
 <p className="text-sm text-gray-300">Quick response time</p>
 </div>
 </motion.div>
 </motion.div>
 </motion.div>
 </section>

 {/* Why Choose Us Section */}
 <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
 <div className="mx-auto max-w-7xl px-4 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-center"
 >
 <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
 Your Trusted Partner for <br /><span className="text-red-800">Seamless Freight Transportation</span>
 </h2>
 <p className="mt-4 text-lg text-muted-foreground">
 Connecting shippers with reliable carriers across North America with unmatched service and efficiency
 </p>
 </motion.div>

 <motion.div
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
 >
 {features.map((feature) => (
 <motion.div
 key={feature.title}
 variants={itemVariants}
 whileHover={{ y: -8, transition: { duration: 0.2 } }}
 >
 <Card className="border-border bg-card hover:shadow-lg transition-shadow">
 <CardHeader>
 <motion.div
 whileHover={{ rotate: 360 }}
 transition={{ duration: 0.6 }}
 className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-800"
 >
 <feature.icon className="h-6 w-6 text-white" />
 </motion.div>
 <CardTitle className="text-xl">{feature.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <CardDescription>{feature.description}</CardDescription>
 </CardContent>
 </Card>
 </motion.div>
 ))}

 {/* Special Card with Button */}
 <motion.div
 variants={itemVariants}
 whileHover={{ y: -8, transition: { duration: 0.2 } }}
 >
 <Card className="border-border bg-red-800 text-white hover:shadow-lg transition-shadow">
 <CardHeader>
 <motion.div
 whileHover={{ rotate: 360 }}
 transition={{ duration: 0.6 }}
 className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
 >
 <Truck className="h-6 w-6 text-red-800" />
 </motion.div>
 <CardTitle className="text-xl">Ready to Ship?</CardTitle>
 </CardHeader>
 <CardContent>
 <CardDescription className='text-white'>Get your free quote today</CardDescription>
 <motion.a
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 href="/quote"
 className="mt-4 inline-block rounded bg-white px-4 py-2 text-red-800 font-semibold hover:bg-gray-100 transition-colors"
 >
 Get Started Now
 </motion.a>
 </CardContent>
 </Card>
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* Industries We Serve Section */}
 <section className="py-16 lg:py-24 bg-background">
 <div className="mx-auto max-w-7xl px-4 lg:px-8">
 <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
 {/* Left Image */}
 <motion.div
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="relative"
 >
 <img
 src="/industry.webp"
 alt="Freight Industries"
 className="h-[380px] sm:h-[460px] lg:h-[650px] w-full rounded-2xl object-cover shadow-xl"
 />

 {/* Stats */}
 <motion.div
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3"
 >
 {[
 { value: '50+', label: 'States' },
 { value: '24/7', label: 'Support' },
 { value: '100%', label: 'Verified' }
 ].map((stat, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ scale: 1.05 }}
 className="rounded-lg bg-red-800 px-3 py-4 text-center text-white"
 >
 <p className="text-xl font-bold">{stat.value}</p>
 <p className="text-xs uppercase">{stat.label}</p>
 </motion.div>
 ))}
 </motion.div>
 </motion.div>

 {/* Right Content */}
 <motion.div
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 >
 <motion.span
 initial={{ opacity: 0, scale: 0.8 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="inline-block rounded bg-red-100 px-4 py-1 text-sm font-semibold text-red-800 mb-4"
 >
 INDUSTRIES WE SERVE
 </motion.span>

 <h2 className="text-3xl font-bold lg:text-4xl">
 Comprehensive Freight Solutions for <br />
 <span className="text-red-800">Every Industry</span>
 </h2>

 <p className="mt-4 text-muted-foreground max-w-xl">
 From general freight to specialized cargo, we connect you with
 the right carriers across the United States & North America.
 </p>

 {/* Industry Cards */}
 <motion.div
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 className="mt-8 grid gap-4 sm:grid-cols-2"
 >
 {industries.map((item) => (
 <motion.div
 key={item.title}
 variants={itemVariants}
 whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
 >
 <Card className="flex items-start gap-4 p-4 hover:shadow-lg transition-shadow">
 <motion.div
 whileHover={{ rotate: 360 }}
 transition={{ duration: 0.5 }}
 className="flex h-10 w-10 items-center justify-center rounded-md bg-red-800"
 >
 <item.icon className="h-5 w-5 text-white" />
 </motion.div>
 <div>
 <h4 className="font-semibold">{item.title}</h4>
 <p className="text-sm text-muted-foreground">
 {item.description}
 </p>
 </div>
 </Card>
 </motion.div>
 ))}
 </motion.div>

 {/* CTA */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.4 }}
 className="mt-8"
 >
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 <Button className="bg-red-800 hover:bg-red-900" asChild>
 <Link to="/services">
 Explore Our Services →
 </Link>
 </Button>
 </motion.div>
 </motion.div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* How We Work Section */}
 <section className="relative py-16 lg:py-24 overflow-hidden">
 {/* Background Image with Overlay */}
 <div className="absolute inset-0 z-0">
 <img
 src="/pack.webp"
 alt="Background"
 className="h-full w-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/75" />
 </div>

 <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-center"
 >
 <h2 className="text-3xl font-bold text-white lg:text-4xl">How We Work</h2>
 <p className="mt-4 text-lg text-white/90">
 Simple, transparent process from quote to delivery
 </p>
 </motion.div>

 <motion.div
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 className="mt-12 grid gap-8 md:grid-cols-3"
 >
 {steps.map((step, index) => (
 <motion.div
 key={step.number}
 variants={itemVariants}
 whileHover={{ y: -10 }}
 className="relative"
 >
 <div className="flex flex-col items-center text-center">
 <motion.div
 whileHover={{ scale: 1.1, rotate: 360 }}
 transition={{ duration: 0.5 }}
 className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground"
 >
 {step.number}
 </motion.div>
 <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
 <p className="mt-2 text-white/80">{step.description}</p>
 </div>
 {index < steps.length - 1 && (
 <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-white/20 md:block" />
 )}
 </motion.div>
 ))}
 </motion.div>
 </div>
 </section>

 {/* Services Teaser Section */}
 <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
 <div className="mx-auto max-w-7xl px-4 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-center"
 >
 <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our Services</h2>
 <p className="mt-4 text-lg text-muted-foreground">
 Comprehensive logistics solutions tailored to your needs
 </p>
 </motion.div>

 <motion.div
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 className="mt-12 grid gap-8 md:grid-cols-3"
 >
 {services.map((service) => (
 <motion.div
 key={service.title}
 variants={itemVariants}
 whileHover={{ scale: 1.05 }}
 >
 <Card className="border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300">
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
 </motion.div>
 ))}
 </motion.div>

 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.4 }}
 className="mt-12 text-center"
 >
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
 <Link to="/services">View All Services</Link>
 </Button>
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="relative py-16 lg:py-24 overflow-hidden">
 {/* Background Image with Overlay */}
 <div className="absolute inset-0 z-0">
 <img
 src="/ships.webp"
 alt="Background"
 className="h-full w-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/65 to-black/75" />
 </div>

 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8"
 >
 <h2 className="text-3xl font-bold text-white lg:text-4xl leading-tight">
 Ready to Ship with Confidence?
 </h2>
 <p className="mt-4 text-lg text-white/90 leading-relaxed">
 Get a free quote today and experience the difference of working with a trusted freight broker.
 </p>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3 }}
 className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
 >
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
 <Link to="/quote">Get a Quote</Link>
 </Button>
 </motion.div>
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm transition-all" asChild>
 <Link to="/contact">Contact Us</Link>
 </Button>
 </motion.div>
 </motion.div>
 </motion.div>
 </section>
 </div>
 );
}