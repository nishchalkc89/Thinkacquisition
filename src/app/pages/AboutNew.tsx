import { Link } from 'react-router';
import { 
  ArrowRight, 
  Award, 
  Target, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Building2,
  Shield
} from 'lucide-react';

export function AboutNew() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-[fadeInUp_0.6s_ease-out]">
              <span className="bg-[#FDB913] text-[#1E3A8A] px-4 py-2 rounded-full font-bold text-sm">About Think Acquisition</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-[fadeInUp_0.8s_ease-out]">
              Excellence in Federal Acquisition
              <span className="block text-[#FDB913] mt-2">Since 2000</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-[fadeInUp_1s_ease-out]">
              Over two decades of proven expertise in federal acquisition consulting, 
              training, and workforce development
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-10 text-white shadow-professional-xl">
              <div className="bg-[#FDB913] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-[#1E3A8A]" size={32} />
              </div>
              <h2 className="text-3xl font-black mb-4">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To increase the effectiveness of federal government teams and individuals through 
                experiential learning, demonstrated expertise, and innovative solutions that drive 
                mission success and operational excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-3xl p-10 text-[#1E3A8A] shadow-professional-xl">
              <div className="bg-[#1E3A8A] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-[#FDB913]" size={32} />
              </div>
              <h2 className="text-3xl font-black mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be the most trusted and sought-after partner for federal acquisition excellence, 
                recognized for transforming organizations through exceptional training, strategic 
                consulting, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-professional-xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcxMTU5MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FDB913] rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E3A8A] rounded-3xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
                Built on Experience,
                <span className="block">Driven by Excellence</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2000, Think Acquisition emerged from a simple but powerful vision: 
                  to transform how federal agencies approach acquisition and procurement.
                </p>
                <p>
                  With over 26 years of combined federal acquisition experience, our founders 
                  recognized a critical need for specialized, practical training that goes beyond 
                  theory to deliver real-world results.
                </p>
                <p>
                  Today, we're proud to have trained over 500 federal acquisition professionals 
                  and supported agencies including the Department of Defense, Department of 
                  Homeland Security, and the General Services Administration.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { number: '26+', label: 'Years' },
                  { number: '500+', label: 'Trained' },
                  { number: '98%', label: 'Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black text-[#1E3A8A] mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Unwavering commitment to ethical practices and transparency'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Relentless pursuit of the highest quality in everything we do'
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'Collaborative approach focused on client success'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Continuous improvement and forward-thinking solutions'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group stagger-item">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-professional-lg">
                  <value.icon className="text-[#FDB913]" size={40} />
                </div>
                <h3 className="text-xl font-black text-[#1E3A8A] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Expert Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SPE-level credentials and decades of federal acquisition experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-professional-xl overflow-hidden">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center p-12">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                    <Briefcase className="text-[#1E3A8A]" size={64} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-10">
                  <h3 className="text-3xl font-black text-[#1E3A8A] mb-2">William Alexander</h3>
                  <p className="text-[#FDB913] font-bold mb-4">Founder & Senior Acquisition Consultant</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      With over 26 years of federal acquisition experience, William brings 
                      unparalleled expertise to every engagement.
                    </p>
                    <p>
                      His credentials include Senior Procurement Executive (SPE) level certifications 
                      and extensive experience working with DOD, DHS, and other major federal agencies.
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-xs font-bold">SPE Certified</span>
                    <span className="bg-[#FDB913] text-[#1E3A8A] px-3 py-1 rounded-full text-xs font-bold">FAC-C Level III</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">PMP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Qualifications</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mt-4 mb-6">
              Certifications & Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Service-Disabled Veteran-Owned Small Business',
                code: 'SDVOSB'
              },
              {
                icon: Building2,
                title: 'Minority Business Enterprise',
                code: 'MBE'
              },
              {
                icon: GraduationCap,
                title: 'Small, Women-owned, and Minority-owned Business',
                code: 'SWaM'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#1E3A8A] hover:shadow-professional-lg transition-all">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="text-[#FDB913]" size={32} />
                </div>
                <div className="bg-[#FDB913] text-[#1E3A8A] px-4 py-2 rounded-full font-black text-sm inline-block mb-4">
                  {cert.code}
                </div>
                <p className="text-gray-700 font-medium">{cert.title}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 text-center text-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-bold text-lg mb-2">CAGE Code</div>
                <div className="text-[#FDB913] text-2xl font-black">89VE7</div>
              </div>
              <div>
                <div className="font-bold text-lg mb-2">UEI Number</div>
                <div className="text-[#FDB913] text-2xl font-black">M2MINJSD9FD3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Let's discuss how we can support your agency's acquisition goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-professional-lg"
            >
              Get In Touch <ArrowRight />
            </Link>
            <Link
              to="/training"
              className="bg-[#1E3A8A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2563EB] transition-all inline-flex items-center justify-center"
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
