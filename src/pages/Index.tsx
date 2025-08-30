import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, BookOpen, Mic, Video, Globe, Heart, Users, Star, Play, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/heritage-hero.jpg";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login - in real app this would authenticate
    setIsLoginOpen(false);
    navigate("/storyteller");
  };

  const handleSignup = () => {
    // Simulate signup - in real app this would create account
    setIsSignupOpen(false);
    navigate("/storyteller");
  };

  return (
    <div className="min-h-screen bg-gradient-cultural">
      {/* Header */}
      <header className="bg-heritage-burgundy text-heritage-cream shadow-heritage">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-heritage-gold" />
              <h1 className="text-2xl font-bold">Heritage Tales AI</h1>
            </div>
            <div className="flex items-center gap-4">
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-heritage-cream text-heritage-cream hover:bg-heritage-cream hover:text-heritage-burgundy">
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-heritage-warm border-heritage-saffron/20">
                  <DialogHeader>
                    <DialogTitle className="text-heritage-burgundy">Welcome Back</DialogTitle>
                    <DialogDescription>
                      Sign in to continue your cultural storytelling journey
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button onClick={handleLogin} className="w-full" variant="hero">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Enter Heritage Tales
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-heritage-warm border-heritage-saffron/20">
                  <DialogHeader>
                    <DialogTitle className="text-heritage-burgundy">Join Heritage Tales</DialogTitle>
                    <DialogDescription>
                      Create your account to start preserving cultural stories
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button onClick={handleSignup} className="w-full" variant="hero">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Begin Your Journey
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Ancient Indian manuscripts and cultural heritage artifacts"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-storyteller opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-heritage-cream mb-6 leading-tight">
              Revive India's Rich 
              <span className="text-heritage-gold"> Heritage</span>
            </h1>
            <p className="text-xl text-heritage-cream/90 mb-8 leading-relaxed">
              Transform ancient folk tales, mythological stories, and historical narratives into 
              immersive AI-powered experiences. Preserve cultural wisdom for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    <Sparkles className="h-6 w-6 mr-2" />
                    Start Creating Stories
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-heritage-cream text-heritage-cream hover:bg-heritage-cream hover:text-heritage-burgundy">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-heritage-burgundy mb-4">
            AI-Powered Cultural Storytelling
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your heritage stories into captivating multi-sensory experiences using cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-heritage-warm shadow-cultural border-heritage-saffron/20 hover:shadow-heritage transition-all duration-300">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 mx-auto bg-heritage-saffron/10 rounded-full flex items-center justify-center mb-4">
                <Mic className="h-8 w-8 text-heritage-saffron" />
              </div>
              <CardTitle className="text-heritage-burgundy">Immersive Audio</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Generate rich, emotional narration in multiple Indian languages with culturally authentic voice tones
              </p>
            </CardContent>
          </Card>

          <Card className="bg-heritage-warm shadow-cultural border-heritage-saffron/20 hover:shadow-heritage transition-all duration-300">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 mx-auto bg-heritage-saffron/10 rounded-full flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-heritage-saffron" />
              </div>
              <CardTitle className="text-heritage-burgundy">Visual Storytelling</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Create expressive AI-driven video content that brings ancient tales to life with stunning visuals
              </p>
            </CardContent>
          </Card>

          <Card className="bg-heritage-warm shadow-cultural border-heritage-saffron/20 hover:shadow-heritage transition-all duration-300">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 mx-auto bg-heritage-saffron/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-heritage-saffron" />
              </div>
              <CardTitle className="text-heritage-burgundy">Cultural Preservation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Ensure India's timeless stories and wisdom are preserved and made engaging for modern audiences
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-heritage-burgundy text-heritage-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-heritage-gold mb-2">1000+</div>
              <div className="text-heritage-cream/80">Stories Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-heritage-gold mb-2">15</div>
              <div className="text-heritage-cream/80">Indian Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-heritage-gold mb-2">50+</div>
              <div className="text-heritage-cream/80">Cultural Regions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-heritage-gold mb-2">95%</div>
              <div className="text-heritage-cream/80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Preserve Your Heritage Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of storytellers preserving India's cultural legacy through AI-powered narration
          </p>
          <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-heritage-burgundy hover:bg-heritage-cream">
                <Heart className="h-5 w-5 mr-2" />
                Start Your Cultural Journey
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heritage-burgundy text-heritage-cream py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-heritage-gold" />
              <span className="text-xl font-bold">Heritage Tales AI</span>
            </div>
            <div className="text-heritage-cream/70 text-center">
              <p>Preserving India's cultural heritage through AI technology</p>
              <p className="mt-2">© 2024 Heritage Tales AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
