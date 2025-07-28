import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock blog posts data - in a real app, this would come from Supabase
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a React project with TypeScript and best practices for type-safe development.',
      content: 'Full article content...',
      author: 'John Doe',
      publishedAt: '2024-01-15',
      readTime: '5 min',
      category: 'React',
      tags: ['React', 'TypeScript', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes.',
      content: 'Full article content...',
      author: 'Durvas Palve',
      publishedAt: '2025-01-10',
      readTime: '7 min',
      category: 'CSS',
      tags: ['Tailwind CSS', 'CSS', 'Design'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Node.js Best Practices for 2024',
      excerpt: 'Explore the latest Node.js best practices, security considerations, and performance optimizations.',
      content: 'Full article content...',
      author: 'Durvas Palve',
      publishedAt: '202-06-05',
      readTime: '10 min',
      category: 'Backend',
      tags: ['Node.js', 'Backend', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop',
      featured: true
    }
  ];

  const categories = ['All', 'React', 'CSS', 'Backend', 'JavaScript'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 animated-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology.
              Join me on my journey of continuous learning and sharing knowledge.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/80 backdrop-blur-sm"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid gap-8">
                {/* Featured Posts */}
                {filteredPosts.filter(post => post.featured).map((post) => (
                  <Card key={post.id} className="card-gradient border-border/50 hover:shadow-elegant transition-smooth overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0">
                    <div className="aspect-video lg:aspect-auto">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-smooth">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" asChild>
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </Card>
                ))}

                {/* Regular Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.filter(post => !post.featured).map((post) => (
                    <Card key={post.id} className="card-gradient border-border/50 hover:shadow-card transition-smooth overflow-hidden group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                        />
                      </div>
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.publishedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                        
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <Link to={`/blog/${post.id}`}>Read Article</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;