import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import forumLogo from 'figma:asset/e45d7d0f86f9b09c3384035246bdbd993e7b42e5.png';
import messagingAppImage from 'figma:asset/ab426fa468e4bbd9cc3225901c3f6b51f23d1466.png';
import groundwaterImage from 'figma:asset/aef6db5950b1031ed9fbe92345c055675bfb101f.png';

export function Projects() {
  const projects = [
    {
      title: "Full-Stack Web Forum",
      description: "Scalable forum with authentication, user roles & voting system",
      tags: ["React", "Express", "Prisma", "Docker"],
      imageSrc: forumLogo,
      link: "https://docs.eugeniobaye.fr/2-Projects/School-Projects/IGnition",
      githubLink: null
    },
    {
      title: "Groundwater Prediction AI",
      description: "Machine learning model (LSTM) trained on rainfall & piezometric data to forecast groundwater levels",
      tags: ["Python", "TensorFlow", "Data Science"],
      imageSrc: groundwaterImage,
      link: null,
      githubLink: null
    },
    {
      title: "Real-Time Messaging App",
      description: "Client-server architecture for text & file exchange",
      tags: ["C", "Socket Programming", "Networking"],
      imageSrc: messagingAppImage,
      link: null,
      githubLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            A few examples of projects to showcase among others
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all flex flex-col">
              <div className="aspect-video bg-zinc-900 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <CardTitle className="text-zinc-100 text-xl">{project.title}</CardTitle>
                <CardDescription className="text-zinc-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-emerald-400/10 text-emerald-400 border-emerald-400/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <TooltipProvider>
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-700 text-zinc-300 px-4 py-2 rounded-lg hover:bg-zinc-600 hover:shadow-md hover:shadow-emerald-500/10 transition-all"
                    >
                      <ExternalLink size={16} />
                      View More
                    </a>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-700/50 text-zinc-500 px-4 py-2 rounded-lg cursor-not-allowed">
                          <ExternalLink size={16} />
                          View More
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Not available right now</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
                <TooltipProvider>
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-zinc-600 text-zinc-300 px-4 py-2 rounded-lg hover:border-emerald-400 hover:text-emerald-400 hover:shadow-md hover:shadow-emerald-500/10 transition-all"
                    >
                      <Github size={16} />
                    </a>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="inline-flex items-center justify-center gap-2 border border-zinc-600/50 text-zinc-500 px-4 py-2 rounded-lg cursor-not-allowed">
                          <Github size={16} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Not available right now</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Eugenio-BAYE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
