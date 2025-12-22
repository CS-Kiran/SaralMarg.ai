import Image from "next/image";
import { Mail, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-secondary flex items-center px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto w-full mt-2">
        <div className="text-center mb-6 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Get In <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-60 items-center">
          <div className="relative group animate-in fade-in slide-in-from-left duration-700">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              <Image
                src="/contact.png"
                alt="Contact Infrastructure"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-orange-900/20 to-transparent opacity-0"></div>
            </div>
          </div>

          <div className="bg-transparent rounded-2xl shadow-xl p-6 animate-in fade-in slide-in-from-right duration-700 delay-200 overflow-y-auto">
            <form className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 hover:border-orange-300"
                  placeholder="Kiran Patil"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 hover:border-orange-300"
                  placeholder="kp@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 hover:border-orange-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 hover:border-orange-300 resize-none"
                  placeholder="Tell us about your road infrastructure needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-linear-to-r from-orange-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <a
                  href="mailto:info@saralmarg.ai"
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">info@saralmarg.ai</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
