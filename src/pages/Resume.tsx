import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';

const Resume = () => {
  const personalInfo = {
    name: 'Durvas Palve',
    title: 'Full-Stack Developer',
    email: 'durvaspalve18@gmail.com',
    phone: '+917038650792',
    location: 'Pune,Maharastra',
    website: 'durvas.portfilo'
  };

  const experiences = [
    {
      title: 'Objective',
      company: '',
      location: '',
      period: '2025 - Present',
      responsibilities: [
'Currently pursuing Bachelor of Science in Computer Science at VIT College, Pune (2nd Year)',

'Strong interest in Full-Stack Web Development, with hands-on experience in HTML, CSS, JavaScript, PHP, and React',

'Passionate about building dynamic web applications and learning modern technologies',

'Eager to apply classroom knowledge to real-world projects and internship opportunities' , 

'Committed to continuous growth through internships, online bootcamps, and open-source contributions',
]
    },
    {
      title: 'Full-Stack Developer',
      company: '',
      location: '',
      period: '2024 - 2025',
      responsibilities: [
        'Developed responsive web applications using React and Vue.js',
        'Optimized application performance resulting in 40% faster load times',
        'Worked closely with UX designers to implement user-friendly interfaces',
        'Maintained and improved existing codebase for 10+ client projects'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: '',
      location: '',
      period: '2024 - 2025',
      responsibilities: [
        'Built and maintained Club website using HTML, CSS, and JavaScript',
        'Assisted in developing RESTful APIs using Node.js and Express',
        'Participated in agile development process and sprint planning',
        'Contributed to open-source projects and internal tools'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'VIT College Pune',
      period: '2024 - 2028',
      gpa: '9.35/10'
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      school: 'General Assembly',
      period: '2024',
      gpa: 'Certificate'
    }
  ];

  const skills = {
    'Frontend': ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    'Tools & Technologies': ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack', 'Vite'],
    'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Project Management']
  };

  const achievements = [
    'Led team that won "Best Innovation" award at company hackathon',
    'Increased application performance by 50% through optimization',
    'Successfully delivered 15+ projects on time and within budget',
    'Mentored 5 junior developers who were promoted within 1 year'
  ];

  const downloadResume = () => {
    // In a real application, this would trigger a PDF download
    console.log('Downloading resume...');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 animated-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Resume</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive overview of my professional experience, skills, and achievements 
              in web development and software engineering.
            </p>
            <Button variant="hero" size="lg" onClick={downloadResume}>
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </div>
        </section>

        {/* Resume Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Personal Information */}
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                  <p className="text-xl text-primary mb-6">{personalInfo.title}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span>{personalInfo.website}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-6 pb-8 last:pb-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-secondary/20 pl-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-secondary font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.gpa}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary/20 transition-smooth">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 font-bold">★</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Need a PDF copy?</h3>
              <Button variant="cta" size="lg" onClick={downloadResume}>
                <Download className="h-5 w-5 mr-2" />
                Download Full Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;