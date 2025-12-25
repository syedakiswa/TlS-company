import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your application settings</p>
      </div>

      <div className="grid gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Application Information</CardTitle>
            <CardDescription>Basic information about your shipping broker platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Platform Name</div>
              <div className="text-base">Shipping Broker Platform</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Version</div>
              <div className="text-base">1.0.0</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Email Notifications</div>
              <div className="text-base">Powered by Formspree</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Company contact details displayed on the website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Address</div>
              <div className="text-base">123 Logistics Ave, Suite 100, Chicago, IL 60601</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Phone</div>
              <div className="text-base">(555) 123-4567</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Email</div>
              <div className="text-base">info@shipbroker.com</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Color scheme and branding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Primary Color</div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-primary" />
                <span className="text-base">Navy Blue (#1E3A8A)</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Accent Color</div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-accent" />
                <span className="text-base">Orange (#F59E0B)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Database</CardTitle>
            <CardDescription>Database connection and storage information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Provider</div>
              <div className="text-base">Supabase</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Status</div>
              <div className="text-base text-green-600">Connected</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
