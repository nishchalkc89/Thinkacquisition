import { Link } from 'react-router';
import { 
  ArrowRight, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  BookOpen,
  Target,
  Zap,
  Shield,
  Star,
  Quote
} from 'lucide-react';

export function HomeNew() {
  return (
    <div className="bg-white">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white animate-[fadeInUp_0.8s_ease-out]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-professional-lg">
                <Award size={18} />
                <span>26+ Years of Federal Excellence</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Elevate Your
                <span className="block text-[#FDB913]">Federal Acquisition</span>
                Excellence
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Strategic consulting, world-class training, and proven methodologies 
                that transform federal acquisition teams into high-performing units.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-10">
                {[
                  'SPE-Level Expertise & Credentials',
                  'Customized Training Programs',
                  'Proven Track Record with DOD & DHS'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#FDB913] flex-shrink-0" size={24} />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/training"
                  className="btn-primary group bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:shadow-professional-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Training Programs
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Right Visual - Stats Cards */}
            <div className="relative animate-[fadeInUp_1s_ease-out]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '26+', label: 'Years Experience', icon: Award, gradient: 'from-blue-500 to-blue-700' },
                  { number: '500+', label: 'Trained Professionals', icon: Users, gradient: 'from-purple-500 to-purple-700' },
                  { number: '$500K+', label: 'Contract Value', icon: TrendingUp, gradient: 'from-green-500 to-green-700' },
                  { number: '100%', label: 'Client Satisfaction', icon: Star, gradient: 'from-yellow-500 to-yellow-600' },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-br ${stat.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="text-white" size={28} />
                    </div>
                    <div className="text-4xl font-black text-white mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider mb-4">Trusted by Leading Federal Agencies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {['DOD', 'DHS', 'GSA', 'VA'].map((agency, index) => (
              <div key={index} className="text-4xl font-black text-[#1E3A8A]">
                {agency}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - Modern Card Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Comprehensive Solutions for Federal Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver integrated services that enhance every aspect of your acquisition operations
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Professional Training',
                description: 'Industry-leading programs for acquisition professionals',
                color: 'blue',
                link: '/training'
              },
              {
                icon: Target,
                title: 'Strategic Consulting',
                description: 'Expert guidance for complex acquisition challenges',
                color: 'purple',
                link: '/business-development'
              },
              {
                icon: Zap,
                title: 'Process Optimization',
                description: 'Streamline operations and improve efficiency',
                color: 'green',
                link: '/business-development'
              },
              {
                icon: Shield,
                title: 'Compliance Assurance',
                description: 'Navigate regulations with confidence',
                color: 'yellow',
                link: '/business-development'
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#1E3A8A] transition-all duration-300 hover:shadow-professional-xl stagger-item"
              >
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-[#FDB913]" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-[#1E3A8A] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Arrow */}
                <div className="flex items-center text-[#1E3A8A] font-bold text-sm">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Think Acquisition - Visual Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-professional-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExNTkyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-professional-xl">
                <div className="text-5xl font-black text-[#1E3A8A] mb-2">98%</div>
                <div className="text-gray-600 font-medium">Recommend Us</div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Why Think Acquisition</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
                Your Partner in Federal Acquisition Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With over two decades of specialized experience, we've become the trusted advisor 
                for federal agencies seeking to transform their acquisition capabilities.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Proven Expertise',
                    description: 'SPE-level credentials and real-world federal experience'
                  },
                  {
                    title: 'Customized Approach',
                    description: 'Solutions tailored to your agency\'s unique needs'
                  },
                  {
                    title: 'Measurable Results',
                    description: 'Track record of improved performance and efficiency'
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'Partnership that extends beyond training delivery'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-[#FDB913] w-8 h-8 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="text-[#1E3A8A]" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E3A8A] mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2563EB] transition-all hover:shadow-professional-lg"
              >
                Learn About Our Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Think Acquisition transformed our procurement team's capabilities. The training was practical, engaging, and immediately applicable.",
                author: "Director of Contracting",
                agency: "Department of Defense",
                rating: 5
              },
              {
                quote: "The expertise and professionalism demonstrated by Think Acquisition is unmatched. They truly understand federal acquisition.",
                author: "Acquisition Manager",
                agency: "Department of Homeland Security",
                rating: 5
              },
              {
                quote: "Outstanding training delivery and support. Our team's performance improved significantly after working with Think Acquisition.",
                author: "Program Manager",
                agency: "General Services Administration",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-professional-lg transition-all">
                {/* Quote Icon */}
                <Quote className="text-[#FDB913] mb-4" size={40} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#FDB913] fill-current" size={20} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#1E3A8A]">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.agency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Direct */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Elevate Your Team?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Let's discuss how we can help you achieve acquisition excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-[#FDB913] text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-professional-xl"
            >
              Schedule a Consultation <ArrowRight size={24} />
            </Link>
            <Link
              to="/training"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all inline-flex items-center justify-center"
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
