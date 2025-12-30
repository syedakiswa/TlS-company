// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useAuth } from '@/contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useToast } from '@/hooks/use-toast';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Truck } from 'lucide-react';

// const formSchema = z.object({
//   username: z.string().min(3, 'Username must be at least 3 characters').regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// type FormData = z.infer<typeof formSchema>;

// export default function LoginPage() {
//   const { signIn, signUp } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();
//   const [isLoading, setIsLoading] = useState(false);

//   const from = (location.state as any)?.from || '/';

//   const loginForm = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: '',
//       password: '',
//     },
//   });

//   const signupForm = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: '',
//       password: '',
//     },
//   });

//   const handleLogin = async (data: FormData) => {
//     setIsLoading(true);
//     try {
//       const { error } = await signIn(data.username, data.password);
//       if (error) {
//         toast({
//           title: 'Login failed',
//           description: error.message,
//           variant: 'destructive',
//         });
//       } else {
//         toast({
//           title: 'Welcome back!',
//           description: 'You have successfully logged in.',
//         });
//         navigate(from, { replace: true });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSignup = async (data: FormData) => {
//     setIsLoading(true);
//     try {
//       const { error } = await signUp(data.username, data.password);
//       if (error) {
//         toast({
//           title: 'Signup failed',
//           description: error.message,
//           variant: 'destructive',
//         });
//       } else {
//         toast({
//           title: 'Account created!',
//           description: 'You have successfully registered and logged in.',
//         });
//         navigate(from, { replace: true });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full items-center justify-center bg-secondary px-4 py-12">
//       <div className="w-full max-w-md">
//         <div className="mb-8 text-center">
//       <Link to='/'>
//           <div className="mx-auto mb-4 flex  items-center justify-center rounded-lg ">
//             <img src='/logo.webp' className="h-20 w-32 " />
//           </div>
// </Link>
//           <p className="mt-2 text-muted-foreground">Sign in to access your account</p>
//         </div>

//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Authentication</CardTitle>
//             <CardDescription>Login to your account or create a new one</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="login" className="w-full">
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger value="login">Login</TabsTrigger>
//                 <TabsTrigger value="signup">Sign Up</TabsTrigger>
//               </TabsList>

//               <TabsContent value="login">
//                 <Form {...loginForm}>
//                   <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
//                     <FormField
//                       control={loginForm.control}
//                       name="username"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Username</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Enter your username" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={loginForm.control}
//                       name="password"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Password</FormLabel>
//                           <FormControl>
//                             <Input type="password" placeholder="Enter your password" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <Button type="submit" className="w-full" disabled={isLoading}>
//                       {isLoading ? 'Logging in...' : 'Login'}
//                     </Button>
//                   </form>
//                 </Form>
//               </TabsContent>

//               <TabsContent value="signup">
//                 <Form {...signupForm}>
//                   <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
//                     <FormField
//                       control={signupForm.control}
//                       name="username"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Username</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Choose a username" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={signupForm.control}
//                       name="password"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Password</FormLabel>
//                           <FormControl>
//                             <Input type="password" placeholder="Choose a password" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <Button type="submit" className="w-full" disabled={isLoading}>
//                       {isLoading ? 'Creating account...' : 'Sign Up'}
//                     </Button>
//                   </form>
//                 </Form>
//                 <p className="mt-4 text-sm text-muted-foreground">
//                   Note: The first user to register will automatically become an admin.
//                 </p>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
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
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const from = (location.state as any)?.from || '/';

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
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
    loginMethod: 'google' | 'email';
    action: 'login' | 'signup';
  }) => {
    try {
      await fetch('https://formspree.io/f/xanyqjvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `🔔 New User ${userData.action === 'signup' ? 'Registration' : 'Login'} Notification`,
          name: userData.name,
          email: userData.email,
          phone: userData.phone || 'Not provided',
          loginMethod: userData.loginMethod,
          action: userData.action,
          timestamp: new Date().toLocaleString(),
          message: `A user has ${userData.action === 'signup' ? 'registered' : 'logged in'}:\n\nName: ${userData.name}\nEmail: ${userData.email}\nPhone: ${userData.phone || 'Not provided'}\nLogin Method: ${userData.loginMethod}\nTime: ${new Date().toLocaleString()}`,
        }),
      });
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  };

  // Get stored users from localStorage
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Save user to localStorage
  const saveUser = (user: any) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Check if user exists
  const findUser = (email: string) => {
    const users = getUsers();
    return users.find((u: any) => u.email === email);
  };

  // Set current logged-in user
  const setCurrentUser = (user: any) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
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

      // Set current user
      setCurrentUser(user);

      // Send notification to owner
      await sendOwnerNotification({
        name: user.name,
        email: user.email,
        phone: user.phone,
        loginMethod: 'email',
        action: 'login',
      });

      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.',
      });

      navigate(from, { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      // Check if user already exists
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

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        authProvider: 'email',
        createdAt: new Date().toISOString(),
      };

      // Save user
      saveUser(newUser);
      setCurrentUser(newUser);

      // Send notification to owner
      await sendOwnerNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        loginMethod: 'email',
        action: 'signup',
      });

      toast({
        title: 'Account created!',
        description: 'You have successfully registered and logged in.',
      });

      navigate(from, { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    
    // Simulate Google OAuth (in real app, you'd use Google OAuth library)
    // For demo, we'll create a mock Google user
    const mockGoogleUser = {
      id: 'google_' + Date.now(),
      name: 'Google User',
      email: 'user@gmail.com',
      authProvider: 'google',
      createdAt: new Date().toISOString(),
    };

    try {
      // Check if user exists
      let user = findUser(mockGoogleUser.email);
      
      if (!user) {
        // Create new user
        saveUser(mockGoogleUser);
        user = mockGoogleUser;
        
        // Send signup notification
        await sendOwnerNotification({
          name: user.name,
          email: user.email,
          loginMethod: 'google',
          action: 'signup',
        });
      } else {
        // Send login notification
        await sendOwnerNotification({
          name: user.name,
          email: user.email,
          phone: user.phone,
          loginMethod: 'google',
          action: 'login',
        });
      }

      setCurrentUser(user);

      toast({
        title: 'Welcome!',
        description: 'You have successfully signed in with Google.',
      });

      navigate(from, { replace: true });
    } catch (error) {
      toast({
        title: 'Google sign-in failed',
        description: 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGoogleLoading(false);
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
            <CardTitle>Authentication</CardTitle>
            <CardDescription>Login to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                {/* Google Sign In Button */}
                <div className="mb-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
                  </Button>
                </div>

                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

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

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="signup">
                {/* Google Sign In Button */}
                <div className="mb-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
                  </Button>
                </div>

                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

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
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
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