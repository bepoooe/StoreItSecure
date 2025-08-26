"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "/assets/icons/logo-brand-blue.svg",
      title: "Secure Storage",
      description: "Your files are protected with enterprise-grade security"
    },
    {
      icon: "/assets/icons/dashboard.svg", 
      title: "Smart Organization",
      description: "AI-powered file organization and management"
    },
    {
      icon: "/assets/icons/share.svg",
      title: "Easy Sharing",
      description: "Share files securely with teams and clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-brand-100/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large morphing background orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand/30 to-brand-100/20 rounded-full mix-blend-multiply filter blur-xl animate-morphing opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-brand-100/40 to-brand/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-slow opacity-30 delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue/20 to-brand/15 rounded-full mix-blend-multiply filter blur-xl animate-float-reverse opacity-25 delay-1000"></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-brand/20 to-brand-100/30 rounded-full animate-float delay-500 opacity-60 animate-glow-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-r from-brand-100/25 to-brand/20 rounded-full animate-float-reverse delay-1000 opacity-50"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-pink/30 to-orange/20 rounded-full animate-float delay-2000 opacity-70"></div>
        <div className="absolute top-3/4 left-20 w-12 h-12 bg-gradient-to-br from-green/30 to-blue/20 rounded-full animate-float-slow delay-3000 opacity-60"></div>
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-gradient-to-br from-brand to-brand-100 rounded-full animate-float-reverse opacity-80 animate-glow-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/icons/logo-brand-blue.svg"
              alt="StoreItSecure"
              width={40}
              height={40}
              className="animate-pulse"
            />
            <h1 className="text-2xl font-bold text-dark-100 font-poppins">
              StoreItSecure
            </h1>
          </div>
          <Link
            href="/sign-in"
            className="px-6 py-2 text-brand font-medium hover:text-brand/80 transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold text-dark-100 leading-tight">
                  The Most
                  <span className="bg-gradient-to-r from-brand to-brand-100 bg-clip-text text-transparent">
                    {" "}Secure{" "}
                  </span>
                  Storage Solution
                </h2>
                <p className="text-xl text-light-200 leading-relaxed max-w-lg">
                  Store, organize, and share your files with enterprise-grade security. 
                  Experience the future of cloud storage with StoreItSecure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sign-up"
                  className="group px-8 py-4 bg-gradient-to-r from-brand to-brand-100 text-white font-semibold rounded-xl shadow-drop-2 hover:shadow-drop-3 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <Image
                      src="/assets/icons/arrow-up.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="rotate-45 group-hover:rotate-90 transition-transform duration-300"
                    />
                  </span>
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-4 border-2 border-brand text-brand font-semibold rounded-xl hover:bg-brand hover:text-white transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand">10M+</div>
                  <div className="text-light-200 text-sm">Files Stored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand">99.9%</div>
                  <div className="text-light-200 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand">100K+</div>
                  <div className="text-light-200 text-sm">Happy Users</div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Showcase */}
            <div className={`relative ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <div className="relative bg-white rounded-3xl shadow-drop-3 p-8 transform hover:scale-105 transition-transform duration-500">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-100 rounded-3xl opacity-20 animate-pulse"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand to-brand-100 rounded-2xl mx-auto">
                    <Image
                      src={features[currentFeature].icon}
                      alt={features[currentFeature].title}
                      width={40}
                      height={40}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-dark-100">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-light-200">
                      {features[currentFeature].description}
                    </p>
                  </div>

                  {/* Feature indicators */}
                  <div className="flex justify-center space-x-2">
                    {features.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentFeature ? 'bg-brand w-6' : 'bg-light-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-brand to-brand-100 rounded-full animate-float opacity-90 animate-glow-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-pink/80 to-orange/60 rounded-full animate-float-reverse delay-1000 opacity-85 shadow-md"></div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-br from-green/70 to-blue/50 rounded-full animate-float-slow delay-500 opacity-80 shadow-sm"></div>
              <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-brand-100 to-brand rounded-full animate-morphing delay-2000 opacity-75"></div>
              <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-gradient-to-br from-brand to-pink/40 rounded-full animate-float delay-3000 opacity-70"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-white/80 backdrop-blur-sm">
        {/* Additional floating elements for features section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-brand/20 to-brand-100/30 rounded-full animate-float delay-1000 opacity-40"></div>
          <div className="absolute top-20 right-20 w-14 h-14 bg-gradient-to-br from-green/25 to-blue/20 rounded-full animate-float-reverse delay-2000 opacity-50"></div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-gradient-to-br from-pink/30 to-orange/25 rounded-full animate-morphing delay-500 opacity-45"></div>
          <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-gradient-to-br from-brand to-brand-100 rounded-full animate-float-slow delay-3000 opacity-60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-dark-100">
              Why Choose StoreItSecure?
            </h3>
            <p className="text-xl text-light-200 max-w-2xl mx-auto">
              Experience next-generation cloud storage with features designed for modern teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl shadow-drop-1 hover:shadow-drop-2 transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 200 + 600}ms`
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand/10 to-brand-100/10 rounded-xl mb-6 group-hover:from-brand group-hover:to-brand-100 transition-all duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-dark-100 mb-3">
                  {feature.title}
                </h4>
                <p className="text-light-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        {/* Floating elements for CTA section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-br from-brand/25 to-brand-100/35 rounded-full animate-float delay-500 opacity-50"></div>
          <div className="absolute top-20 right-1/4 w-18 h-18 bg-gradient-to-br from-pink/30 to-orange/25 rounded-full animate-float-reverse delay-1500 opacity-45"></div>
          <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-gradient-to-br from-green/35 to-blue/30 rounded-full animate-morphing delay-2500 opacity-55"></div>
          <div className="absolute bottom-20 right-1/5 w-16 h-16 bg-gradient-to-br from-brand-100/40 to-brand/25 rounded-full animate-float-slow delay-1000 opacity-40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
            <h3 className="text-4xl font-bold text-dark-100">
              Ready to Secure Your Files?
            </h3>
            <p className="text-xl text-light-200">
              Join thousands of users who trust StoreItSecure with their valuable data
            </p>
            <Link
              href="/sign-up"
              className="inline-block px-10 py-5 bg-gradient-to-r from-brand to-brand-100 text-white font-bold text-lg rounded-xl shadow-drop-2 hover:shadow-drop-3 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
