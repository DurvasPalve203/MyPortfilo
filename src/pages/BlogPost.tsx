import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would be fetched from Supabase
  const blogPost = {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    content: `
      <p>React and TypeScript make a powerful combination for building scalable, maintainable web applications. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and establish best practices for type-safe development.</p>

      <h2>Why TypeScript with React?</h2>
      <p>TypeScript brings several advantages to React development:</p>
      <ul>
        <li><strong>Type Safety:</strong> Catch errors at compile time rather than runtime</li>
        <li><strong>Better IDE Support:</strong> Enhanced autocomplete, refactoring, and navigation</li>
        <li><strong>Documentation:</strong> Types serve as living documentation for your components</li>
        <li><strong>Scalability:</strong> Easier to maintain large codebases</li>
      </ul>

      <h2>Setting Up Your Project</h2>
      <p>The easiest way to start a new React project with TypeScript is using Create React App:</p>
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>This command creates a new React project with TypeScript configuration already set up.</p>

      <h2>Component Types</h2>
      <p>When creating React components with TypeScript, you'll primarily work with these types:</p>
      
      <h3>Function Components</h3>
      <pre><code>import React from 'react';

interface Props {
  title: string;
  count: number;
  isVisible?: boolean;
}

const MyComponent: React.FC<Props> = ({ title, count, isVisible = true }) => {
  return (
    <div>
      <h1>{title}</h1>
      {isVisible && <p>Count: {count}</p>}
    </div>
  );
};</code></pre>

      <h3>Event Handlers</h3>
      <p>TypeScript provides specific types for event handlers:</p>
      <pre><code>const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked!');
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};</code></pre>

      <h2>Best Practices</h2>
      <p>Here are some best practices when working with React and TypeScript:</p>
      
      <ol>
        <li><strong>Define interfaces for props:</strong> Always create interfaces for component props to ensure type safety.</li>
        <li><strong>Use union types:</strong> For props that can accept multiple types, use union types.</li>
        <li><strong>Leverage generic types:</strong> Use generics for reusable components.</li>
        <li><strong>Type your hooks:</strong> Don't forget to type useState and useEffect properly.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>React and TypeScript together provide a robust foundation for building modern web applications. While there's a learning curve, the benefits in terms of code quality, maintainability, and developer experience make it worthwhile.</p>
      
      <p>Start small, gradually adopt TypeScript patterns, and you'll soon find yourself writing more confident, bug-free React code.</p>
    `,
    author: 'Durvas Palve',
    publishedAt: '2025-01-15',
    readTime: '5 min',
    category: 'React',
    tags: ['React', 'TypeScript', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(blogPost.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </div>
                <Badge variant="secondary">{blogPost.category}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blogPost.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share Button */}
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video mb-12 rounded-lg overflow-hidden shadow-elegant">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none
              prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-muted prose-pre:border prose-pre:border-border
              prose-li:text-muted-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            ">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </article>

            {/* Author Section */}
            <div className="mt-16 p-6 bg-muted/20 rounded-lg border border-border/50">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">DP</span>
                </div>
                <div>
                  <h3 className="font-semibold">About the Author</h3>
                  <p className="text-muted-foreground">
                   
                    im a passionate full-stack developer with 2+ years of experience 
                    in building web applications. I enjoys sharing knowledge and helping others learn.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-12">
              <Button variant="outline" asChild>
                <Link to="/blog">← Previous Article</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/blog">Next Article →</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;