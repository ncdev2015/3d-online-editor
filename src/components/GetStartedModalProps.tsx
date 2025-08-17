import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  User,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({
  isOpen,
  onClose,
}: GetStartedModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    plan: "free",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Reset modal state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        company: "",
        password: "",
        plan: "free",
      });
      setErrors({});
      setIsLoading(false);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateStep = (stepNumber: number) => {
    const newErrors: { [key: string]: string } = {};

    if (stepNumber === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    if (stepNumber === 2) {
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setStep(3); // Success step
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["3 projects", "Basic tools", "Community support"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$19/mo",
      description: "For serious creators",
      features: ["Unlimited projects", "All tools", "Priority support"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: ["Everything in Pro", "Team collaboration", "Custom features"],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full ${
          step === 1 ? "max-w-4xl" : step === 2 ? "max-w-5xl" : "max-w-2xl"
        } max-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl border border-white/20 shadow-2xl`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="flex h-full min-h-[600px] max-h-[90vh]">
          {/* Left side - Branding (only show on step 1) */}
          {step === 1 && (
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 p-12 flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <div className="mb-8">
                  <Sparkles className="w-16 h-16 text-white/80 mb-4" />
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Start Creating Amazing 3D Art
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Join over 500,000 creators who trust our platform for their
                    3D projects. No downloads, no limits - just pure creative
                    freedom.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-white">
                      Professional 3D modeling tools
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-white">Real-time collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-white">Cloud storage included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-white">Export to any format</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl" />
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-xl" />
            </div>
          )}

          {/* Right side - Form */}
          <div
            className={`flex-1 overflow-y-auto ${step !== 1 ? "w-full" : ""}`}
          >
            <div className="p-8 lg:p-12">
              {/* Step 1 - Basic Info */}
              {step === 1 && (
                <div className="max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Welcome!
                    </h3>
                    <p className="text-gray-300">Lets create your account</p>
                    <div className="flex justify-center mt-6 space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                    </div>
                  </div>

                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleNext();
                    }}
                  >
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                            errors.name ? "border-red-500" : "border-white/20"
                          } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                            errors.email ? "border-red-500" : "border-white/20"
                          } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
                          placeholder="Enter your email"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Company (Optional)
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center group"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2 - Plan Selection & Password */}
              {step === 2 && (
                <div className="max-w-4xl mx-auto min-h-full flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Choose Your Plan
                    </h3>
                    <p className="text-gray-300">
                      Select the plan that fits your needs
                    </p>
                    <div className="flex justify-center mt-6 space-x-2">
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col space-y-8"
                  >
                    {/* Plan Selection */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {plans.map((plan) => (
                        <label key={plan.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={formData.plan === plan.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div
                            className={`p-6 rounded-xl border-2 transition relative h-full ${
                              formData.plan === plan.id
                                ? "border-purple-500 bg-purple-500/10"
                                : "border-white/20 bg-white/5 hover:bg-white/10"
                            }`}
                          >
                            {plan.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                                  Popular
                                </span>
                              </div>
                            )}
                            <div className="text-center">
                              <h4 className="text-xl font-bold text-white mb-2">
                                {plan.name}
                              </h4>
                              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                {plan.price}
                              </p>
                              <p className="text-gray-300 text-sm mb-4">
                                {plan.description}
                              </p>
                              <ul className="space-y-2">
                                {plan.features.map((feature, index) => (
                                  <li
                                    key={index}
                                    className="text-gray-300 text-sm flex items-center justify-center"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>

                    {/* Password */}
                    <div className="max-w-md mx-auto w-full">
                      <label className="block text-sm font-semibold text-white mb-2">
                        Create Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`w-full pl-4 pr-12 py-3 bg-white/10 border ${
                            errors.password
                              ? "border-red-500"
                              : "border-white/20"
                          } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
                          placeholder="Create a secure password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Buttons - Fixed at bottom */}
                    <div className="flex space-x-4 max-w-md mx-auto w-full mt-auto pt-8">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border-2 border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center disabled:opacity-50"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3 - Success */}
              {step === 3 && (
                <div className="max-w-md mx-auto text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Welcome to 3D Editor!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Your account has been created successfully. You can now
                      start creating amazing 3D content.
                    </p>
                    <div className="flex justify-center space-x-2 mb-8">
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={onClose}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition"
                    >
                      Start Creating Now
                    </button>
                    <p className="text-gray-400 text-sm">
                      Check your email for account verification instructions
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
