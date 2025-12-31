import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import PageMeta from '@/components/common/PageMeta';

const OWNER_EMAIL = 'transportlogisticalsolutions@gmail.com';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

export default function LoginPage() {
   <PageMeta
        title="Customer Login | Transport Logistical Solutions"
        description="Login to your Transport Logistical Solutions account to track shipments, manage quotes and freight services."
      />
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const from = (location.state as any)?.from || '/';

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  // Send notification to owner
  const sendOwnerNotification = async (userData: {
    name: string;
    email: string;
    phone?: string;
    action: 'login' | 'signup';
  }) => {
    try {
      await fetch('https://formspree.io/f/xdaorvdg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _replyto: OWNER_EMAIL,
          _subject: `🔔 User ${userData.action === 'signup' ? 'Registration' : 'Login'} Notification`,
          name: userData.name,
          email: userData.email,
          phone: userData.phone || 'Not provided',
          action: userData.action,
          timestamp: new Date().toLocaleString(),
          message: `
New user ${userData.action}:

Name: ${userData.name}
Email: ${userData.email}
Phone: ${userData.phone || 'Not provided'}
Action: ${userData.action.toUpperCase()}
Time: ${new Date().toLocaleString()}
          `.trim(),
        }),
      });
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  };

  // Get stored users
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Save user
  const saveUser = (user: any) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Find user
  const findUser = (email: string) => {
    const users = getUsers();
    return users.find((u: any) => u.email === email);
  };

  // Set current user
  const setCurrentUser = (user: any, rememberMe: boolean = false) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    
    if (rememberMe) {
      localStorage.setItem('rememberedUser', JSON.stringify(user));
    }
  };

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const user = findUser(data.email);
      
      if (!user) {
        toast({
          title: 'Login failed',
          description: 'User not found. Please sign up first.',
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      if (user.password !== data.password) {
        toast({
          title: 'Login failed',
          description: 'Incorrect password.',
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      setCurrentUser(user, data.rememberMe || false);

      // Send notification to owner
      await sendOwnerNotification({
        name: user.name,
        email: user.email,
        phone: user.phone,
        action: 'login',
      });

      toast({
        title: 'Welcome back! 👋',
        description: 'You have successfully logged in.',
      });

      // Trigger storage event for AuthContext
      window.dispatchEvent(new Event('storage'));
      
      // Redirect to home
      window.location.href = '/';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const existingUser = findUser(data.email);
      
      if (existingUser) {
        toast({
          title: 'Signup failed',
          description: 'User with this email already exists.',
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        role: 'user',
        authProvider: 'email',
        createdAt: new Date().toISOString(),
      };

      saveUser(newUser);
      setCurrentUser(newUser);

      // Send notification to owner
      await sendOwnerNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        action: 'signup',
      });

      toast({
        title: 'Account created! 🎉',
        description: 'You have successfully registered and logged in.',
      });

      // Trigger storage event for AuthContext
      window.dispatchEvent(new Event('storage'));
      
      // Redirect to home
      window.location.href = '/';
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to='/'>
            <div className="mx-auto mb-4 flex items-center justify-center rounded-lg">
              <img src='/logo.webp' className="h-20 w-32" alt="Logo" />
            </div>
          </Link>
          <p className="mt-2 text-muted-foreground">Sign in to access your account</p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Login to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={loginForm.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Remember me on this device
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="signup">
                <Form {...signupForm}>
                  <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                    <FormField
                      control={signupForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+92 300 1234567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Choose a password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Creating account...' : 'Sign Up'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}