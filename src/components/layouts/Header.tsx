import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Truck } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  const navigation = [
    { name: 'ہوم', href: '/' },
    { name: 'ہمارے بارے میں', href: '/about' },
    { name: 'خدمات', href: '/services' },
    { name: 'رابطہ', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Truck className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">ShipBroker</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA and Auth */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {user && profile ? (
            <>
              {profile.role === 'admin' && (
                <Button variant="outline" asChild>
                  <Link to="/admin">ایڈمن ڈیش بورڈ</Link>
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">{profile.username}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={signOut}>لاگ آؤٹ</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button variant="outline" asChild>
              <Link to="/login">لاگ ان</Link>
            </Button>
          )}
          <Button asChild>
            <Link to="/quote">قیمت حاصل کریں</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user && profile ? (
              <>
                {profile.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ایڈمن ڈیش بورڈ
                  </Link>
                )}
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  لاگ ان: {profile.username}
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-muted-foreground hover:bg-secondary"
                >
                  لاگ آؤٹ
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                لاگ ان
              </Link>
            )}
            <div className="pt-2">
              <Button className="w-full" asChild>
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  قیمت حاصل کریں
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
