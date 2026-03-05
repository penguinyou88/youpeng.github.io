/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Beaker, 
  Cpu, 
  TrendingUp, 
  Linkedin, 
  GraduationCap, 
  ExternalLink, 
  FileText, 
  ArrowRight,
  Github,
  Mail,
  MapPin,
  X,
  ChevronRight,
  Terminal,
  Layers,
  Cloud,
  Eye,
  Activity,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

const stats = [
  { label: 'Annual Value Delivered', value: '$15M+', sub: 'Across 20+ Production Solutions' },
  { label: 'Production Models', value: '20+', sub: 'Reliability, Quality, & Monitoring' },
  { label: 'Coach & Mentorship', value: '20+', sub: 'PhD level Interns & Employees' },
  { label: 'Academic Impact', value: '20+', sub: 'Peer-reviewed Publications' },
];

const pillars = [
  {
    id: 'ai-science',
    title: 'Scientific AI & Optimization',
    icon: Beaker,
    description: 'Bridging advanced scientific modeling with AI using Physics-Informed ML, Neural ODEs, and Active Learning & Bayesian Optimization.',
    highlights: ['Physics-Informed Neural Networks (PINNs)', 'Neural ODEs (NODE)', 'Bayesian Optimization (BO)', 'Active Learning', 'Symbolic Regression'],
    keywords: ['SciML', 'NeuralODE', 'BO'],
    color: 'bg-emerald-50/50 text-emerald-700 border-emerald-100',
    projects: [
      {
       title: 'Generative Multi-Objective BO for De Novo Design',
       desc: 'Developed a "Generate-then-Optimize" framework using BoTorch and generative SMILES models to enable sample-efficient, multi-objective molecular design within massive discrete chemical spaces.',
       impact: 'Accelerates lead discovery by enabling scalable batch evaluations that efficiently identify Pareto-optimal candidates, balancing conflicting objectives such as potency, synthetic accessibility, and ADMET profiles.'
      },
      {
        title: 'Neural ODEs for Dynamic Catalyst Deactivation',
        desc: 'Developed a novel functional-encoder Neural ODE framework using PyTorch and Torchdiff to model catalyst deactivation dynamics from over 10 years of irregular data (R2 > 0.9)',
        impact: 'Enable zero-shot online model updates and accurate remaining-life forecasts that reduce SME turnaround planning time by more than 50%.'
      },
      {
        title: 'High-Dimensional Kinetic Parameter Estimation',
        desc: 'Led high-dimensional kinetic parameter estimation (50 parameters) for a complex reaction network using Sparse Axis‑Aligned Subspace Bayesian Optimization (SAASBO)',
        impact: 'Achieve ~40% loss reduction from old parameter set with ~60× fewer simulator evaluations compared to traditional SGD-based approach.'
      },
      {
        title: 'Human-in-the-Loop Collaborative Bayesian Optimization',
        desc: 'Developing a framework integrating LLMs with Bayesian Optimization to encode expert chemical intuition as priors that weights the acquisition function optimization',
        impact: 'Significantly accelerating convergence in chemical yield optimization benchmarks.'
      }
    ]
  },
  {
    id: 'ai-agents',
    title: 'Generative AI and Agentic Applications',
    icon: Cpu,
    description: 'Pioneering Human-in-the-Loop (HITL) Collaborative AI frameworks that integrate LLMs with experimental design.',
    highlights: ['Agentic Reliability Analytics', 'RAG-based Troubleshooting', 'OCR & Vision-Language Pipelines', 'Azure OpenAI & LangGraph', 'Intelligent Query Routing'],
    keywords: ['Agentic Discovery', 'Multimodal', 'LangGraph'],
    color: 'bg-blue-50/50 text-blue-700 border-blue-100',
    projects: [
      {
        title: 'Enterprise AI Reliability Platform',
        desc: 'Built and deployed an enterprise-level AI reliability analytics platform using Python-Shiny, Azure OpenAI and LangGraph, combining LLM-based text mining of maintenance logs, vectorized equipment history, and classical reliability modeling.',
        impact: 'Replaced manual data cleansing with a single optimized query and SME-in-the-loop validation workflow with >50% improvement in efficiency.'
      },
      {
        title: 'RAG-Based Quality Chatbot',
        desc: 'Built and deployed a RAG-based chatbot using LangChain, Azure OpenAI and AI search, integrating structured and unstructured quality data with intelligent query routing.',
        impact: 'Enables rapid querying of historical quality notes and troubleshooting guidelines, supporting resolution of 350+ annual quality claims.'
      },
      {
        title: 'OCR + Vision-Language Pipelines',
        desc: 'Developed OCR + vision-language pipelines in Databricks for physical-property data extraction from 1000+ scanned large technical documents (>100 MB & > 200 pages).',
        impact: 'Extending LLM utility beyond text-only workflows for complex technical document processing.'
      }
    ]
  },
  {
    id: 'ai-machinevision',
    title: 'Machine Vision Applications',
    icon: TrendingUp,
    description: 'Deploying production-grade computer vision systems to convert visual data into reproducible scientific metrics and industrial safety intelligence.',
    highlights: ['Vision Transformers (ViT)', 'Zero-shot Segmentation (SAM)', 'Time-Frequency Analysis (CWT)', 'Industrial Object Detection (YOLO)'],
    keywords: ['Computer Vision', 'ViT', 'YOLO', 'SAM'],
    color: 'bg-purple-50/50 text-purple-700 border-purple-100',
    projects: [
      {
        title: 'Production-Grade Pellet Classification',
        desc: 'Developed a machine vision system for classifying plastic pellet contamination by fine-tuning a pre-trained Vision Transformer (ViT) model on 1000+ images.',
        impact: 'Achieved over 98% holdout accuracy and 95% expert consistency in product-release workflows.'
      },
      {
        title: 'Zero-Shot Particle Quantification',
        desc: 'Built a two-stage, zero-shot segmentation-to-quantification pipeline (CLIPSeg + SAM) to objectively quantify charcoal fines in production.',
        impact: 'Achieved >95% balanced accuracy, converting subjective visual inspection into reproducible engineer-ready diagnostics.'
      },
      {
        title: 'Valve Stiction Detection via CWT',
        desc: 'Directed an end-to-end pipeline converting control-loop signals into time-frequency images using Continuous Wavelet Transform (CWT) for CNN-based classification.',
        impact: 'Delivered ~96% validation accuracy and 84% stiction recall on unseen industrial loops.'
      },
      {
        title: 'Industrial Water-Leak Detector',
        desc: 'Fine-tuned a YOLO-based detector using labeled industrial video for real-time safety monitoring.',
        impact: 'Achieved ~0.71 mAP@0.5 with reliable detection across diverse, unseen leak scenarios.'
      }
    ]
  },
  {
    id: 'ml-systems',
    title: 'ML Systems & Full-Stack MLOps',
    icon: Terminal,
    description: 'Building end-to-end industrial ML systems, from rare-event early warning to scalable cloud deployment and production-grade analytics.',
    highlights: ['LSTM & FCN Early Warning', 'Probabilistic Forecasting', 'Azure Cloud Pipelines', 'Production Analytics Ecosystem'],
    keywords: ['MLOps', 'Azure', 'Time-Series', 'Full-Stack'],
    color: 'bg-orange-50/50 text-orange-700 border-orange-100',
    projects: [
      {
        title: 'Rare-Event Early-Warning System',
        desc: 'Built a system with LSTM and FCN for a multi-reactor process using 7 years of hourly data across 300+ variables.',
        impact: 'Achieved R2 = 0.93 and predicted future unplanned events 2–48 hours in advance.'
      },
      {
        title: 'Probabilistic Electricity Price Forecasting',
        desc: 'Created a deep-learning framework (TFT + fusion) for 24hr real-time electricity price forecasting in ERCOT.',
        impact: 'Improved RMSE by ~30% vs. prior ML benchmarks and enabled reliable detection of extreme price events.'
      },
      {
        title: 'Full-Stack Catalyst Projection Tools',
        desc: 'Redesigned UI and APIs to modernize catalyst tools, leveraging Azure services (ADX, Blob, Azure Function, AML) to deploy cloud pipelines.',
        impact: 'Enhanced maintainability, reduced costs, and streamlined data integration through automation.'
      },
      {
        title: 'Production Analytics Ecosystem',
        desc: 'Delivered 10+ production analytics apps in Streamlit, Dash, and Shiny with robust data pipelines for real-time process monitoring.',
        impact: 'Used by plant SMEs in Azure or Posit Connect for reliability and quality monitoring.'
      }
    ]
  },
];

