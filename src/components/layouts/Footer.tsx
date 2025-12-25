import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ShipBroker</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              ریاستہائے متحدہ اور شمالی امریکہ میں فریٹ بروکریج اور لاجسٹکس حل کے لیے آپ کا قابل اعتماد پارٹنر۔
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">فوری لنکس</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ہوم
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ہمارے بارے میں
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  خدمات
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  رابطہ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">خدمات</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">فریٹ بروکریج</li>
              <li className="text-sm text-muted-foreground">کیریئر میچنگ</li>
              <li className="text-sm text-muted-foreground">لاجسٹکس مشاورت</li>
              <li className="text-sm text-muted-foreground">ٹریکنگ اور انشورنس</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">ہم سے رابطہ کریں</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Logistics Ave, Suite 100<br />Chicago, IL 60601</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@shipbroker.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 شپنگ بروکر پلیٹ فارم۔ تمام حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>
    </footer>
  );
}
