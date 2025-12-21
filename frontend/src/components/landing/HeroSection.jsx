import Image from "next/image";
import { TrendingUp, Users, Shield, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-secondary pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-400 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>AI-Powered Road Management</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Tomorrow&apos;s{" "}
                <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Roads Today
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Building tomorrow&apos;s roads today. Infrastructure growth
                uncompelling and growths. Empowering citizens to report road
                issues instantly, enabling officials to act faster, and
                leveraging AI to predict maintenance needs before they become
                problems.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-linear-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Reports Filed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Resolution Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-orange-600">360</div>
                  <div className="text-sm text-gray-600">Coverage</div>
                </div>
              </div>
            </div>

            <div className="relative bg-transparent animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/landing.png"
                  alt="Smart Infrastructure"
                  fill
                  className="object-cover animate-in shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
