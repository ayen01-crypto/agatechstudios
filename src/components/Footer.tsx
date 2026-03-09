import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';
import { WhatsAppService } from '../utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/marketplace' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Training', href: '/training' },
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-[#0B0E1A] border-t border-[rgba(0,240,255,0.1)]">
      <div className="px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <Logo className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-bold text-[#F4F6FF]">AGA Tech Studios</h3>
                  <p className="text-xs text-[#A7B0C8]">Innovation & Excellence</p>
                </div>
              </Link>
              <p className="text-[#A7B0C8] text-sm leading-relaxed mb-6">
                Building world-class technology solutions for businesses and individuals across East Africa.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] hover:bg-[#00F0FF]/20 transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[#F4F6FF] font-semibold mb-4 text-sm uppercase tracking-widest">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[#A7B0C8] hover:text-[#00F0FF] transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 py-8 border-y border-[rgba(0,240,255,0.1)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <div>
                <p className="text-[#A7B0C8] text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:contact@agatechstudios.com" className="text-[#F4F6FF] font-medium hover:text-[#00F0FF] transition-colors">
                  contact@agatechstudios.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <div>
                <p className="text-[#A7B0C8] text-xs uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+256767765070" className="text-[#F4F6FF] font-medium hover:text-[#00F0FF] transition-colors">
                  +256 767 765 070
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <div>
                <p className="text-[#A7B0C8] text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-[#F4F6FF] font-medium">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#00F0FF]/5 via-[#0099FF]/5 to-[#00F0FF]/5 rounded-lg p-8 mb-12 border border-[rgba(0,240,255,0.1)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[#F4F6FF] font-semibold text-lg mb-2">Ready to build something amazing?</h3>
                <p className="text-[#A7B0C8] text-sm">Let's work together to bring your ideas to life</p>
              </div>
              <button
                onClick={() => WhatsAppService.openChat({ type: 'services' })}
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-[rgba(0,240,255,0.1)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#A7B0C8]">
            <p>
              &copy; {currentYear} AGA Tech Studios. All rights reserved.
            </p>
            <p>
              Designed and built with <span className="text-[#00F0FF]">❤️</span> in Nairobi
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#00F0FF] transition-colors">Status</a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors">Security</a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
