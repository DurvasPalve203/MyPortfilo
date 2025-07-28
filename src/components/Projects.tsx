import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full-Stack', 'Mobile', 'Design'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'Full-Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with interactive maps, forecasts, and location-based weather alerts using modern APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      category: 'Frontend',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with blog functionality, contact forms, and admin panel for content management.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      category: 'Full-Stack',
      technologies: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking application with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      category: 'Design',
      technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="transition-smooth"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group card-gradient border-border/50 hover:shadow-elegant transition-smooth overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="icon" variant="glass" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="glass" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <Button variant="cta" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};