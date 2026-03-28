import { GraduationCap, Languages, Zap, ExternalLink } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-zinc-300 max-w-3xl text-lg leading-relaxed">
            Engineering student finishing my degree at <span className="text-zinc-100">Polytech Montpellier</span>, focused on <span className="text-emerald-400">AI integration</span> and <span className="text-emerald-400">full-stack development</span>. I like building things that actually work, from research prototypes to production-ready apps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Education Card */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-4 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
              <GraduationCap className="text-emerald-400" size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-zinc-50 text-xl">Education</h3>
              <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
              <p className="text-zinc-300 leading-relaxed">
                <span className="text-emerald-400 font-medium">5th year</span> Engineering student in Data Science, Management & Software Architecture
              </p>
              <a
                href="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/data-science-management-software/formation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-400 underline underline-offset-2 hover:text-emerald-400 transition-colors"
              >
                Polytech Montpellier
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Currently Card */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-4 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
              <Zap className="text-emerald-400" size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-zinc-50 text-xl">Currently</h3>
              <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-zinc-300">Building <span className="text-zinc-100">Miral</span>, a personal AI assistant</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-zinc-300">Contributing to open source projects</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-zinc-300">Exploring AI tools and frameworks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-4 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
              <Languages className="text-emerald-400" size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-zinc-50 text-xl">Languages</h3>
              <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 font-medium">French</span>
                  <span className="text-zinc-500 text-sm">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 font-medium">English</span>
                  <span className="text-emerald-400 text-sm font-medium">TOEIC 965/990</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 font-medium">Spanish</span>
                  <span className="text-zinc-500 text-sm">Conversational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
