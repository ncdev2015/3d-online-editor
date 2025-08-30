import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  X,
  Zap,
  Crown,
  Rocket,
  Layers,
  ArrowRight,
} from "lucide-react";
import GetStartedModal from "@/components/GetStartedModalProps";

export default function Pricing() {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  const handleOpenModal = () => {
    setShowGetStartedModal(true);
  };

  const handleCloseModal = () => {
    setShowGetStartedModal(false);
  };

  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for hobbyists and learning",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        { text: "Up to 3 projects", included: true },
        { text: "Basic modeling tools", included: true },
        { text: "Standard materials", included: true },
        { text: "720p exports", included: true },
        { text: "Community support", included: true },
        { text: "Advanced lighting", included: false },
        { text: "Collaboration tools", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "19",
      period: "month",
      description: "For professionals and small teams",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      features: [
        { text: "Unlimited projects", included: true },
        { text: "All modeling tools", included: true },
        { text: "Premium materials library", included: true },
        { text: "4K exports", included: true },
        { text: "Advanced lighting & rendering", included: true },
        { text: "Real-time collaboration", included: true },
        { text: "Priority email support", included: true },
        { text: "Cloud storage (100GB)", included: true },
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      description: "For large teams and organizations",
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Unlimited team members", included: true },
        { text: "8K exports", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
        { text: "Dedicated support", included: true },
        { text: "Cloud storage (1TB)", included: true },
        { text: "Advanced analytics", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
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
              <Link href="/pricing" className="text-white font-semibold">
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

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">
              Transparent Pricing
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Creative Plan
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition ${
                  plan.popular
                    ? "border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                        : "border-2 border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Can I switch plans anytime?
              </h3>
              <p className="text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we will prorate the billing
                accordingly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Is there a free trial for Pro?
              </h3>
              <p className="text-gray-300">
                Absolutely! We offer a 14-day free trial for the Pro plan. No
                credit card required to start.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and for Enterprise
                customers, we can arrange wire transfers or custom billing
                cycles.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                What happens to my projects if I cancel?
              </h3>
              <p className="text-gray-300">
                Your projects remain accessible for 30 days after cancellation.
                You can export them during this period. Free plan users keep
                access to their 3 projects indefinitely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of creators who trust our platform for their 3D
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center">
              Start Free Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </button>
            <button className="text-white border-2 border-white/20 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Contact Sales
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