const skillCategories = [
  {
    name: 'Scientific AI & Optimization',
    icon: Beaker,
    skills: ['PINNs', 'Neural ODEs', 'Multi-objective Optimization', 'Bayesian Optimization', 'Active Learning', 'Symbolic Regression']
  },
  {
    name: 'Generative AI and Agentic Applications',
    icon: Cpu,
    skills: ['Azure OpenAI', 'LangGraph', 'LangChain', 'RAG', 'Vector Databse', 'Agentic Workflows', 'Prompt Engineering', 'Semantic Search']
  },
  {
    name: 'Machine Vision Applications',
    icon: Activity,
    skills: ['Vision Transformers (ViT)', 'YOLO', 'CLIPSeg + SAM', 'CWT + CNN', 'Diffusers', 'openCV', 'GAN', 'Stable Diffusion']
  },
  {
    name: 'Databse, Cloud & MLops',
    icon: Terminal,
    skills: ['Azure','SQL','Devops','Git','CI/CD','pipelines','docker/container','API']
  }
];

const publications = [
  {
    title: 'Toward multimodal AI copilots for self-driving electrochemical labs',
    journal: 'Joule',
    year: '2026',
    link: 'https://www.cell.com/joule/abstract/S2542-4351(25)00458-1'
  },
  {
    title: 'Generative multiobjective Bayesian optimization for de novo molecular design',
    journal: 'Industrial & Engineering Chemistry Research',
    year: '2025',
    link: 'https://pubs.acs.org/doi/full/10.1021/acs.iecr.5c03166'
  },
  {
    title: 'SyMANTIC: An efficient symbolic regression method for interpretable model discovery',
    journal: 'Industrial & Engineering Chemistry Research',
    year: '2025',
    link: 'https://pubs.acs.org/doi/abs/10.1021/acs.iecr.4c03503'
  },
  {
    title: 'Physics-enhanced neural ODE: Application to industrial chemical reaction systems',
    journal: 'Industrial & Engineering Chemistry Research',
    year: '2023',
    link: 'https://pubs.acs.org/doi/abs/10.1021/acs.iecr.3c01471'
  }
];

