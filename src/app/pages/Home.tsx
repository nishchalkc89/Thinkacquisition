import { Link } from 'react-router';
import { ArrowRight, Award, Users, TrendingUp, Star, CheckCircle2 } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1762075314731-43d62a33c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzExNTk3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Government Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <div className="bg-[#FDB913] px-6 py-2 rounded-full shadow-professional">
              <p className="text-[#1E3A8A] font-bold">26 Years of Excellence</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out]">
            Federal Acquisition
            <br />
            <span className="text-[#FDB913]">Expertise That Delivers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out]">
            Empowering federal teams with strategic consulting, training, and development services 
            in procurement, acquisition, and program management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1.2s_ease-out]">
            <Link 
              to="/training"
              className="btn-primary bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-professional-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Training <ArrowRight />
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 hover:shadow-professional-lg transition-all transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '26+', label: 'Years Experience', icon: Award },
              { number: '500+', label: 'Professionals Trained', icon: Users },
              { number: '$500K+', label: 'Contract Value', icon: TrendingUp },
              { number: '100%', label: 'Client Satisfaction', icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center group stagger-item">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-professional-lg">
                  <stat.icon className="text-[#FDB913]" size={40} />
                </div>
                <div className="text-5xl font-black text-[#1E3A8A] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTE1MzAzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FDB913] rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E3A8A] rounded-2xl -z-10" />
            </div>
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
                Your Trusted Partner in Federal Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                THINK Acquisition is an independent consulting, training and development firm 
                focused on increasing the effectiveness of federal government teams and individuals.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We deliver value through experiential learning & demonstrated expertise, combining 
                decades of real-world federal contracting experience with cutting-edge training methodologies.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2563EB] transition-all"
              >
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
              Comprehensive Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Training Card */}
            <Link to="/training" className="group card-hover">
              <div className="relative overflow-hidden rounded-3xl shadow-professional-xl h-full">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTE2MDA2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Training"
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="relative bg-gradient-to-t from-[#1E3A8A]/95 to-transparent p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <h3 className="text-3xl font-black text-white mb-4">Training & Development</h3>
                  <p className="text-white/90 mb-4">
                    Comprehensive training programs designed to enhance acquisition expertise and leadership capabilities.
                  </p>
                  <div className="flex items-center text-[#FDB913] font-bold">
                    Explore Training Programs <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Business Development Card */}
            <Link to="/business-development" className="group card-hover">
              <div className="relative overflow-hidden rounded-3xl shadow-professional-xl h-full">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1730382625230-3756013c515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGRldmVsb3BtZW50JTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxMTY5MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business Development"
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="relative bg-gradient-to-t from-[#FDB913]/95 to-transparent p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <h3 className="text-3xl font-black text-[#1E3A8A] mb-4">Business Development</h3>
                  <p className="text-[#1E3A8A]/90 mb-4">
                    Strategic consulting and acquisition services that drive organizational excellence and mission success.
                  </p>
                  <div className="flex items-center text-[#1E3A8A] font-bold">
                    View Our Services <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#FDB913] font-bold text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              The THINK Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Expertise',
                description: '26+ years of federal acquisition experience with SPE-level credentials',
              },
              {
                title: 'Tailored Solutions',
                description: 'Customized programs designed for your specific agency needs',
              },
              {
                title: 'Measurable Results',
                description: 'Track record of delivering quantifiable improvements in team performance',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-[#FDB913]" size={32} />
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
            Ready to Transform Your Acquisition Team?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you achieve excellence in federal acquisition.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            Contact Us Today <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}