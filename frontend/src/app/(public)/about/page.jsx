import Image from "next/image";
import { Target, Eye, Heart, Users, Shield, Zap, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-secondary scroll-smooth">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              About <span className="text-orange-600">SaralMarg.ai</span>
            </h1>
            <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Revolutionizing road infrastructure management through AI-powered solutions, 
              connecting citizens and officials for safer, smarter roads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 mb-16">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="relative group">
                <div className="relative w-full h-auto aspect-video rounded-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                  <Image
                    src="/about.png"
                    alt="About SaralMarg"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 opacity-0"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors duration-300">
                    <Target className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To empower citizens and government officials with AI-driven tools that 
                      transform road infrastructure management, making it transparent, efficient, 
                      and responsive to community needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors duration-300">
                    <Eye className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A future where every road is monitored, every issue is reported instantly, 
                      and infrastructure is maintained proactively through predictive AI, creating 
                      safer journeys for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 font-medium">Reports Filed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Resolution Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">360</div>
              <div className="text-sm text-gray-600 font-medium">Coverage</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Support</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Heart className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community First</h3>
                <p className="text-sm text-gray-600">Putting citizens at the heart of everything we do</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Leveraging cutting-edge AI for smart solutions</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">Open, honest communication at every step</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-sm text-gray-600">Committed to delivering the highest quality</p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-linear-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-white/95 text-lg leading-relaxed max-w-4xl mx-auto">
              Born from the need to bridge the gap between citizens and infrastructure 
              management, SaralMarg.ai combines cutting-edge AI with community engagement 
              to create roads that are not just built, but intelligently maintained. We believe 
              in a future where technology serves people, making our cities safer, our 
              infrastructure smarter, and our communities stronger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
