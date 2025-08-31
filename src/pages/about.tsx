import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  Heart,
  ArrowRight,
} from "lucide-react";
import GetStartedModal from "@/components/GetStartedModalProps";

export default function About() {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  const handleOpenModal = () => {
    setShowGetStartedModal(true);
  };

  const handleCloseModal = () => {
    setShowGetStartedModal(false);
  };

  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      image: "👨‍💻",
      description:
        "Former 3D artist at Pixar with 15+ years in computer graphics.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "👩‍💻",
      description:
        "WebGL expert and former Google engineer specializing in browser tech.",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Design",
      image: "👨‍🎨",
      description:
        "Award-winning UX designer with a passion for creative tools.",
    },
    {
      name: "Elena Popov",
      role: "Lead Developer",
      image: "👩‍💻",
      description:
        "Full-stack developer with expertise in real-time 3D rendering.",
    },
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Community First",
      description:
        "We build for creators, by creators. Every feature is designed with our community's feedback.",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Accessibility",
      description:
        "Professional 3D tools shouldn't require expensive software or powerful hardware.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Innovation",
      description:
        "We're pushing the boundaries of what's possible in browser-based 3D creation.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Passion",
      description:
        "We're not just building software - we're empowering the next generation of creators.",
    },
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "2M+", label: "Projects Created" },
    { number: "150+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
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
              <Link href="/about" className="text-white font-semibold">
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Target className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Democratizing
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              3D Creation
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We believe that powerful creative tools should be accessible to
            everyone, not just those with expensive software and high-end
            hardware.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                In 2019, we started with a simple idea: what if creating
                professional 3D content was as easy as opening a web browser? No
                downloads, no complex installations, no barriers to creativity.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Today, we are proud to serve over 500,000 creators worldwide -
                from students learning their first 3D modeling techniques to
                professional studios creating award-winning content.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-white font-semibold">
                  Winner of the 2024 WebGL Innovation Award
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl border border-white/10 p-8">
              <div className="bg-slate-800 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🚀</span>
                  <p className="text-gray-400">Our Journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate people behind the platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Journey
          </h2>

          <div className="space-y-12">
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2019</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Beginning
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Founded with the vision of making 3D creation accessible to
                  everyone. First prototype launched with basic modeling tools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2021</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Major Milestone
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Reached 100,000 users and launched real-time collaboration
                  features. Introduced advanced rendering capabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2023</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Global Expansion
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Launched enterprise features and expanded to serve creators in
                  150+ countries. Won the WebGL Innovation Award.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2025</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Future
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Launching AI-powered modeling assistants and expanding our
                  platform to support VR/AR content creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join Our Creative Community
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Be part of the next generation of 3D creators shaping the future of
            digital art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenModal}
              className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center"
            >
              Start Creating Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </button>
            <Link href="/contact">
              <button className="text-white border-2 border-white/20 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                Contact Our Team
              </button>
            </Link>
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
