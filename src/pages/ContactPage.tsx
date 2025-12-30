// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Mail, Phone, MapPin, Clock } from 'lucide-react';
// import { createContactSubmission } from '@/db/api';
// import { useToast } from '@/hooks/use-toast';
// import { useState } from 'react';

// const formSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Invalid email address'),
//   phone: z.string().optional(),
//   message: z.string().min(10, 'Message must be at least 10 characters'),
// });

// type FormData = z.infer<typeof formSchema>;

// export default function ContactPage() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//     },
//   });

//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true);
//     try {
//       // Save to database
//       await createContactSubmission({
//         name: data.name,
//         email: data.email,
//         phone: data.phone || null,
//         message: data.message,
//       });

//       // Send email via Formspree
//       await fetch('https://formspree.io/f/xanyqjvq', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: data.name,
//           email: data.email,
//           phone: data.phone || 'Not provided',
//           message: data.message,
//           _subject: 'New Contact Form Submission',
//         }),
//       });

//       toast({
//         title: 'Message sent!',
//         description: 'Thank you for contacting us. We will get back to you soon.',
//       });

//       form.reset();
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to send message. Please try again.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full flex-col">
//       {/* Hero Section */}
//       <section className="bg-primary py-16 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-primary-foreground lg:text-5xl">Contact Us</h1>
//             <p className="mt-4 text-lg text-primary-foreground/90">
//               Get in touch with our team for any inquiries or support
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form and Info Section */}
//       <section className="py-16 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <Card className="border-border">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Send Us a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and we'll get back to you as soon as possible.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                       <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Name *</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Your full name" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email *</FormLabel>
//                             <FormControl>
//                               <Input type="email" placeholder="your.email@example.com" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="phone"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Phone</FormLabel>
//                             <FormControl>
//                               <Input type="tel" placeholder="(555) 123-4567" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="message"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Message *</FormLabel>
//                             <FormControl>
//                               <Textarea
//                                 placeholder="Tell us how we can help you..."
//                                 className="min-h-32"
//                                 {...field}
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <Button type="submit" size="lg" disabled={isSubmitting}>
//                         {isSubmitting ? 'Sending...' : 'Send Message'}
//                       </Button>
//                     </form>
//                   </Form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Information Sidebar */}
//             <div className="space-y-6">
//               <Card className="border-border">
//                 <CardHeader>
//                   <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
//                     <MapPin className="h-6 w-6 text-accent-foreground" />
//                   </div>
//                   <CardTitle>Office Address</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Nationwide USA & North America


//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="border-border">
//                 <CardHeader>
//                   <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
//                     <Phone className="h-6 w-6 text-accent-foreground" />
//                   </div>
//                   <CardTitle>Phone</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     (734) 301-1570
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="border-border">
//                 <CardHeader>
//                   <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
//                     <Mail className="h-6 w-6 text-accent-foreground" />
//                   </div>
//                   <CardTitle>Email</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                    transportlogisticalsolutions@gmail.com
//                   </p>
//                 </CardContent>
//               </Card>

           
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="bg-secondary py-16 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Find Us</h2>
//             <p className="mt-4 text-lg text-muted-foreground">
//               Visit our office or reach out online
//             </p>
//           </div>
//           <div className="mt-12">
//             <div className="aspect-video w-full overflow-hidden rounded-lg">
//               <iframe
//                 src="https://www.google.com/maps/place/Allen+Park,+MI+48101,+USA/@42.2618765,-83.208058,13z/data=!3m1!4b1!4m6!3m5!1s0x883b3662fe29969b:0x9bd6779e43fe1f3d!8m2!3d42.2575385!4d-83.2110375!16zL20vMHZya3o!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Office Location"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { createContactSubmission } from '@/db/api';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Save to database
      await createContactSubmission({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      });

      // Send email via Formspree
      await fetch('https://formspree.io/f/xanyqjvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          message: data.message,
          _subject: 'New Contact Form Submission',
        }),
      });

      toast({
        title: 'Message sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });

      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground lg:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Get in touch with our team for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us how we can help you..."
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Office Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nationwide USA & North America
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    (734) 301-1570
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   transportlogisticalsolutions@gmail.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Find Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Visit our office or reach out online
            </p>
          </div>
          <div className="mt-12">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47567.35347804582!2d-83.23820392089846!3d42.2618765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3662fe29969b%3A0x9bd6779e43fe1f3d!2sAllen%20Park%2C%20MI%2048101%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}