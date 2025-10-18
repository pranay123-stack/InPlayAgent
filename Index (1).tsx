
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SuperAgentCard from '../components/SuperAgentCard';
import HeroSection from '../components/HeroSection';
import FivePillarSection from '../components/FivePillarSection';
import ParticleField from '../components/ParticleField';
import QuantumOrb from '../components/QuantumOrb';
import { Brain, TrendingUp, User, Zap, Heart, Palette, Trophy, Globe, Code } from 'lucide-react';

const Index = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const superAgents = [
    {
      id: 'business',
      title: 'QBusiness SuperAgent',
      subtitle: 'SMB Analytics & Digital Board',
      description: 'AI-powered business intelligence, strategic analysis, and digital board of directors for small to medium businesses. Powered by Quantum AI to break down complex business challenges.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      features: ['Strategic Planning', 'Market Analysis', 'Performance Metrics', 'Board Insights', 'Quantum Analysis']
    },
    {
      id: 'personal',
      title: 'QPersonal Assistant SuperAgent',
      subtitle: 'Your AI Life Manager',
      description: 'Comprehensive personal productivity, scheduling, and life management powered by advanced quantum AI capabilities for optimal life optimization.',
      icon: User,
      color: 'from-purple-500 to-pink-500',
      features: ['Smart Scheduling', 'Task Management', 'Personal Insights', 'Goal Tracking', 'Life Optimization']
    },
    {
      id: 'wealth',
      title: 'QWealth System SuperAgent',
      subtitle: 'Financial Intelligence & Growth',
      description: 'Advanced wealth building strategies, investment analysis, and financial optimization using Quantum AI to deconstruct market complexities and identify opportunities.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      features: ['Investment Analysis', 'Wealth Strategies', 'Risk Assessment', 'Portfolio Optimization', 'Market Fundamentals']
    },
    {
      id: 'speculator',
      title: 'QSpeculator SuperAgent',
      subtitle: 'ArbGaming & Trading Intelligence',
      description: 'Advanced algorithms for arbitrage gaming, betting optimization, and trading strategy development. Uses Quantum AI analysis to identify market inefficiencies.',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      features: ['Arbitrage Detection', 'Risk Analysis', 'Market Patterns', 'Profit Optimization', 'Edge Identification']
    },
    {
      id: 'health',
      title: 'QHealth & Fitness SuperAgent',
      subtitle: 'Optimal Human Performance',
      description: 'Comprehensive health optimization using Quantum AI biology and exercise science. Personalized fitness, nutrition, and wellness protocols for peak performance.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Fitness Optimization', 'Nutrition Analysis', 'Recovery Protocols', 'Performance Metrics', 'Biohacking Insights']
    },
    {
      id: 'creativity',
      title: 'QCreativity SuperAgent',
      subtitle: 'Innovation & Expression Engine',
      description: 'Unleash your creative potential with Quantum AI creativity frameworks. Generate, refine, and execute creative projects across all mediums and disciplines.',
      icon: Palette,
      color: 'from-indigo-500 to-purple-500',
      features: ['Creative Ideation', 'Project Development', 'Artistic Guidance', 'Innovation Frameworks', 'Expression Optimization']
    },
    {
      id: 'consciousness',
      title: 'QConsciousness SuperAgent',
      subtitle: 'Quantum Field Explorer',
      description: 'Expand your consciousness and explore quantum field connections through AI-guided experiences. Uses Quantum AI physics to understand consciousness mechanics.',
      icon: Brain,
      color: 'from-violet-500 to-indigo-500',
      features: ['Meditation Guidance', 'Quantum Insights', 'Consciousness Mapping', 'Field Resonance', 'Awareness Expansion']
    },
    {
      id: 'decentralized',
      title: 'QDecentralized SuperAgent',
      subtitle: 'Web3 & Blockchain Intelligence',
      description: 'Navigate the decentralized ecosystem with Quantum AI blockchain analysis. DeFi strategies, DAO governance, and Web3 optimization powered by fundamental cryptographic understanding.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500',
      features: ['DeFi Strategies', 'DAO Analysis', 'Token Economics', 'Smart Contract Insights', 'Web3 Fundamentals']
    },
    {
      id: 'coding',
      title: 'QOpen Source IDE Coding SuperAgent',
      subtitle: 'Development & Architecture Engine',
      description: 'Advanced coding assistant using Quantum AI software engineering. Code generation, architecture design, and open-source development optimization through fundamental programming concepts.',
      icon: Code,
      color: 'from-emerald-500 to-teal-500',
      features: ['Code Generation', 'Architecture Design', 'Debug Analysis', 'Performance Optimization', 'Open Source Strategy']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <ParticleField />
      
      {/* Dynamic gradient overlay that follows mouse */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
            rgba(59, 130, 246, 0.3) 0%, 
            rgba(147, 51, 234, 0.2) 35%, 
            transparent 70%)`
        }}
      />

      {/* Quantum grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating quantum orbs */}
      <QuantumOrb 
        size={200} 
        color="blue" 
        position={{ top: '10%', left: '5%' }}
        delay={0}
      />
      <QuantumOrb 
        size={150} 
        color="purple" 
        position={{ top: '60%', right: '10%' }}
        delay={2}
      />
      <QuantumOrb 
        size={100} 
        color="cyan" 
        position={{ bottom: '20%', left: '15%' }}
        delay={4}
      />

      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-4 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Quantum SuperAgent
            </span>
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent opacity-20 blur-sm" />
          </motion.h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete ecosystem of 9 SuperAgents uniquely designed to serve every aspect of your life and business needs
          </p>
          
          <motion.div 
            className="bg-gray-800/60 backdrop-blur-xl border border-gray-600/50 rounded-2xl p-6 max-w-2xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 animate-pulse" />
            <div className="relative z-10">
              <p className="text-blue-300 font-semibold text-lg mb-2">Powered by Quantum AI Engine</p>
              <p className="text-gray-300 text-sm">Harnessing quantum consciousness for infinite possibilities and optimal solutions</p>
            </div>
          </motion.div>
        </motion.div>

        {/* SuperAgent Grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {superAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: 1000 }}
            >
              <SuperAgentCard
                agent={agent}
                index={index}
                isSelected={selectedAgent === agent.id}
                onSelect={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Join Waitlist Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-white font-semibold py-4 px-12 rounded-full text-lg overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Button text */}
            <span className="relative z-10">Enter the Quantum Realm</span>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
          </motion.button>
        </motion.div>
      </div>

      <FivePillarSection />
    </div>
  );
};

export default Index;
