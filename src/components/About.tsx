import { GraduationCap, MapPin, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-zinc-300 max-w-3xl text-lg leading-relaxed">
            <span className="text-emerald-400">Autonomous</span> and <span className="text-emerald-400">proactive</span> engineering student combining <span className="text-zinc-100">technical expertise</span> with strong <span className="text-zinc-100">problem-solving</span> skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Education Card */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-4 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
              <GraduationCap className="text-emerald-400" size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-zinc-50 text-xl">Education</h3>
              <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
              <p className="text-zinc-300 leading-relaxed">
                <span className="text-emerald-400 font-medium">5th year</span> Engineering student
              </p>
              <p className="text-zinc-400 leading-relaxed">
                École Polytechnique Universitaire de <span className="text-zinc-200">Montpellier</span>
              </p>
              <div className="pt-2">
                <span className="inline-block bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-400/20">
                  Computer Science & Management
                </span>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-4 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
              <MapPin className="text-emerald-400" size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-zinc-50 text-xl">Location</h3>
              <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
              <p className="text-zinc-300 leading-relaxed">
                <span className="text-emerald-400 font-medium">Montpellier</span>, France
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Open to opportunities in France & internationally
              </p>
              <div className="flex gap-2 pt-2">
                <span className="inline-block bg-zinc-700/50 text-zinc-300 px-3 py-1 rounded-full text-sm">🇫🇷 France</span>
                <span className="inline-block bg-zinc-700/50 text-zinc-300 px-3 py-1 rounded-full text-sm">🌍 International</span>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-4 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
              <Award className="text-emerald-400" size={28} />
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
