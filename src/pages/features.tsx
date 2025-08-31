import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Zap,
  Globe,
  Users,
  Palette,
  Camera,
  Download,
  Shield,
  Cloud,
  Cpu,
  Eye,
  Move3D,
  ArrowRight,
  Play,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import GetStartedModal from "@/components/GetStartedModalProps";

export default function Features() {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  const handleOpenModal = () => {
    setShowGetStartedModal(true);
  };

  const handleCloseModal = () => {
    setShowGetStartedModal(false);
  };

  const heroFeatures = [
    {
      icon: <Move3D className="w-12 h-12 text-purple-400" />,
      title: "Advanced 3D Modeling",
      description:
        "Professional sculpting, mesh editing, and parametric modeling tools",
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-400" />,
      title: "Material Editor",
      description:
        "PBR materials with real-time preview and custom shader support",
    },
    {
      icon: <Camera className="w-12 h-12 text-blue-400" />,
      title: "Cinematic Rendering",
      description:
        "Ray-traced lighting, global illumination, and post-processing effects",
    },
  ];

  const coreFeatures = [
    {
      category: "Modeling Tools",
      icon: <Move3D className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      features: [
        {
          title: "Parametric Modeling",
          description:
            "Create precise models with editable parameters and history",
          highlight: true,
        },
        {
          title: "Mesh Sculpting",
          description:
            "Organic sculpting tools for detailed character and creature modeling",
          highlight: false,
        },
        {
          title: "Boolean Operations",
          description:
            "Union, subtraction, and intersection operations for complex shapes",
          highlight: false,
        },
        {
          title: "Subdivision Surfaces",
          description: "Smooth organic surfaces with Catmull-Clark subdivision",
          highlight: true,
        },
      ],
    },
    {
      category: "Materials & Texturing",
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      color: "from-pink-500 to-red-500",
      features: [
        {
          title: "PBR Material System",
          description:
            "Physically Based Rendering with metallic and roughness workflows",
          highlight: true,
        },
        {
          title: "Texture Painting",
          description:
            "Paint directly on 3D models with brush tools and layers",
          highlight: false,
        },
        {
          title: "Material Library",
          description: "Extensive library of pre-made materials and textures",
          highlight: false,
        },
        {
          title: "Custom Shaders",
          description: "Build custom materials with visual node editor",
          highlight: true,
        },
      ],
    },
    {
      category: "Rendering & Lighting",
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        {
          title: "Real-time Ray Tracing",
          description: "GPU-accelerated ray tracing for photorealistic renders",
          highlight: true,
        },
        {
          title: "Global Illumination",
          description: "Accurate light bouncing and ambient occlusion",
          highlight: false,
        },
        {
          title: "HDRI Lighting",
          description: "Environment-based lighting with HDR image support",
          highlight: false,
        },
        {
          title: "Post-Processing",
          description: "Bloom, depth of field, color grading, and tone mapping",
          highlight: true,
        },
      ],
    },
    {
      category: "Animation & Rigging",
      icon: <Play className="w-8 h-8 text-green-400" />,
      color: "from-green-500 to-emerald-500",
      features: [
        {
          title: "Keyframe Animation",
          description: "Timeline-based animation with interpolation curves",
          highlight: true,
        },
        {
          title: "Skeletal Rigging",
          description: "Bone systems with IK/FK chains and constraints",
          highlight: false,
        },
        {
          title: "Morph Targets",
          description: "Blend shapes for facial animation and deformation",
          highlight: false,
        },
        {
          title: "Physics Simulation",
          description: "Cloth, fluid, and rigid body dynamics",
          highlight: true,
        },
      ],
    },
  ];

  const platformFeatures = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Browser-Based Power",
      description:
        "Full-featured 3D editor running entirely in your browser with WebGL 2.0 acceleration",
      benefits: [
        "No downloads required",
        "Cross-platform compatibility",
        "Automatic updates",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "Cloud Integration",
      description:
        "Seamless cloud storage with automatic saves and project synchronization",
      benefits: [
        "Auto-save every 30 seconds",
        "Access from anywhere",
        "Version history",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Real-time Collaboration",
      description:
        "Work together with your team in real-time with live cursors and changes",
      benefits: ["Multi-user editing", "Live chat", "Permission controls"],
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Enterprise Security",
      description:
        "Bank-grade security with end-to-end encryption and SSO integration",
      benefits: ["256-bit encryption", "SAML/OAuth support", "Audit logs"],
    },
  ];

  const exportFormats = [
    {
      name: "glTF/GLB",
      description: "Industry standard for web and AR/VR",
      popular: true,
    },
    {
      name: "FBX",
      description: "Compatible with Maya, 3ds Max, Blender",
      popular: true,
    },
    {
      name: "OBJ",
      description: "Universal format for 3D printing",
      popular: false,
    },
    {
      name: "STL",
      description: "Perfect for 3D printing applications",
      popular: false,
    },
    {
      name: "USD",
      description: "Pixar's Universal Scene Description",
      popular: true,
    },
    { name: "DAE", description: "COLLADA for game engines", popular: false },
  ];

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
              <Link href="/features" className="text-white font-semibold">
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
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">
              Professional Grade Tools
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Create Amazing 3D Art
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Professional 3D modeling, texturing, lighting, and animation tools
            that rival desktop applications - all running in your browser.
          </p>

          {/* Hero Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {heroFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition group"
              >
                <div className="mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <button
            className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center mx-auto"
            onClick={() => {
              const section = document.getElementById("all-features");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore All Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Core Features Section */}
      <section
        id="all-features"
        className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional tools designed for creators of all skill levels
            </p>
          </div>

          <div className="space-y-16">
            {coreFeatures.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`p-6 rounded-xl border transition ${
                        feature.highlight
                          ? "bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Platform Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why browser-based 3D creation is the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Formats */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Export Anywhere
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Support for all major 3D formats for any workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exportFormats.map((format, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition ${
                  format.popular
                    ? "bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {format.name}
                  </h3>
                  {format.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{format.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
              <Download className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-semibold">
                One-click export to any format
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Performance That Matters
            </h2>
            <p className="text-xl text-gray-300">
              Optimized for speed and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                60 FPS
              </div>
              <p className="text-gray-300">Real-time viewport performance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                10M+
              </div>
              <p className="text-gray-300">Polygons rendered smoothly</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                30s
              </div>
              <p className="text-gray-300">Auto-save interval</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                4K
              </div>
              <p className="text-gray-300">Maximum render resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Start creating professional 3D content today with our powerful
            browser-based tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenModal}
              className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </button>
            <button className="flex items-center justify-center text-white border-2 border-white/20 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              <Play className="w-5 h-5 mr-2" />
              Watch Features Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">3D Editor</span>
            </Link>
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
