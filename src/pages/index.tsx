import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Globe,
  Layers,
  Sparkles,
  Play,
  CheckCircle,
} from "lucide-react";
import GetStartedModal from "@/components/GetStartedModalProps";

export default function Home() {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  const handleOpenModal = () => {
    setShowGetStartedModal(true);
  };

  const handleCloseModal = () => {
    setShowGetStartedModal(false);
  };

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
              <button
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <span className="text-purple-300 text-sm mr-2">✨</span>
            <span className="text-purple-300 text-sm font-medium">
              Revolutionary 3D Design Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create Stunning
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              3D Models Online
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The most powerful browser-based 3D editor. No downloads, no limits.
            Design, sculpt, and animate professional 3D content directly in your
            browser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleOpenModal}
              className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center"
            >
              Start Creating Free
              <span className="ml-2 group-hover:translate-x-1 transition">
                →
              </span>
            </button>
            <button className="flex items-center text-white border-2 border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              <span className="mr-2">▶</span>
              Watch Demo
            </button>
          </div>

          {/* Preview Image Placeholder */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
              <div className="bg-slate-800 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🎨</span>
                  <p className="text-gray-400 text-lg">
                    3D Editor Interface Preview
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose Our 3D Editor?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade tools that work seamlessly in your browser,
              without compromising on power or performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Browser-Based Power
              </h3>
              <p className="text-gray-300 leading-relaxed">
                No downloads or installations required. Access professional 3D
                modeling tools directly from your browser with WebGL
                acceleration.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Optimized for speed with real-time rendering, instant saves, and
                collaborative editing capabilities.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Tools
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced modeling, texturing, lighting, and animation tools that
                rival desktop applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Everything You Need to Create Amazing 3D Content
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-green-400 mr-4 mt-1 flex-shrink-0">
                    ✅
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Intuitive Interface
                    </h3>
                    <p className="text-gray-300">
                      Clean, modern UI designed for both beginners and
                      professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-4 mt-1 flex-shrink-0">
                    ✅
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Cloud Storage
                    </h3>
                    <p className="text-gray-300">
                      Your projects are automatically saved and accessible
                      anywhere
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-4 mt-1 flex-shrink-0">
                    ✅
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Multiple Export Formats
                    </h3>
                    <p className="text-gray-300">
                      Export to OBJ, FBX, GLTF, and more for any workflow
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-4 mt-1 flex-shrink-0">
                    ✅
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Real-time Collaboration
                    </h3>
                    <p className="text-gray-300">
                      Work together with your team in real-time
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl border border-white/10 p-8">
              <div className="bg-slate-800 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">✨</span>
                  <p className="text-gray-400">Feature Showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your 3D Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of creators who are already using our platform to
            bring their ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenModal}
              className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center"
            >
              Start Creating Now
              <span className="ml-2 group-hover:translate-x-1 transition">
                →
              </span>
            </button>
            <button className="text-white border-2 border-white/20 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              View Pricing Plans
            </button>
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

      {/* GetStartedModal */}
      <GetStartedModal
        isOpen={showGetStartedModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
