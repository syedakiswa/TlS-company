import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Check
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <img
              src="/logo.webp"
              alt="TLS Logo"
              className="mb-4 h-12"
            />

            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Your trusted transportation brokerage connecting shippers with reliable carriers nationwide.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700">
                <Facebook className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/quote">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                Freight Brokerage
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                Full Truckload (FTL)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                Less Than Truckload (LTL)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                Nationwide Coverage
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                24/7 Load Management
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-red-600 mt-1" />
                <div>
                  <p className="font-semibold text-white">Phone (24/7)</p>
                  <p>(734) 301-1570</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-red-600 mt-1" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>transportlogisticalsolutions@gmail.com</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-red-600 mt-1" />
                <div>
                  <p className="font-semibold text-white">Service Area</p>
                  <p>Nationwide USA & North America</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            © 2025 Transport Logistical Solutions, LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
