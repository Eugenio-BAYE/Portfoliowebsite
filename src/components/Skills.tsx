import { Code, Wrench, Users, FileCode, Database, Atom, Triangle, Server, Container, Brain, Zap, GitBranch, Target, Lightbulb, Clock, Coffee } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", icon: FileCode },
        { name: "JavaScript/TypeScript", icon: FileCode },
        { name: "C", icon: FileCode },
        { name: "C#", icon: FileCode },
        { name: "Java", icon: Coffee },
        { name: "SQL", icon: Database }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: [
        { name: "React", icon: Atom },
        { name: "Angular", icon: Triangle },
        { name: "Node.js", icon: Server },
        { name: "Docker", icon: Container },
        { name: "TensorFlow", icon: Brain },
        { name: "PyTorch", icon: Zap },
        { name: "Git", icon: GitBranch }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Autonomous", icon: Target },
        { name: "Proactive", icon: Lightbulb },
        { name: "Teamwork", icon: Users },
        { name: "Time Management", icon: Clock }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div key={index} className="group bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/80 rounded-2xl p-8 space-y-5 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:bg-zinc-800/70 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all">
                    <CategoryIcon className="text-emerald-400" size={28} />
                  </div>
                  <h3 className="text-zinc-50 text-xl">{category.title}</h3>
                </div>
                <div className="h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent"></div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-700/50 text-zinc-300 rounded-lg border border-zinc-600 hover:border-emerald-400/50 hover:bg-zinc-700/70 hover:text-emerald-400 transition-all group/skill"
                      >
                        <SkillIcon size={16} className="text-zinc-400 group-hover/skill:text-emerald-400 transition-colors" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
