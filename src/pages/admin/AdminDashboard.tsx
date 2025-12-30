// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { useEffect, useState } from 'react';
// import { getAnalytics } from '@/db/api';
// import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// interface Analytics {
//   totalSubmissions: number;
//   contactSubmissions: number;
//   quoteRequests: number;
//   pendingCount: number;
//   completedCount: number;
//   contactPending: number;
//   contactCompleted: number;
//   quotePending: number;
//   quoteCompleted: number;
// }

// export default function AdminDashboard() {
//   const [analytics, setAnalytics] = useState<Analytics | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadAnalytics();
//   }, []);

//   const loadAnalytics = async () => {
//     try {
//       const data = await getAnalytics();
//       setAnalytics(data);
//     } catch (error) {
//       console.error('Failed to load analytics:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-12">
//         <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
//       </div>
//     );
//   }

//   if (!analytics) {
//     return <div>Failed to load analytics</div>;
//   }

//   const statusData = [
//     { name: 'Pending', value: analytics.pendingCount, color: 'hsl(var(--chart-2))' },
//     { name: 'Completed', value: analytics.completedCount, color: 'hsl(var(--chart-1))' },
//   ];

//   const typeData = [
//     { name: 'Contact Forms', pending: analytics.contactPending, completed: analytics.contactCompleted },
//     { name: 'Quote Requests', pending: analytics.quotePending, completed: analytics.quoteCompleted },
//   ];

//   const stats = [
//     {
//       title: 'Total Submissions',
//       value: analytics.totalSubmissions,
//       icon: FileText,
//       description: 'All time submissions',
//     },
//     {
//       title: 'Pending',
//       value: analytics.pendingCount,
//       icon: Clock,
//       description: 'Awaiting response',
//     },
//     {
//       title: 'Completed',
//       value: analytics.completedCount,
//       icon: CheckCircle,
//       description: 'Successfully processed',
//     },
//     {
//       title: 'Completion Rate',
//       value: analytics.totalSubmissions > 0 
//         ? `${Math.round((analytics.completedCount / analytics.totalSubmissions) * 100)}%`
//         : '0%',
//       icon: TrendingUp,
//       description: 'Overall completion',
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
//         <p className="mt-2 text-muted-foreground">Overview of your submissions and analytics</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <Card key={stat.title} className="border-border">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
//               <stat.icon className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stat.value}</div>
//               <p className="text-xs text-muted-foreground">{stat.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid gap-8 lg:grid-cols-2">
//         {/* Status Distribution */}
//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Status Distribution</CardTitle>
//             <CardDescription>Breakdown of pending vs completed submissions</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={statusData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {statusData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Submission Types */}
//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Submission Types</CardTitle>
//             <CardDescription>Contact forms vs quote requests</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={typeData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pending" fill="hsl(var(--chart-2))" name="Pending" />
//                 <Bar dataKey="completed" fill="hsl(var(--chart-1))" name="Completed" />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Quick Stats */}
//       <div className="grid gap-4 md:grid-cols-2">
//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Contact Submissions</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Total:</span>
//                 <span className="font-semibold">{analytics.contactSubmissions}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Pending:</span>
//                 <span className="font-semibold text-chart-2">{analytics.contactPending}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Completed:</span>
//                 <span className="font-semibold text-chart-1">{analytics.contactCompleted}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Quote Requests</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Total:</span>
//                 <span className="font-semibold">{analytics.quoteRequests}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Pending:</span>
//                 <span className="font-semibold text-chart-2">{analytics.quotePending}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Completed:</span>
//                 <span className="font-semibold text-chart-1">{analytics.quoteCompleted}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
// import { getAnalytics } from '@/db/api';
// import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';
// import {
//   PieChart, Pie, Cell, ResponsiveContainer, Legend,
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
// } from 'recharts';

// interface Analytics {
//   totalSubmissions: number;
//   contactSubmissions: number;
//   quoteRequests: number;
//   pendingCount: number;
//   completedCount: number;
//   contactPending: number;
//   contactCompleted: number;
//   quotePending: number;
//   quoteCompleted: number;
// }

// export default function AdminDashboard() {
//   const [analytics, setAnalytics] = useState<Analytics | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await getAnalytics();
//         setAnalytics(data);
//       } catch (error) {
//         console.error('Failed to load analytics:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-12">
//         <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
//       </div>
//     );
//   }

//   if (!analytics) {
//     return <div>Failed to load analytics</div>;
//   }

//   const statusData = [
//     { name: 'Pending', value: analytics.pendingCount, color: 'hsl(var(--chart-2))' },
//     { name: 'Completed', value: analytics.completedCount, color: 'hsl(var(--chart-1))' },
//   ];

//   const typeData = [
//     { name: 'Contact Forms', pending: analytics.contactPending, completed: analytics.contactCompleted },
//     { name: 'Quote Requests', pending: analytics.quotePending, completed: analytics.quoteCompleted },
//   ];

//   const stats = [
//     { title: 'Total Submissions', value: analytics.totalSubmissions, icon: FileText, description: 'All time submissions' },
//     { title: 'Pending', value: analytics.pendingCount, icon: Clock, description: 'Awaiting response' },
//     { title: 'Completed', value: analytics.completedCount, icon: CheckCircle, description: 'Successfully processed' },
//     { 
//       title: 'Completion Rate', 
//       value: analytics.totalSubmissions > 0 ? `${Math.round((analytics.completedCount / analytics.totalSubmissions) * 100)}%` : '0%', 
//       icon: TrendingUp, 
//       description: 'Overall completion' 
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
//         <p className="mt-2 text-muted-foreground">Overview of your submissions and analytics</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map(stat => (
//           <Card key={stat.title} className="border-border">
//             <CardHeader className="flex items-center justify-between pb-2">
//               <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
//               <stat.icon className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stat.value}</div>
//               <p className="text-xs text-muted-foreground">{stat.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid gap-8 lg:grid-cols-2">
//         {/* Status Distribution */}
//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Status Distribution</CardTitle>
//             <CardDescription>Pending vs Completed submissions</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={statusData}
//                   dataKey="value"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                   labelLine={false}
//                 >
//                   {statusData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Submission Types */}
//         <Card className="border-border">
//           <CardHeader>
//             <CardTitle>Submission Types</CardTitle>
//             <CardDescription>Contact Forms vs Quote Requests</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={typeData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pending" fill="hsl(var(--chart-2))" name="Pending" />
//                 <Bar dataKey="completed" fill="hsl(var(--chart-1))" name="Completed" />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
// Admin Dashboard to view all registered users
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Phone, Calendar, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  authProvider?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      const parsedUsers = JSON.parse(usersData);
      setUsers(parsedUsers);
    }
  };

  const deleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(u => u.id !== userId);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Registered Users</h1>
        <p className="text-muted-foreground">View all users who have registered on your platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Google Sign-ins</CardTitle>
            <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter(u => u.authProvider === 'google').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email Sign-ups</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter(u => !u.authProvider || u.authProvider === 'email').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>A list of all registered users and their details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Auth Method</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">No users found</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.phone ? (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            {user.phone}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {user.authProvider === 'google' ? (
                          <Badge variant="outline" className="gap-1">
                            <svg className="h-3 w-3" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                            </svg>
                            Google
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="gap-1">
                            <Mail className="h-3 w-3" />
                            Email
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {formatDate(user.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteUser(user.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}