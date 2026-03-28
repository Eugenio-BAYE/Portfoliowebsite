import { Github, Linkedin } from "lucide-react";
import profileImage from "../assets/Hero.jpeg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-zinc-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-emerald-400">Eugénio Baye</span>
            </h1>
            
            <p className="text-zinc-300 text-xl max-w-lg leading-relaxed">
              <span className="text-emerald-400">5th Year</span> Engineering Student specializing in <span className="text-zinc-100">Software Engineering</span> & <span className="text-zinc-100">Management</span>
            </p>
            
            <p className="text-zinc-400 max-w-lg text-lg leading-relaxed">
              Passionate about <span className="text-zinc-200">AI integration</span>, <span className="text-zinc-200">full-stack development</span>, and creating impactful solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com/in/eugénio-baye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-400 text-zinc-950 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
              
              <a 
                href="https://github.com/Eugenio-BAYE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm text-zinc-300 px-6 py-3 rounded-lg hover:border-emerald-400 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20">
                <img 
                  src={profileImage} 
                  alt="Eugénio Baye"
                  className="relative w-full h-auto object-cover object-[30%_center] brightness-110 contrast-105"
                  style={{ objectPosition: '30% center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
