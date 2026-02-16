import { Mail, Phone, MapPin, ExternalLink, Send, Clock, Shield, Star } from 'lucide-react';

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTE2OTIxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-white/90">
            Ready to transform your acquisition capabilities? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: '(703) 819-6192',
                link: 'tel:7038196192',
                description: 'Mon-Fri, 9am-5pm EST',
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: 'william@thinkacquisition.net',
                link: 'mailto:william@thinkacquisition.net',
                description: 'We typically respond within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                value: '25 Castle Haven Road, Hampton, VA 23666',
                link: 'https://maps.google.com/?q=25+Castle+Haven+Road+Hampton+VA+23666',
                description: 'By appointment only',
              },
            ].map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="text-[#FDB913]" size={32} />
                </div>
                <h3 className="text-xl font-black text-[#1E3A8A] mb-2">{option.title}</h3>
                <a 
                  href={option.link}
                  className="text-gray-700 hover:text-[#FDB913] transition-colors block mb-2"
                  target={option.title === 'Visit Us' ? '_blank' : undefined}
                  rel={option.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                >
                  {option.value}
                </a>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <h2 className="text-3xl font-black text-[#1E3A8A] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                    placeholder="john.doe@agency.gov"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Organization/Agency
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                    placeholder="Your agency or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="training">Training & Development</option>
                    <option value="business-dev">Business Development Services</option>
                    <option value="consulting">Acquisition Consulting</option>
                    <option value="executive-coaching">Executive Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1E3A8A] focus:outline-none"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Corporate Information */}
            <div className="space-y-8">
              {/* Corporate Data Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl">
                <h3 className="text-2xl font-black text-[#1E3A8A] mb-6">Corporate Data</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">CAGE Code</div>
                        <div className="font-bold text-[#1E3A8A] text-lg">89VE7</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">UEI</div>
                        <div className="font-bold text-[#1E3A8A] text-lg">M2MINJSD9FD3</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-sm text-gray-600 mb-2">NAICS Codes</div>
                    <div className="font-bold text-[#1E3A8A]">541611 (Primary), 611430</div>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-sm text-gray-600 mb-2">Point of Contact</div>
                    <div className="font-bold text-[#1E3A8A] text-lg">William Randolph</div>
                    <div className="text-gray-600 text-sm mt-1">Founder & Principal Consultant</div>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-sm text-gray-600 mb-3">Socio-Economic Status</div>
                    <div className="flex flex-wrap gap-2">
                      {['SDVOSB', 'MBE', 'SWaM'].map((badge) => (
                        <span key={badge} className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-bold">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-sm text-gray-600 mb-2">Website</div>
                    <a 
                      href="http://www.thinkacquisition.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-[#1E3A8A] hover:text-[#FDB913] transition-colors flex items-center gap-2"
                    >
                      www.thinkacquisition.net <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Work With Us */}
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-black mb-6">Why Partner With Us?</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Clock,
                      text: 'Quick response time - typically within 24 hours',
                    },
                    {
                      icon: Shield,
                      text: '26+ years of proven federal acquisition expertise',
                    },
                    {
                      icon: Star,
                      text: '100% client satisfaction rating',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-[#FDB913] p-2 rounded-lg mt-1">
                        <item.icon className="text-[#1E3A8A]" size={20} />
                      </div>
                      <p className="text-white/90">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <div className="inline-block bg-[#1E3A8A] p-4 rounded-2xl mb-6">
              <Clock className="text-[#FDB913]" size={40} />
            </div>
            <h3 className="text-3xl font-black text-[#1E3A8A] mb-4">Office Hours</h3>
            <div className="max-w-md mx-auto">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-bold text-[#1E3A8A]">9:00 AM - 5:00 PM EST</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Saturday - Sunday</span>
                <span className="font-bold text-gray-400">Closed</span>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              For urgent matters outside of business hours, please email us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1E3A8A]/10 to-[#2563EB]/10">
          <div className="text-center">
            <MapPin className="text-[#1E3A8A] mx-auto mb-4" size={48} />
            <p className="text-gray-600 font-bold">25 Castle Haven Road</p>
            <p className="text-gray-600">Hampton, VA 23666</p>
            <a 
              href="https://maps.google.com/?q=25+Castle+Haven+Road+Hampton+VA+23666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#1E3A8A] font-bold hover:text-[#FDB913] transition-colors"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
