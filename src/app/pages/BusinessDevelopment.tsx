import { Link } from 'react-router';
import { Briefcase, Target, TrendingUp, BarChart3, CheckCircle2, ArrowRight, FileText, Lightbulb, Users } from 'lucide-react';

export function BusinessDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1730382625230-3756013c515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGRldmVsb3BtZW50JTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxMTY5MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business Strategy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Business Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Strategic Acquisition Services
          </h1>
          <p className="text-xl text-white/90">
            Driving organizational excellence through expert consulting and acquisition management
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Services</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Comprehensive Acquisition Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide end-to-end acquisition and procurement services that drive mission success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: 'Acquisition Planning',
                description: 'Strategic planning and roadmap development for successful procurements',
                points: [
                  'Market analysis and research',
                  'Requirements development',
                  'Acquisition strategy formulation',
                  'Timeline and milestone planning',
                ],
              },
              {
                icon: Briefcase,
                title: 'Contract Management',
                description: 'Full lifecycle contract management and administration support',
                points: [
                  'Contract development and negotiation',
                  'Performance monitoring',
                  'Modification management',
                  'Closeout procedures',
                ],
              },
              {
                icon: Target,
                title: 'Project Management',
                description: 'Expert project leadership for complex acquisition initiatives',
                points: [
                  'Program planning and execution',
                  'Risk management',
                  'Stakeholder coordination',
                  'Resource optimization',
                ],
              },
              {
                icon: TrendingUp,
                title: 'Strategic Planning & Execution',
                description: 'Long-term strategic planning aligned with organizational goals',
                points: [
                  'Strategic roadmap development',
                  'Process improvement',
                  'Change management',
                  'Performance metrics',
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-[#FDB913]" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1E3A8A]">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Specialized Services</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Advanced Acquisition Capabilities
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Data Analytics */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1E3A8A] p-3 rounded-xl">
                  <BarChart3 className="text-[#FDB913]" size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#1E3A8A]">Data Analytics & Modeling</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Transform acquisition data into actionable insights with our advanced analytics services.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#1E3A8A] mb-2">Data Analysis</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive analysis of acquisition data to identify trends, patterns, and opportunities
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#1E3A8A] mb-2">Predictive Data Modeling</h4>
                  <p className="text-gray-600 text-sm">
                    Forecast future outcomes and requirements using sophisticated predictive models
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#1E3A8A] mb-2">Efficiency Modeling</h4>
                  <p className="text-gray-600 text-sm">
                    Optimize processes and resource allocation for maximum efficiency
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#1E3A8A] mb-2">Effectiveness Modeling</h4>
                  <p className="text-gray-600 text-sm">
                    Measure and enhance the effectiveness of acquisition strategies and outcomes
                  </p>
                </div>
              </div>
            </div>

            {/* Solutions Development */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FDB913] p-3 rounded-xl">
                  <Lightbulb className="text-[#1E3A8A]" size={32} />
                </div>
                <h3 className="text-2xl font-black">Best-In-Class Solutions</h3>
              </div>
              <p className="text-white/90 mb-6">
                Develop innovative, industry-leading solutions tailored to your unique requirements.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom solution design and development',
                  'Industry best practice integration',
                  'Innovation and technology adoption',
                  'Process optimization strategies',
                  'Quality assurance and validation',
                  'Implementation support and guidance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Methodology</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Our Proven Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A structured methodology that ensures consistent, measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assess',
                description: 'Comprehensive evaluation of current state, needs, and objectives',
                icon: Target,
              },
              {
                step: '02',
                title: 'Design',
                description: 'Develop tailored strategies and solutions aligned with your mission',
                icon: Lightbulb,
              },
              {
                step: '03',
                title: 'Implement',
                description: 'Execute with precision, expertise, and hands-on support',
                icon: Briefcase,
              },
              {
                step: '04',
                title: 'Optimize',
                description: 'Monitor, measure, and continuously improve for sustained success',
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#FDB913] to-transparent" />
                )}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl h-full border-t-4 border-[#1E3A8A] relative z-10">
                  <div className="text-6xl font-black text-[#FDB913] mb-4 opacity-20">{item.step}</div>
                  <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1E3A8A] mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Expertise</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-6">
              Deep Federal Acquisition Knowledge
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '26+ Years Experience',
                description: 'Decades of hands-on federal acquisition expertise',
              },
              {
                icon: Target,
                title: 'SPE-Level Knowledge',
                description: 'Senior Procurement Executive perspective and insights',
              },
              {
                icon: BarChart3,
                title: 'Proven Results',
                description: '$500K+ in successful contract delivery',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
                <div className="bg-[#FDB913] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-[#1E3A8A]" size={40} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Track Record</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Delivering Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted by leading federal agencies for critical acquisition projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                agency: 'Department of Defense',
                project: 'Contracting Acceleration Program',
                value: '$460,000+',
              },
              {
                agency: 'Department of Homeland Security',
                project: 'Emerging Leader Training',
                value: '$7,500',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-l-4 border-[#FDB913]">
                <h3 className="text-2xl font-black text-[#1E3A8A] mb-2">{item.agency}</h3>
                <p className="text-gray-700 mb-4">{item.project}</p>
                <div className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-4 py-2 rounded-lg font-bold">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold hover:text-[#FDB913] transition-colors"
            >
              View Full Past Performance <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
            Ready to Transform Your Acquisition Program?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how our business development services can drive your mission success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all"
            >
              Schedule Consultation <ArrowRight />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2563EB] transition-all"
            >
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
