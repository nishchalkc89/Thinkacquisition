import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/training', label: 'TRAINING' },
    { path: '/business-development', label: 'BUSINESS DEVELOPMENT' },
    { path: '/resources', label: 'RESOURCES' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-professional-lg' 
          : 'bg-[#1E3A8A]/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-[#FDB913] rounded-full p-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-6 bg-[#FDB913] rounded-full" />
                </div>
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${scrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
                  THINK
                </h1>
                <p className={`text-sm ${scrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
                  ACQUISITION
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isContact = item.label === 'CONTACT';
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-bold text-sm transition-all px-4 py-2 rounded-lg ${
                      isContact
                        ? 'bg-[#FDB913] text-[#1E3A8A] hover:bg-yellow-400'
                        : isActive
                        ? scrolled
                          ? 'text-[#FDB913]'
                          : 'text-[#FDB913]'
                        : scrolled
                        ? 'text-[#1E3A8A] hover:text-[#FDB913]'
                        : 'text-white hover:text-[#FDB913]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden ${scrolled ? 'text-[#1E3A8A]' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isContact = item.label === 'CONTACT';
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-bold text-sm ${
                      isContact
                        ? 'bg-[#FDB913] text-[#1E3A8A]'
                        : isActive
                        ? 'bg-gray-100 text-[#FDB913]'
                        : 'text-[#1E3A8A] hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#FDB913] rounded-full p-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-6 bg-[#FDB913] rounded-full" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">THINK ACQUISITION</h3>
                  <p className="text-sm text-white/70">Excellence in Federal Acquisition</p>
                </div>
              </div>
              <p className="text-white/70 mb-4">
                Empowering federal teams with strategic consulting, training, and development services 
                in procurement, acquisition, and program management.
              </p>
              <div className="flex gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs">SDVOSB</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs">MBE</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs">SWaM</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-white/70 hover:text-[#FDB913] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>25 Castle Haven Road</li>
                <li>Hampton, VA 23666</li>
                <li className="pt-2">
                  <a href="tel:7038196192" className="hover:text-[#FDB913]">
                    (703) 819-6192
                  </a>
                </li>
                <li>
                  <a href="mailto:william@thinkacquisition.net" className="hover:text-[#FDB913]">
                    william@thinkacquisition.net
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2026 Think Acquisition. All rights reserved.
            </p>
            <p className="text-white/70 text-sm mt-4 md:mt-0">
              CAGE Code: 89VE7 | UEI: M2MINJSD9FD3
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}