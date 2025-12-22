"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center group cursor-pointer">
            <div className="relative w-40 h-24 transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="SaralMarg.ai Logo"
                fill
                className="object-contain my-2"
                priority
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 font-medium relative group ${
                isActive("/")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <a
              href="#public_map"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium relative group"
            >
              Public Map
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link
              href="/about"
              className={`transition-colors duration-300 font-medium relative group ${
                isActive("/about")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 font-medium relative group ${
                isActive("/contact")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium relative group">
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button className="cursor-pointer px-6 py-2 bg-sidebar-accent-foreground text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-100 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/")
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#public_map"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Public Map
            </a>
            <Link
              href="/about"
              className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/about")
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/contact")
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 border-t border-orange-100 space-y-2">
              <button className="w-full px-4 py-2 text-gray-800 hover:text-gray-900 border-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-300">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-sidebar-accent-foreground text-white rounded-full hover:shadow-lg transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
