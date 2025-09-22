import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const project = {
    id: 1,
    title: 'Future Tech Store',
    description:
      'A sleek, fully responsive Task Scheduler built with React, Tailwind CSS, and Vite.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubUrl: '#',
    liveUrl: 'https://ftstore.netlify.app/',
    featured: true,
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here’s a recent project that highlights my skills and passion for
            building meaningful digital experiences.
          </p>
        </div>

        {/* Project Card */}
        <Card className="group card-gradient border-border/50 hover:shadow-elegant transition-smooth overflow-hidden lg:col-span-2">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>

            {/* Project Links Overlay */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="glass" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="glass" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
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
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0">
            <div className="flex gap-3 w-full">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </a>
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
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