export default function App() {
  const [activePillar, setActivePillar] = useState<typeof pillars[0] | null>(null);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      {/* Pillar Detail Overlay */}
      <AnimatePresence>
        {activePillar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-paper/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 min-h-screen flex flex-col">
              <button 
                onClick={() => setActivePillar(null)}
                className="self-end mb-12 p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-6 mb-8">
                <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center border", activePillar.color)}>
                  <activePillar.icon size={40} />
                </div>
                <div>
                  <span className="mono-label">Expertise Detail</span>
                  <h2 className="text-5xl font-bold">{activePillar.title}</h2>
                </div>
              </div>

              <p className="text-2xl text-charcoal/60 mb-16 leading-relaxed max-w-3xl">
                {activePillar.description}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="mono-label mb-6 text-black">Key Projects & Impact</h3>
                  <div className="grid gap-6">
                    {activePillar.projects.map((project, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card bg-white"
                      >
                        <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                          <ChevronRight size={18} className="text-black/30" />
                          {project.title}
                        </h4>
                        <p className="text-charcoal/70 mb-4 leading-relaxed">
                          {project.desc}
                        </p>
                        <div className="p-4 bg-black/[0.02] rounded-xl border border-black/5">
                          <span className="mono-label text-[9px] mb-1 block">Business Impact</span>
                          <p className="text-sm font-medium">{project.impact}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-black/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-3">
                    {activePillar.keywords.map((k, i) => (
                      <span key={i} className="px-3 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest rounded-full">
                        {k}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setActivePillar(null)}
                    className="text-xs font-mono uppercase tracking-widest hover:underline"
                  >
                    Close Detail
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-lg tracking-tighter">YOU PENG</span>
            <span className="h-4 w-[1px] bg-black/10 mx-2" />
            <span className="text-xs font-mono opacity-50 hidden sm:inline">PhD in Chemical Engineering (MIT)</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#pillars" className="text-xs font-mono uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity">Expertise</a>
            <a href="#skills" className="text-xs font-mono uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity">Skills</a>
            <a href="#publications" className="text-xs font-mono uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity">Research</a>
            <a href="mailto:penguinyou88@gmail.com" className="bg-charcoal text-white px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-[0.2em] rounded-full">
                Data Science Manager
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono opacity-40 uppercase tracking-widest">
                <MapPin size={10} /> Madison, WI
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight">
              Scientific Machine Learning <br />
              <span className="text-black/40 italic font-serif">& AI for Science.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/70 mb-10 leading-relaxed max-w-2xl font-light">
              Innovative leader with 8+ years of experience delivering production-ready solutions for complex chemical and molecular systems. 
              Expert in bridging advanced scientific modeling with AI.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono opacity-60">
              <span className="flex items-center gap-1.5"><GraduationCap size={16} /> PhD (MIT)</span>
              <span className="w-1 h-1 bg-black/20 rounded-full" />
              <span className="flex items-center gap-1.5">Industry Pioneer in AI Adoption and Innovation</span>
              <span className="w-1 h-1 bg-black/20 rounded-full" />
              <span className="flex items-center gap-1.5">SciML & AI4Science</span>
            </div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col justify-between border-black/5"
              >
                <span className="mono-label mb-4">{stat.label}</span>
                <div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] opacity-40 font-mono uppercase tracking-wider leading-tight">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Strategic Domains Section */}
        <section id="pillars" className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="mono-label">Expertise</span>
              <h2 className="text-4xl font-bold mt-2">Core Strategic Domains</h2>
            </div>
            <p className="text-sm opacity-50 max-w-xs text-right hidden md:block">
              A multi-disciplinary approach to solving high-stakes industrial challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActivePillar(pillar)}
                className="glass-card flex flex-col h-full group cursor-pointer hover:border-black/20"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110", pillar.color)}>
                  <pillar.icon size={24} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
                <p className="text-sm text-charcoal/60 mb-6 flex-grow leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <span className="mono-label block mb-2">Core Tracks</span>
                    <ul className="space-y-1">
                      {pillar.highlights.map((h, j) => (
                        <li key={j} className="text-xs flex items-center gap-2">
                          <div className="w-1 h-1 bg-black/20 rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                    {pillar.keywords.map((k, j) => (
                      <span key={j} className="text-[9px] font-mono px-2 py-0.5 bg-black/5 rounded uppercase tracking-wider opacity-60">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section id="skills" className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="mono-label">Technical Stack</span>
              <h2 className="text-4xl font-bold mt-2">Skills & Tools</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center">
                    <cat.icon size={16} />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="text-[10px] font-mono px-2 py-1 bg-white border border-black/5 rounded shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-24">
          <div className="glass-card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="mono-label">Research</span>
                <h2 className="text-3xl font-bold mt-2">Selected Publications</h2>
              </div>
              <a 
                href="https://scholar.google.com/citations?user=_-lid8kAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:underline"
              >
                Google Scholar <ExternalLink size={12} />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
              {publications.map((pub, i) => (
                <div key={i} className="group flex items-start gap-4 pb-6 border-b border-black/5 last:border-0 lg:[&:nth-last-child(-n+2)]:border-0">
                  <div className="mt-1 text-xs font-mono opacity-30">{pub.year}</div>
                  <div className="flex-grow">
                    <h4 className="font-medium group-hover:text-black transition-colors leading-snug mb-1">
                      {pub.title}
                    </h4>
                    <p className="text-xs opacity-50 italic">{pub.journal}</p>
                  </div>
                  <a href={pub.link} className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="w-full py-4 border border-dashed border-black/20 rounded-xl text-xs font-mono uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
                View all 20+ papers on Google Scholar
              </button>
            </div>
          </div>
        </section>

        {/* Current Focus Section */}
        <section id="current-focus" className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="mono-label">Active Innovation</span>
              <h2 className="text-4xl font-bold mt-2">What I'm Working On Now</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-black/5 relative overflow-hidden mb-6 rounded-xl border border-black/5">
                <img 
                  src="/figures/MTPBO.png" 
                  alt="Multi-Task Preferential BO" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/optimization/800/450';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-mono rounded uppercase tracking-wider">Active Research</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-mono rounded uppercase tracking-wider">Optimization</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Multi-Task Preferential BO for MPC Tuning</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  Developing Multi-Task Preferential Bayesian Optimization (MTPBO), a framework designed to accelerate Model Predictive Control (MPC) tuning by leveraging human preference data from prior tasks to optimize a latent utility function. By utilizing a multi-task Gaussian process and a novel initialization strategy, MTPBO achieves more preferred controller responses with a significantly lower experimental budget than standard preferential optimization methods.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col justify-center items-center text-center p-12 border-dashed"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <Cpu className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">LLM + Collaborative Bayesian Optimization</h3>
              <p className="text-sm text-charcoal/50 italic mb-8">
                Content in development. Exploring the intersection of Large Language Models and expert-in-the-loop chemical optimization.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono opacity-40 uppercase tracking-widest">
                <Zap size={14} /> Coming Soon
              </div>
            </motion.div>
          </div>
        </section>


        {/* Connect Section */}
        <section id="connect" className="mb-24">
          <div className="rounded-3xl bg-charcoal text-paper p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-4 block">Connect</span>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Let's build the future of Industrial AI together.</h3>
                <p className="text-white/60 mb-8 max-w-md text-lg">
                  Open for collaborations in SciML, Generative AI, Machine Vision and Industrial Digital Transformation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/peng-you-7766a15a/" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
                  <span className="flex items-center gap-3 text-sm font-mono text-white"><Linkedin size={20} className="text-emerald-400" /> LinkedIn</span>
                  <ArrowRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
                <a href="https://github.com/penguinyou88" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
                  <span className="flex items-center gap-3 text-sm font-mono text-white"><Github size={20} className="text-emerald-400" /> GitHub</span>
                  <ArrowRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
                <a href="mailto:penguinyou88@gmail.com" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
                  <span className="flex items-center gap-3 text-sm font-mono text-white"><Mail size={20} className="text-emerald-400" /> Email</span>
                  <ArrowRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
                <div className="flex items-center justify-between p-5 rounded-2xl bg-emerald-500 text-white border-none group cursor-pointer hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                  <span className="flex items-center gap-3 text-sm font-mono font-bold uppercase tracking-wider">Resume</span>
                  <FileText size={20} className="group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold tracking-tighter">YOU PENG</span>
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-widest ml-4">
              © 2024 Scientific Modernism
            </span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Back to Top</a>
            <a href="https://scholar.google.com/citations?user=_-lid8kAAAAJ&hl=en" className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Scholar</a>
            <a href="https://www.linkedin.com/in/peng-you-7766a15a/" className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
