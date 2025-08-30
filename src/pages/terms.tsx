import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">3D Editor</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-300 hover:text-white transition"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Terms of
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Service
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          These terms govern your access to and use of our service. By using our
          platform, you agree to these terms.
        </p>
        <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
          <span className="text-purple-300 text-sm font-medium">
            Last updated: August 30, 2025
          </span>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h2 className="text-3xl font-bold text-white mb-4">
              1. Your Account & Service Use
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You must be at least 13 years old to use our service. You are
              responsible for your account and must not use the platform for any
              illegal activities. Your access may be terminated if you violate
              these terms.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h2 className="text-3xl font-bold text-white mb-4">
              2. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              **3D Editor** retains ownership of the service and its original
              content. **You own your content.** By uploading your work, you
              grant us a limited license to use it only to operate and improve
              the service.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h2 className="text-3xl font-bold text-white mb-4">
              3. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our service is provided as is We are not liable for any indirect,
              incidental, or punitive damages. Your use of the service is at
              your sole risk.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h2 className="text-3xl font-bold text-white mb-4">
              4. Changes to These Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these terms from time to time. We will notify you of
              any material changes by posting the new terms on this page. Your
              continued use of the service after a change signifies your
              acceptance of the new terms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🎯</span>
              </div>
              <span className="text-xl font-bold text-white">3D Editor</span>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 3D Online Editor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
