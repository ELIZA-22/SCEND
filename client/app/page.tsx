import Link from 'next/link';
import { Shield, Clock, Users, CheckCircle, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">SCEND</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#services" className="hover:text-primary-400 transition">Services</Link>
              <Link href="#how-it-works" className="hover:text-primary-400 transition">How It Works</Link>
              <Link href="#pricing" className="hover:text-primary-400 transition">Pricing</Link>
              <Link href="#contact" className="hover:text-primary-400 transition">Contact</Link>
            </div>
            <div className="flex space-x-3">
              <Link 
                href="/login" 
                className="px-4 py-2 border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition"
              >
                Login
              </Link>
              <Link 
                href="/request" 
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
              >
                Request Protection
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section with Parallax Effect */}
      <section className="relative text-white py-20 md:py-32 min-h-[700px] flex items-center" style={{ backgroundAttachment: 'fixed' }}>
        {/* Background Image Layer - Will parallax scroll */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/team-security.jpg')",
            backgroundPosition: 'center center',
            filter: 'brightness(0.9) contrast(1.3)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        
        {/* Content - Must have relative z-10 to appear above backgrounds */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '0 6px 20px rgba(0,0,0,0.9), 0 3px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,1)' }}>
              <span className="text-white">Verified Protection.</span><br />
              <span className="text-primary-400">Discreetly Delivered.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-medium" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8)' }}>
              Nigeria&apos;s first technology-enabled platform for professional executive protection. 
              Trusted by CEOs, corporations, and high-profit individuals.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/request"
                className="px-8 py-4 bg-primary-500 text-white text-lg rounded-lg hover:bg-primary-600 transition inline-flex items-center justify-center font-semibold shadow-lg"
              >
                <Shield className="mr-2 h-5 w-5" />
                Request Security Now
              </Link>
              <Link 
                href="/professionals"
                className="px-8 py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white text-lg rounded-lg hover:bg-white hover:text-slate-900 transition inline-flex items-center justify-center font-semibold"
              >
                Join as Professional
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white font-medium" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)' }}>
              <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 mr-2 text-primary-400" />
                Licensed & Verified
              </div>
              <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 mr-2 text-primary-400" />
                Available 24/7
              </div>
              <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 mr-2 text-primary-400" />
                Nigeria-Wide Coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">300+</div>
              <div className="text-gray-600 mt-2">Verified Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600 mt-2">Available Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">6</div>
              <div className="text-gray-600 mt-2">Major Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600 mt-2">Verified Credentials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional protection tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Protection',
                description: 'Discreet, professional security for individuals and families',
                price: 'From ₦45,000/day',
                features: ['Close protection officers', 'Risk assessment', 'Travel security', 'Event coverage']
              },
              {
                title: 'Corporate Security',
                description: 'Comprehensive protection for executives and business leaders',
                price: 'From ₦800,000/month',
                features: ['Executive protection teams', 'Multi-city coverage', 'Security coordination', 'Incident reporting']
              },
              {
                title: 'Event Security',
                description: 'Professional security management for high-profile events',
                price: 'From ₦200,000/event',
                features: ['Event planning', 'Crowd management', 'VIP protection', 'Emergency protocols']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-primary-600 font-bold text-xl mb-6">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/request"
                  className="block text-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How SCEND Works</h2>
            <p className="text-xl text-gray-600">Professional protection in four simple steps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit Request', description: 'Fill out a confidential security request with your requirements', icon: Shield },
              { step: '2', title: 'Get Matched', description: 'We match you with verified security professionals based on your needs', icon: Users },
              { step: '3', title: 'Review & Confirm', description: 'Review profiles, pricing, and confirm your security detail', icon: CheckCircle },
              { step: '4', title: 'Deploy Security', description: 'Your protection team is deployed - usually within hours', icon: Clock },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-sm text-primary-600 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Coverage Areas</h2>
            <p className="text-xl text-slate-300">Professional protection across Nigeria&apos;s major cities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { city: 'Lagos', available: '150+ Professionals' },
              { city: 'Abuja', available: '80+ Professionals' },
              { city: 'Port Harcourt', available: '50+ Professionals' },
              { city: 'Ibadan', available: '30+ Professionals' },
              { city: 'Kano', available: '25+ Professionals' },
              { city: 'Enugu', available: '20+ Professionals' },
            ].map((area, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-primary-500 transition">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-primary-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">{area.city}</h3>
                </div>
                <p className="text-slate-300">{area.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Protected?</h2>
          <p className="text-xl mb-8 text-primary-100">Request professional security services in minutes</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/request"
              className="px-8 py-4 bg-white text-primary-600 text-lg rounded-lg hover:bg-gray-100 transition inline-flex items-center justify-center font-bold"
            >
              Request Protection Now
            </Link>
            <Link 
              href="tel:+2348000000000"
              className="px-8 py-4 border-2 border-white text-white text-lg rounded-lg hover:bg-white hover:text-primary-600 transition inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: 0800-000-0000
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-xl font-bold text-white">SCEND</span>
              </div>
              <p className="text-sm text-slate-400">
                Professional executive protection services across Nigeria. Verified, trusted, discreet.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/personal" className="text-slate-400 hover:text-primary-400 transition">Personal Protection</Link></li>
                <li><Link href="/services/corporate" className="text-slate-400 hover:text-primary-400 transition">Corporate Security</Link></li>
                <li><Link href="/services/events" className="text-slate-400 hover:text-primary-400 transition">Event Security</Link></li>
                <li><Link href="/services/travel" className="text-slate-400 hover:text-primary-400 transition">Travel Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-slate-400 hover:text-primary-400 transition">About Us</Link></li>
                <li><Link href="/professionals" className="text-slate-400 hover:text-primary-400 transition">Join as Professional</Link></li>
                <li><Link href="/partners" className="text-slate-400 hover:text-primary-400 transition">Partners</Link></li>
                <li><Link href="/careers" className="text-slate-400 hover:text-primary-400 transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Victoria Island, Lagos</li>
                <li>Phone: 0800-000-0000</li>
                <li>Email: info@scend.ng</li>
                <li className="text-primary-400 font-semibold">24/7 Emergency: 0800-111-2222</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center text-slate-400">
            <p>&copy; 2025 SCEND Nigeria Limited. All rights reserved. | Licensed by NSCDC</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
