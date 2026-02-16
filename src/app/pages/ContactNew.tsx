import { Mail, Phone, MapPin, Send, Clock, Award, Users, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agency: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-[fadeInUp_0.6s_ease-out]">
              <span className="bg-[#FDB913] text-[#1E3A8A] px-4 py-2 rounded-full font-bold text-sm">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-[fadeInUp_0.8s_ease-out]">
              Let's Start a
              <span className="block text-[#FDB913] mt-2">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-[fadeInUp_1s_ease-out]">
              Ready to elevate your federal acquisition capabilities? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-3xl shadow-professional-xl p-8">
                <h2 className="text-2xl font-black text-[#1E3A8A] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#FDB913]" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1E3A8A] mb-1">Phone</div>
                      <a href="tel:7038196192" className="text-gray-700 hover:text-[#FDB913] transition-colors">
                        (703) 819-6192
                      </a>
                      <div className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#FDB913]" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1E3A8A] mb-1">Email</div>
                      <a href="mailto:william@thinkacquisition.net" className="text-gray-700 hover:text-[#FDB913] transition-colors break-all">
                        william@thinkacquisition.net
                      </a>
                      <div className="text-sm text-gray-500 mt-1">24-hour response time</div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#FDB913]" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1E3A8A] mb-1">Address</div>
                      <div className="text-gray-700">
                        25 Castle Haven Road<br />
                        Hampton, VA 23666
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl shadow-professional-xl p-8 text-white">
                <h3 className="text-xl font-black mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Free consultation',
                    'Custom training solutions',
                    'Flexible scheduling',
                    'Competitive pricing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#FDB913] flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Info */}
              <div className="bg-white rounded-3xl shadow-professional-xl p-8">
                <h3 className="text-xl font-black text-[#1E3A8A] mb-4">Business Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CAGE Code:</span>
                    <span className="font-bold text-[#1E3A8A]">89VE7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UEI:</span>
                    <span className="font-bold text-[#1E3A8A]">M2MINJSD9FD3</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-xs font-bold">SDVOSB</span>
                      <span className="bg-[#FDB913] text-[#1E3A8A] px-3 py-1 rounded-full text-xs font-bold">MBE</span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">SWaM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-professional-xl p-10">
                <h2 className="text-3xl font-black text-[#1E3A8A] mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors"
                        placeholder="john.doe@agency.gov"
                      />
                    </div>
                  </div>

                  {/* Phone & Agency */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors"
                        placeholder="(703) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="agency" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                        Agency/Organization
                      </label>
                      <input
                        type="text"
                        id="agency"
                        name="agency"
                        value={formData.agency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors"
                        placeholder="Department of Defense"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="training">Professional Training</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="program-management">Program Management</option>
                      <option value="workforce-development">Workforce Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your needs and how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-professional-lg"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-10 text-white text-center shadow-professional-xl">
            <Clock className="mx-auto mb-4 text-[#FDB913]" size={48} />
            <h3 className="text-3xl font-black mb-4">24-Hour Response Guarantee</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We value your time. You'll receive a response to your inquiry within one business day, 
              or your consultation is complimentary.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, number: '<24hrs', label: 'Average Response Time' },
              { icon: Users, number: '500+', label: 'Satisfied Clients' },
              { icon: Award, number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-professional-lg">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-[#FDB913]" size={32} />
                </div>
                <div className="text-4xl font-black text-[#1E3A8A] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
