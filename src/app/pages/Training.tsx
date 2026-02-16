import { Link } from 'react-router';
import { GraduationCap, Users, Award, Target, CheckCircle2, ArrowRight, Clock, TrendingUp } from 'lucide-react';

export function Training() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHdvcmtzaG9wJTIwc2VtaW5hciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExNjkyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Training Workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Training & Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Transform Your Acquisition Team
          </h1>
          <p className="text-xl text-white/90">
            Comprehensive training programs designed for federal acquisition excellence
          </p>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Approach</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Experiential Learning That Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine decades of real-world federal contracting experience with cutting-edge 
              training methodologies to deliver practical, immediately applicable knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Needs Assessment',
                description: 'Understanding your specific challenges and goals',
              },
              {
                icon: GraduationCap,
                title: 'Customized Design',
                description: 'Tailored curriculum for your team',
              },
              {
                icon: Users,
                title: 'Interactive Delivery',
                description: 'Hands-on, engaging training sessions',
              },
              {
                icon: TrendingUp,
                title: 'Performance Tracking',
                description: 'Measurable results and ongoing support',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#FDB913] to-transparent -z-10" />
                )}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl h-full border-t-4 border-[#1E3A8A]">
                  <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="text-[#FDB913]" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#1E3A8A] mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Programs</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Comprehensive Training Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Federal Acquisition Training */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMGNvbmZlcmVuY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3MTE2MDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Federal Acquisition"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#1E3A8A] p-2 rounded-lg">
                    <GraduationCap className="text-[#FDB913]" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1E3A8A]">Federal Acquisition Training</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Comprehensive programs covering the full spectrum of federal acquisition processes, 
                  regulations, and best practices.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'FAR & DFARS Compliance',
                    'Contract Types & Selection',
                    'Acquisition Planning & Strategy',
                    'Market Research Techniques',
                    'Source Selection',
                    'Contract Administration',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-[#1E3A8A] font-bold text-sm">
                  <Clock className="mr-2" size={16} />
                  1-5 Days | Customizable Duration
                </div>
              </div>
            </div>

            {/* Leadership Development */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwZXhlY3V0aXZlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxMTU5NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#FDB913] p-2 rounded-lg">
                    <Award className="text-[#1E3A8A]" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1E3A8A]">Leadership Development</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Build strong leaders who can effectively manage acquisition teams and drive 
                  organizational excellence.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Transformational Leadership',
                    'Strategic Decision Making',
                    'Conflict Resolution',
                    'Team Building & Motivation',
                    'Change Management',
                    'Executive Presence',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-[#1E3A8A] font-bold text-sm">
                  <Clock className="mr-2" size={16} />
                  2-3 Days | Executive Coaching Available
                </div>
              </div>
            </div>

            {/* High Performance Teams */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcxMTQ3MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#1E3A8A] p-2 rounded-lg">
                    <Users className="text-[#FDB913]" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1E3A8A]">High Performance Teams</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Develop cohesive, high-functioning teams that deliver exceptional results through 
                  effective collaboration.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Team Dynamics & Roles',
                    'Communication Excellence',
                    'Collaborative Problem Solving',
                    'Performance Accountability',
                    'Trust Building',
                    'Goal Alignment',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-[#1E3A8A] font-bold text-sm">
                  <Clock className="mr-2" size={16} />
                  1-2 Days | Team Assessment Included
                </div>
              </div>
            </div>

            {/* Executive Coaching */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554686177-87b3c0e1a575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjb2FjaCUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExNjAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Executive Coaching"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#FDB913] p-2 rounded-lg">
                    <Target className="text-[#1E3A8A]" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1E3A8A]">Executive Coaching</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  One-on-one personalized coaching for senior acquisition leaders to maximize their 
                  impact and effectiveness.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Leadership Assessment',
                    'Strategic Thinking Development',
                    'Stakeholder Management',
                    'Career Advancement Planning',
                    'Performance Optimization',
                    'Confidential Support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-[#1E3A8A] font-bold text-sm">
                  <Clock className="mr-2" size={16} />
                  6-12 Months | Flexible Sessions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Topics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Workshop Topics</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Specialized Training Workshops
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              In-depth sessions on critical acquisition and leadership topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Contracts Management and Procurement Execution',
              'Federal Acquisition Systems and Guiding Principles',
              'Market Research Strategies',
              'Purchase Requests (PR) Processes',
              'Performance-Based Acquisitions',
              'SOW vs. SOO vs. PWS',
              'Independent Government Cost Estimates (IGCE)',
              'COR Training and Refreshers',
              'DISC Workplace Behavioral Assessments',
              'Soft Skill Development and Coaching',
              'Workforce Development Strategies',
              'Strategic Communication Skills',
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-[#FDB913] hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Benefits</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-6">
              What You'll Gain
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Enhanced Skills',
                description: 'Practical knowledge you can apply immediately',
              },
              {
                title: 'Increased Confidence',
                description: 'Master complex acquisition scenarios',
              },
              {
                title: 'Better Decisions',
                description: 'Make informed, strategic choices',
              },
              {
                title: 'Career Growth',
                description: 'Advance your professional development',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                <div className="text-5xl font-black text-[#FDB913] mb-4">{(index + 1).toString().padStart(2, '0')}</div>
                <h3 className="text-xl font-black text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
            Ready to Elevate Your Team's Performance?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how our training programs can help you achieve your acquisition excellence goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all"
            >
              Request Training Info <ArrowRight />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2563EB] transition-all"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
