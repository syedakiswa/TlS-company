import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { getAnalytics } from '@/db/api';
import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface Analytics {
  totalSubmissions: number;
  contactSubmissions: number;
  quoteRequests: number;
  pendingCount: number;
  completedCount: number;
  contactPending: number;
  contactCompleted: number;
  quotePending: number;
  quoteCompleted: number;
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await getAnalytics();
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  if (!analytics) {
    return <div>Failed to load analytics</div>;
  }

  const statusData = [
    { name: 'Pending', value: analytics.pendingCount, color: 'hsl(var(--chart-2))' },
    { name: 'Completed', value: analytics.completedCount, color: 'hsl(var(--chart-1))' },
  ];

  const typeData = [
    { name: 'Contact Forms', pending: analytics.contactPending, completed: analytics.contactCompleted },
    { name: 'Quote Requests', pending: analytics.quotePending, completed: analytics.quoteCompleted },
  ];

  const stats = [
    {
      title: 'Total Submissions',
      value: analytics.totalSubmissions,
      icon: FileText,
      description: 'All time submissions',
    },
    {
      title: 'Pending',
      value: analytics.pendingCount,
      icon: Clock,
      description: 'Awaiting response',
    },
    {
      title: 'Completed',
      value: analytics.completedCount,
      icon: CheckCircle,
      description: 'Successfully processed',
    },
    {
      title: 'Completion Rate',
      value: analytics.totalSubmissions > 0 
        ? `${Math.round((analytics.completedCount / analytics.totalSubmissions) * 100)}%`
        : '0%',
      icon: TrendingUp,
      description: 'Overall completion',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Overview of your submissions and analytics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Status Distribution */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Status Distribution</CardTitle>
            <CardDescription>Breakdown of pending vs completed submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Submission Types */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Submission Types</CardTitle>
            <CardDescription>Contact forms vs quote requests</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={typeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pending" fill="hsl(var(--chart-2))" name="Pending" />
                <Bar dataKey="completed" fill="hsl(var(--chart-1))" name="Completed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-semibold">{analytics.contactSubmissions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending:</span>
                <span className="font-semibold text-chart-2">{analytics.contactPending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed:</span>
                <span className="font-semibold text-chart-1">{analytics.contactCompleted}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Quote Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-semibold">{analytics.quoteRequests}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending:</span>
                <span className="font-semibold text-chart-2">{analytics.quotePending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed:</span>
                <span className="font-semibold text-chart-1">{analytics.quoteCompleted}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
