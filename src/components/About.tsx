import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 85 },
  ];

  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'MongoDB',
    'PostgreSQL', 'Python', 'Django', 'AWS', 'Docker', 'Git',
    'Figma', 'Tailwind CSS', 'TypeScript', 'GraphQL'
  ];

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks and libraries.'
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications with scalable architecture.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences that drive engagement.'
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Providing technical guidance and strategic planning for your projects.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 2+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into web development started 2 years ago when I discovered the power 
                of code to bring ideas to life. What began as curiosity quickly became a passion 
                for creating digital experiences that matter.
              </p>
              <p>
                I specialize in full-stack development with a focus on React, Node.js, and modern 
                web technologies. I believe in writing clean, maintainable code and creating 
                user-centered designs that solve real problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers in my community.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-smooth">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full skill-progress transition-smooth"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">What I Do</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I offer a comprehensive range of services to help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-shiny card-gradient border-border/50 transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};