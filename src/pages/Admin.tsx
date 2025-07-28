import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsLoggedIn(true);
      toast({ title: "Login successful", description: "Welcome to the admin panel!" });
    } else {
      toast({ title: "Login failed", description: "Invalid credentials", variant: "destructive" });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <section className="py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[80vh]">
            <Card className="w-full max-w-md card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={loginData.username}
                      onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="Enter username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter password"
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="hero">
                    Login
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <Button onClick={() => setIsLoggedIn(false)} variant="outline">
                Logout
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle>Blog Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Post
                  </Button>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                      <span>React & TypeScript Guide</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline"><Edit className="h-4 w-4" /></Button>
                        <Button size="sm" variant="outline"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle>Contact Messages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                      <div>
                        <p className="font-medium">John Smith</p>
                        <p className="text-sm text-muted-foreground">Project inquiry</p>
                      </div>
                      <Button size="sm" variant="outline"><Eye className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;