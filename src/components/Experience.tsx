import { Briefcase, Calendar, Sparkles } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "AI Integration Research in Game Development",
      company: "Ulster University",
      location: "Derry, Northern Ireland",
      period: "Apr - Aug 2025",
      highlights: ["AI Integration", "Game Development", "Research"],
      description: [
        { text: "Project coordination", bold: "coordination" },
        { text: "AI integration research", bold: "AI" },
        { text: "Educational mobile games", bold: "mobile games" },
        { text: "Documentation & presentation", bold: "Documentation" }
      ]
    },
    {
      title: "Management and Landscaping",
      company: "Côté Jardin",
      location: "Lacoste, France",
      period: "2021 - 2024",
      highlights: ["Management", "IT Systems"],
      description: [
        { text: "Project monitoring & accounting", bold: "Project monitoring" },
        { text: "Information system creation", bold: "IT" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-8 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-zinc-100 text-xl">{exp.title}</h3>
                    <div className="flex items-center gap-3 text-emerald-400">
                      <Briefcase size={18} />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400">{exp.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm border border-emerald-400/20"
                        >
                          <Sparkles size={12} />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 lg:text-right shrink-0">
                    <Calendar size={18} />
                    <span className="whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 ml-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-300 flex gap-3 leading-relaxed">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        {item.text.split(item.bold).map((part, j) => (
                          <span key={j}>
                            {j > 0 && <span className="text-zinc-100">{item.bold}</span>}
                            {part}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
