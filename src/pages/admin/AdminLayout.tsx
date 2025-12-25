import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FileText, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AdminLayout() {
  const { profile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (profile && profile.role !== 'admin') {
      navigate('/');
    }
  }, [profile, navigate]);

  if (!profile || profile.role !== 'admin') {
    return null;
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Submissions', href: '/admin/submissions', icon: FileText },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-sidebar lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-sidebar-border p-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-sidebar-foreground">Admin Panel</span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-sidebar-border p-4">
            <div className="mb-3 text-sm text-sidebar-foreground">
              Logged in as <span className="font-semibold">{profile.username}</span>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={signOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-sidebar">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-sidebar-border p-6">
                <span className="text-xl font-bold text-sidebar-foreground">Admin Panel</span>
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="h-6 w-6 text-sidebar-foreground" />
                </button>
              </div>
              <nav className="flex-1 space-y-1 p-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-sidebar-border p-4">
                <div className="mb-3 text-sm text-sidebar-foreground">
                  Logged in as <span className="font-semibold">{profile.username}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    signOut();
                    setSidebarOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Mobile Header */}
        <header className="border-b border-border bg-background p-4 lg:hidden">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <span className="text-lg font-semibold">Admin Panel</span>
            <div className="w-6" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
