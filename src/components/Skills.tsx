import { Code, Wrench, Users } from "lucide-react";

export function Skills() {
  const programmingSkills = [
    "Python", "JavaScript / TypeScript", "C", "C#", "Java", "SQL"
  ];

  const frameworkSkills = [
    "React", "Angular", "Node.js", "Docker", "TensorFlow", "PyTorch", "Git"
  ];

  const softSkills = [
    { label: "Autonomous", example: "Building Miral as a solo project" },
    { label: "Proactive", example: "Open source contributions" },
    { label: "Collaborative", example: "Academic group projects (IGnition, groundwater AI)" },
    { label: "Adaptable", example: "Research internship abroad at Ulster University" },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Programming */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-5 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
                <Code className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-zinc-50 text-xl">Programming</h3>
            </div>
            <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
            <div className="flex flex-wrap gap-2.5">
              {programmingSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-2 bg-zinc-700/50 text-zinc-300 rounded-lg border border-zinc-600 hover:border-emerald-400/50 hover:bg-zinc-700/70 hover:text-emerald-400 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-5 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
                <Wrench className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-zinc-50 text-xl">Frameworks & Tools</h3>
            </div>
            <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
            <div className="flex flex-wrap gap-2.5">
              {frameworkSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-2 bg-zinc-700/50 text-zinc-300 rounded-lg border border-zinc-600 hover:border-emerald-400/50 hover:bg-zinc-700/70 hover:text-emerald-400 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-5 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
                <Users className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-zinc-50 text-xl">Soft Skills</h3>
            </div>
            <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
            <div className="space-y-3">
              {softSkills.map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-zinc-300">
                    <span className="text-zinc-100">{item.label}:</span> {item.example}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
