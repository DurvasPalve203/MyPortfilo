import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      slug: 'future-tech-store',
      title: 'Future Tech Store',
      description:
        'A sleek, fully responsive Task Scheduler built with React, Tailwind CSS, and Vite.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      repoUrl: '#',
      liveUrl: 'https://ftstore.netlify.app/',
      featured: true,
      tags: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      slug: 'safe-exam-monitoring-system',
      title: 'Safe Exam Monitoring System',
      description:
        'AI-proctored exam platform (React + Supabase). On-device TFJS person/phone detection, live overlays, violation tracking, email alerts, auto termination. Privacy-first (no video upload).',
      image: '/safe-exam.png', // <-- updated for public folder
      repoUrl: 'https://github.com/DurvasPalve203/Safe-Exam-Monitor-System',
      liveUrl: 'https://safexmonitoringsys.netlify.app/',
      featured: true,
      tags: ['React', 'Supabase', 'TensorFlow.js', 'AI Proctoring'],
    },
  ];

  // pick only featured projects
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some recent projects that highlight my skills and passion
            for building meaningful digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-10 md:grid-cols-2">
          {featured.map((project) => (
            <Card
              key={project.slug}
              className="group card-gradient border-border/50 hover:shadow-elegant transition-smooth overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>

                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="icon" variant="glass" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="icon" variant="glass" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-3 w-full">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="default" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
