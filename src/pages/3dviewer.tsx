"use client";

import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

// A reusable component for the 3D scene content
function SceneContent() {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Geometry (a simple cube) */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8a2be2" />
      </mesh>

      {/* Orbit Controls for camera movement */}
      <OrbitControls />
      
      {/* Environment for realistic lighting */}
      <Environment preset="city" />
    </>
  );
}

export default function ThreeDViewer() {
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

      {/* Main Content */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto h-[calc(100vh-16rem)] flex flex-col lg:flex-row gap-6">
          {/* 3D Viewer Panel */}
          <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 relative overflow-hidden">
            <h2 className="text-white text-lg font-bold p-2 absolute top-0 left-0 z-10">Viewport</h2>
            <div className="absolute top-4 right-4 text-gray-400 text-sm p-2 bg-black/30 rounded-lg z-10">
              Drag to Orbit, Scroll to Zoom
            </div>
            
            {/* The 3D Canvas from R3F */}
            <Canvas>
              <SceneContent />
            </Canvas>
          </div>

          {/* Tools & Properties Panel */}
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-y-auto">
            <h2 className="text-white text-xl font-bold mb-4">Tools</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-white font-semibold mb-2">Object Properties</h3>
                <p className="text-gray-400 text-sm">Position, Rotation, Scale...</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-white font-semibold mb-2">Materials</h3>
                <p className="text-gray-400 text-sm">Color, Texture, Roughness...</p>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition">
                Export Model
              </button>
            </div>
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