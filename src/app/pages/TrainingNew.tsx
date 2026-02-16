import { Link } from 'react-router';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Clock,
  Users,
  Award,
  Target,
  TrendingUp,
  FileText,
  Video,
  Calendar
} from 'lucide-react';

export function TrainingNew() {
  const courses = [
    {
      category: 'Foundational',
      color: 'blue',
      programs: [
        {
          title: 'Federal Acquisition Fundamentals (FAC-C Level I)',
          duration: '40 hours',
          format: 'Virtual/In-Person',
          description: 'Comprehensive introduction to federal acquisition principles and practices',
          highlights: [
            'FAR basics and fundamentals',
            'Market research essentials',
            'Acquisition planning',
            'Contract formation'
          ]
        },
        {
          title: 'Contracting Officer Representative (COR) Certification',
          duration: '32 hours',
          format: 'Virtual/In-Person',
          description: 'Essential training for effective contract oversight and administration',
          highlights: [
            'COR roles and responsibilities',
            'Contract monitoring',
            'Performance management',
            'Documentation requirements'
          ]
        }
      ]
    },
    {
      category: 'Intermediate',
      color: 'purple',
      programs: [
        {
          title: 'Advanced Contract Management (FAC-C Level II)',
          duration: '80 hours',
          format: 'Virtual/In-Person',
          description: 'In-depth exploration of complex contracting strategies and execution',
          highlights: [
            'Complex procurement methods',
            'Source selection',
            'Contract types and strategies',
            'Negotiation techniques'
          ]
        },
        {
          title: 'Program Management for Acquisition Professionals',
          duration: '40 hours',
          format: 'Virtual',
          description: 'Integrating program management principles with acquisition excellence',
          highlights: [
            'Integrated program planning',
            'Stakeholder management',
            'Risk management',
            'Performance metrics'
          ]
        }
      ]
    },
    {
      category: 'Advanced',
      color: 'green',
      programs: [
        {
          title: 'Senior Contracting Professional (FAC-C Level III)',
          duration: '120 hours',
          format: 'Hybrid',
          description: 'Executive-level training for senior acquisition leaders',
          highlights: [
            'Strategic acquisition planning',
            'Leadership and team development',
            'Complex negotiations',
            'Policy development'
          ]
        },
        {
          title: 'Acquisition Analytics & Data-Driven Decision Making',
          duration: '24 hours',
          format: 'Virtual',
          description: 'Leveraging data analytics for improved acquisition outcomes',
          highlights: [
            'Data visualization',
            'Predictive analytics',
            'Performance measurement',
            'Decision support systems'
          ]
        }
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from SPE-level professionals with decades of federal acquisition experience'
    },
    {
      icon: Target,
      title: 'Practical Application',
      description: 'Hands-on exercises and real-world scenarios that mirror actual challenges'
    },
    {
      icon: Award,
      title: 'Official Certification',
      description: 'Earn recognized credentials and continuing learning units (CLUs)'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Accelerate your career with skills that federal agencies value'
    }
  ];

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
              <span className="bg-[#FDB913] text-[#1E3A8A] px-4 py-2 rounded-full font-bold text-sm">Professional Training</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-[fadeInUp_0.8s_ease-out]">
              Transform Your Team
              <span className="block text-[#FDB913] mt-2">With Expert Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 animate-[fadeInUp_1s_ease-out]">
              Industry-leading programs designed to elevate federal acquisition professionals 
              at every career stage
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-professional-xl animate-[fadeInUp_1.2s_ease-out]"
            >
              Schedule a Consultation <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              The Think Acquisition Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group stagger-item">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-professional-lg">
                  <feature.icon className="text-[#FDB913]" size={40} />
                </div>
                <h3 className="text-xl font-black text-[#1E3A8A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Comprehensive Training Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From foundational skills to executive leadership, we offer programs for every career stage
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-6 py-2 rounded-full font-black">
                    {section.category}
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#1E3A8A] to-transparent" />
                </div>

                {/* Programs Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {section.programs.map((program, programIndex) => (
                    <div key={programIndex} className="bg-white rounded-3xl shadow-professional-xl overflow-hidden border border-gray-200 hover:border-[#1E3A8A] transition-all hover:shadow-professional-xl group">
                      {/* Header */}
                      <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 text-white">
                        <h3 className="text-2xl font-black mb-4">{program.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            <Clock size={16} />
                            {program.duration}
                          </div>
                          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            <Video size={16} />
                            {program.format}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                        
                        <h4 className="font-bold text-[#1E3A8A] mb-4">Key Topics:</h4>
                        <ul className="space-y-3 mb-6">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="text-[#FDB913] flex-shrink-0 mt-0.5" size={20} />
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold hover:text-[#2563EB] group-hover:gap-4 transition-all"
                        >
                          Learn More <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Flexible Learning</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Training Delivery Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Virtual Instructor-Led',
                description: 'Live, interactive sessions with expert instructors from anywhere',
                features: ['Real-time Q&A', 'Interactive exercises', 'Digital materials', 'Recording access']
              },
              {
                icon: Users,
                title: 'On-Site Training',
                description: 'Customized programs delivered at your agency location',
                features: ['Tailored content', 'Team building', 'Hands-on labs', 'Agency-specific scenarios']
              },
              {
                icon: BookOpen,
                title: 'Hybrid Learning',
                description: 'Blended approach combining virtual and in-person elements',
                features: ['Maximum flexibility', 'Self-paced modules', 'Live workshops', 'Continuous support']
              }
            ].map((format, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#1E3A8A] hover:shadow-professional-lg transition-all">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <format.icon className="text-[#FDB913]" size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#1E3A8A] mb-4">{format.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="text-[#FDB913] flex-shrink-0" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Simple 4-Step Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs and objectives', icon: Users },
              { step: '02', title: 'Customization', description: 'Program tailored to your requirements', icon: Target },
              { step: '03', title: 'Delivery', description: 'Expert-led training execution', icon: Award },
              { step: '04', title: 'Follow-Up', description: 'Ongoing support and evaluation', icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-professional-lg text-center">
                  <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-[#FDB913]" size={32} />
                  </div>
                  <div className="text-[#FDB913] text-4xl font-black mb-2">{item.step}</div>
                  <h3 className="text-xl font-black text-[#1E3A8A] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-[#1E3A8A]" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Elevate Your Team's Skills?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Let's design a training program that delivers measurable results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-[#FDB913] text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-professional-xl"
            >
              Request Information <ArrowRight size={24} />
            </Link>
            <a
              href="tel:7038196192"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all inline-flex items-center justify-center"
            >
              Call (703) 819-6192
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
