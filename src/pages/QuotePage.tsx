import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createQuoteRequest } from '@/db/api';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  shipment_type: z.string().min(1, 'Please select a shipment type'),
  origin: z.string().min(2, 'Origin is required'),
  destination: z.string().min(2, 'Destination is required'),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  pickup_date: z.string().optional(),
  additional_info: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function QuotePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      shipment_type: '',
      origin: '',
      destination: '',
      weight: '',
      dimensions: '',
      pickup_date: '',
      additional_info: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Save to database
      await createQuoteRequest({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        shipment_type: data.shipment_type,
        origin: data.origin,
        destination: data.destination,
        weight: data.weight || null,
        dimensions: data.dimensions || null,
        pickup_date: data.pickup_date || null,
        additional_info: data.additional_info || null,
      });

      // Send email via Formspree
      await fetch('https://formspree.io/f/xanyqjvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Quote Request',
          type: 'Quote Request',
        }),
      });

      toast({
        title: 'Quote request submitted!',
        description: 'We will review your request and get back to you with a quote soon.',
      });

      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit quote request. Please try again.',
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
            <h1 className="text-4xl font-bold text-primary-foreground lg:text-5xl">Get a Quote</h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Fill out the form below and we'll provide you with a competitive quote
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>
                Provide details about your shipment and we'll get back to you with pricing options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                              <Input type="email" placeholder="john@example.com" {...field} />
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
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC Logistics" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Shipment Details</h3>
                    <FormField
                      control={form.control}
                      name="shipment_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Shipment Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select shipment type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                              <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                              <SelectItem value="expedited">Expedited</SelectItem>
                              <SelectItem value="specialized">Specialized Freight</SelectItem>
                              <SelectItem value="cross-border">Cross-Border</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="origin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Origin (City, State) *</FormLabel>
                            <FormControl>
                              <Input placeholder="Chicago, IL" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Destination (City, State) *</FormLabel>
                            <FormControl>
                              <Input placeholder="Los Angeles, CA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight (lbs)</FormLabel>
                            <FormControl>
                              <Input placeholder="10000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dimensions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dimensions (L x W x H)</FormLabel>
                            <FormControl>
                              <Input placeholder="48 x 40 x 48 inches" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="pickup_date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Pickup Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                    <FormField
                      control={form.control}
                      name="additional_info"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requirements or Notes</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special handling requirements, delivery instructions, or other details..."
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">What Happens Next?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our process is simple and transparent
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  1
                </div>
                <CardTitle>Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We review your quote request and shipment details within 2 hours.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  2
                </div>
                <CardTitle>Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  You receive a competitive quote with multiple carrier options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  3
                </div>
                <CardTitle>Ship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Approve the quote and we'll arrange pickup and delivery.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
