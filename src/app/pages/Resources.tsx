import { Link } from 'react-router';
import { BookOpen, Download, FileText, Award, TrendingUp, CheckCircle2, ArrowRight, Newspaper } from 'lucide-react';

export function Resources() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1767102060241-130cb9260718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZXNvdXJjZXMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzExNjkyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Library Resources"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl text-white/90">
            Access valuable insights, guides, and resources for acquisition excellence
          </p>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-[#FDB913] text-[#1E3A8A] px-3 py-1 rounded-full text-sm font-bold">
                  FEATURED RESOURCE
                </span>
              </div>
              <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
                Top 10 Best Practices for Federal Acquisition Excellence
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Download our comprehensive guide covering essential strategies and techniques 
                that federal acquisition professionals need to achieve excellence in their roles.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Strategic acquisition planning frameworks',
                  'Risk mitigation strategies',
                  'Vendor management best practices',
                  'Compliance and regulatory guidance',
                  'Performance measurement metrics',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center gap-2">
                Download Free Guide <Download size={20} />
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Join 500+ acquisition professionals who have downloaded this guide
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-2xl">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Download className="text-[#FDB913]" size={64} />
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-[#1E3A8A] mb-2">47</div>
                  <p className="text-gray-600">Pages of Expert Insights</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#FDB913] rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Categories</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Explore Our Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'FAR Updates & Analysis',
                description: 'Stay current with the latest Federal Acquisition Regulation changes and interpretations',
                count: '15+ Articles',
                color: 'from-[#1E3A8A] to-[#2563EB]',
              },
              {
                icon: BookOpen,
                title: 'Best Practice Guides',
                description: 'Comprehensive guides covering essential acquisition processes and methodologies',
                count: '10+ Guides',
                color: 'from-[#FDB913] to-[#FBBF24]',
              },
              {
                icon: Newspaper,
                title: 'Industry Whitepapers',
                description: 'In-depth analysis of trends, challenges, and innovations in federal acquisition',
                count: '8+ Papers',
                color: 'from-[#1E3A8A] to-[#2563EB]',
              },
              {
                icon: Award,
                title: 'Training Resources',
                description: 'Supplemental materials, templates, and tools for acquisition professionals',
                count: '25+ Resources',
                color: 'from-[#FDB913] to-[#FBBF24]',
              },
              {
                icon: TrendingUp,
                title: 'Case Studies',
                description: 'Real-world examples of successful acquisition strategies and outcomes',
                count: '12+ Studies',
                color: 'from-[#1E3A8A] to-[#2563EB]',
              },
              {
                icon: BookOpen,
                title: 'Webinars & Recordings',
                description: 'On-demand access to expert presentations and training sessions',
                count: 'Coming Soon',
                color: 'from-[#FDB913] to-[#FBBF24]',
              },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className={`bg-gradient-to-br ${category.color} p-6`}>
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="text-white" size={32} />
                  </div>
                  <div className="text-white/90 text-sm font-bold">{category.count}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1E3A8A] mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <button className="text-[#1E3A8A] font-bold text-sm flex items-center gap-2 group-hover:text-[#FDB913] transition-colors">
                    Explore Resources <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Latest Updates</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Recent Additions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Guide',
                title: 'Effective Market Research Strategies for 2026',
                date: 'February 2026',
                description: 'Learn proven techniques for conducting comprehensive market research that supports informed acquisition decisions.',
              },
              {
                type: 'Analysis',
                title: 'FAR Part 15 Updates: What You Need to Know',
                date: 'January 2026',
                description: 'Detailed analysis of recent changes to FAR Part 15 and their implications for contracting officers.',
              },
              {
                type: 'Case Study',
                title: 'Successful Implementation of Performance-Based Acquisitions',
                date: 'December 2025',
                description: 'Real-world example of how one agency transformed its acquisition approach with measurable results.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {item.type}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-black text-[#1E3A8A] mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <button className="text-[#1E3A8A] font-bold text-sm flex items-center gap-2 hover:text-[#FDB913] transition-colors">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <div className="bg-[#FDB913] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
              <Newspaper className="text-[#1E3A8A]" size={40} />
            </div>
          </div>
          <h2 className="text-4xl font-black text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest insights, resources, and updates in federal acquisition.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 1,000+ acquisition professionals who receive our monthly insights
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Tools & Templates</span>
            </div>
            <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
              Practical Resources
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Download ready-to-use templates and tools to streamline your acquisition processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Acquisition Strategy Template',
              'Market Research Checklist',
              'IGCE Development Worksheet',
              'Performance Metrics Dashboard',
              'Risk Assessment Matrix',
              'Contract Closeout Checklist',
            ].map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl flex items-center justify-between hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1E3A8A] w-12 h-12 rounded-lg flex items-center justify-center">
                    <FileText className="text-[#FDB913]" size={24} />
                  </div>
                  <span className="font-bold text-gray-800">{tool}</span>
                </div>
                <button className="bg-[#FDB913] text-[#1E3A8A] px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2">
                  <Download size={16} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-[#1E3A8A] mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our experts are here to help you navigate complex acquisition challenges
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all"
          >
            Contact Our Team <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
