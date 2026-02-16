import { Award, Users, Target, Shield, Star, Briefcase, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1760246964044-1384f71665b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NzExNjkyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Corporate Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Excellence in Federal Acquisition Since 1998
          </h1>
          <p className="text-xl text-white/90">
            Your trusted partner for acquisition consulting, training, and development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-12 rounded-3xl text-white">
              <div className="w-16 h-16 bg-[#FDB913] rounded-xl flex items-center justify-center mb-6">
                <Target className="text-[#1E3A8A]" size={32} />
              </div>
              <h2 className="text-3xl font-black mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To empower federal government teams and individuals through strategic consulting, 
                innovative training, and comprehensive development services that enhance effectiveness 
                in acquisition, contracting, leadership, and administrative management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FDB913] to-[#FBBF24] p-12 rounded-3xl text-[#1E3A8A]">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-6">
                <Star className="text-[#FDB913]" size={32} />
              </div>
              <h2 className="text-3xl font-black mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be the premier provider of acquisition excellence, recognized for transforming 
                federal procurement teams through experiential learning, demonstrated expertise, 
                and unwavering commitment to mission success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Story</span>
              </div>
              <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
                Built on a Foundation of Excellence
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  THINK Acquisition was founded with a clear purpose: to bridge the gap between 
                  theoretical acquisition knowledge and practical, real-world application in the 
                  federal government sector.
                </p>
                <p>
                  With over 26 years of distinguished service in federal acquisition and procurement, 
                  our founder brings Senior Procurement Executive (SPE) level experience and former 
                  Head of Contracting Activity credentials to every engagement.
                </p>
                <p>
                  Throughout our journey, we've had the privilege of training and developing generations 
                  of contracting professionals, delivering over $500K in contract value, and maintaining 
                  a 100% client satisfaction rate.
                </p>
                <p>
                  Today, we continue to serve federal agencies with the same dedication and expertise 
                  that has defined our reputation for over two decades.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcxMTQ3MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#FDB913] rounded-2xl -z-10" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#1E3A8A] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Leadership</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Meet Our Founder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-black text-[#FDB913]">WR</div>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1E3A8A] mb-2">William Randolph</h3>
                  <p className="text-xl text-gray-600 mb-4">Founder & Principal Consultant</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-sm">
                      SPE Level Experience
                    </span>
                    <span className="bg-[#FDB913] text-[#1E3A8A] px-3 py-1 rounded-full text-sm">
                      Former HCA
                    </span>
                    <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                      26+ Years
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  William Randolph brings over 26 years of distinguished federal acquisition experience 
                  to THINK Acquisition. His extensive background includes serving at the Senior Procurement 
                  Executive (SPE) level and as a Head of Contracting Activity (HCA), providing him with 
                  unparalleled insight into federal procurement processes and best practices.
                </p>
                <p>
                  Throughout his career, William has been entrusted with training and developing generations 
                  of newly hired contracting interns, establishing himself as a respected educator and mentor 
                  in the acquisition community. His deep expertise spans acquisition methodology, contracting 
                  strategy, project management, and leadership development.
                </p>
                <p>
                  William's approach combines theoretical knowledge with practical, real-world application, 
                  ensuring that every training program and consulting engagement delivers measurable value 
                  and lasting impact for federal acquisition teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Core Values</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We pursue the highest standards in everything we do, from training delivery to client service.',
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'We operate with unwavering honesty, transparency, and ethical principles in all our engagements.',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We work as true partners with our clients, fostering teamwork and mutual success.',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'We continuously seek new and better ways to deliver value and drive improvement.',
              },
              {
                icon: Briefcase,
                title: 'Expertise',
                description: 'We leverage deep knowledge and real-world experience to provide practical, actionable solutions.',
              },
              {
                icon: Star,
                title: 'Results',
                description: 'We focus on delivering measurable outcomes that advance our clients\' missions.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="bg-[#FDB913] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-[#1E3A8A]" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Certifications</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Certified & Recognized
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: 'SDVOSB',
                title: 'Service-Disabled Veteran-Owned Small Business',
                description: 'Certified by the Department of Veterans Affairs',
              },
              {
                badge: 'MBE',
                title: 'Minority Business Enterprise',
                description: 'Recognized minority-owned business',
              },
              {
                badge: 'SWaM',
                title: 'Small, Women-owned, and Minority-owned Business',
                description: 'Virginia SWaM certified',
              },
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center border-t-4 border-[#FDB913]">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-[#FDB913]" size={48} />
                </div>
                <div className="text-4xl font-black text-[#1E3A8A] mb-3">{cert.badge}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
            Our Commitment to You
          </h2>
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At THINK Acquisition, we are committed to delivering exceptional value through 
              experiential learning, demonstrated expertise, and unwavering dedication to your mission. 
              We understand the unique challenges facing federal acquisition professionals, and we're 
              here to provide the knowledge, skills, and support you need to excel.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Tailored Solutions',
                'Proven Results',
                'Ongoing Support',
              ].map((commitment, index) => (
                <div key={index} className="flex items-center gap-2 justify-center text-[#1E3A8A]">
                  <CheckCircle2 className="text-[#FDB913]" size={24} />
                  <span className="font-bold">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
