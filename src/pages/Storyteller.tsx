import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlayCircle, Volume2, FileText, Sparkles, Mic, Video } from "lucide-react";

const Storyteller = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyInput, setStoryInput] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [language, setLanguage] = useState("");
  const [hasResults, setHasResults] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setHasResults(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-cultural">
      {/* Header */}
      <header className="bg-heritage-burgundy text-heritage-cream p-6 shadow-heritage">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-heritage-gold" />
            <h1 className="text-2xl font-bold">Heritage Tales AI</h1>
          </div>
          <Button variant="outline" className="border-heritage-cream text-heritage-cream hover:bg-heritage-cream hover:text-heritage-burgundy">
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-140px)]">
          {/* Left Panel - Input Form */}
          <Card className="bg-heritage-warm shadow-cultural border-heritage-saffron/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-heritage-burgundy flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Create Your Cultural Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="story" className="text-heritage-burgundy font-semibold">
                  Story or Narrative
                </Label>
                <Textarea
                  id="story"
                  placeholder="Enter your Indian folk tale, mythological story, or historical narrative here..."
                  value={storyInput}
                  onChange={(e) => setStoryInput(e.target.value)}
                  className="min-h-[200px] resize-none border-heritage-saffron/30 focus:border-heritage-saffron"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-heritage-burgundy font-semibold">Narrative Tone</Label>
                  <Select value={selectedTone} onValueChange={setSelectedTone}>
                    <SelectTrigger className="border-heritage-saffron/30 focus:border-heritage-saffron">
                      <SelectValue placeholder="Choose tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wise">Wise Storyteller</SelectItem>
                      <SelectItem value="dramatic">Dramatic Epic</SelectItem>
                      <SelectItem value="gentle">Gentle Grandmother</SelectItem>
                      <SelectItem value="heroic">Heroic Saga</SelectItem>
                      <SelectItem value="mystical">Mystical Sage</SelectItem>
                      <SelectItem value="playful">Playful Children's Tale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-heritage-burgundy font-semibold">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="border-heritage-saffron/30 focus:border-heritage-saffron">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-heritage-burgundy font-semibold">Duration (minutes)</Label>
                <Input 
                  type="number" 
                  placeholder="5"
                  min="1"
                  max="30"
                  className="border-heritage-saffron/30 focus:border-heritage-saffron"
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={!storyInput || !selectedTone || !language || isGenerating}
                className="w-full"
                variant="hero"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="h-5 w-5 animate-spin" />
                    Crafting Your Story...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Generate Heritage Tale
                  </>
                )}
              </Button>

              {isGenerating && (
                <div className="bg-heritage-saffron/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-heritage-burgundy">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span className="text-sm">AI is weaving your cultural narrative...</span>
                  </div>
                  <div className="mt-2 bg-heritage-saffron/20 rounded-full h-2">
                    <div className="bg-heritage-saffron h-2 rounded-full animate-pulse w-2/3"></div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Right Panel - Results */}
          <Card className="bg-heritage-warm shadow-cultural border-heritage-saffron/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-heritage-burgundy flex items-center gap-2">
                <Video className="h-6 w-6" />
                Your Heritage Tale
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!hasResults ? (
                <div className="h-full flex items-center justify-center text-center py-20">
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto bg-heritage-saffron/10 rounded-full flex items-center justify-center">
                      <Sparkles className="h-10 w-10 text-heritage-saffron" />
                    </div>
                    <h3 className="text-xl font-semibold text-heritage-burgundy">
                      Ready to Create Magic
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Fill in the form and watch as AI brings your cultural story to life with immersive narration and visuals.
                    </p>
                  </div>
                </div>
              ) : (
                <Tabs defaultValue="script" className="h-full">
                  <TabsList className="grid w-full grid-cols-3 bg-heritage-saffron/10">
                    <TabsTrigger value="script" className="data-[state=active]:bg-heritage-saffron data-[state=active]:text-white">
                      <FileText className="h-4 w-4 mr-2" />
                      Script
                    </TabsTrigger>
                    <TabsTrigger value="audio" className="data-[state=active]:bg-heritage-saffron data-[state=active]:text-white">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Audio
                    </TabsTrigger>
                    <TabsTrigger value="video" className="data-[state=active]:bg-heritage-saffron data-[state=active]:text-white">
                      <Video className="h-4 w-4 mr-2" />
                      Video
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="script" className="mt-4">
                    <ScrollArea className="h-[500px] pr-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="bg-heritage-gold/20 text-heritage-burgundy">
                            Generated Script
                          </Badge>
                        </div>
                        <div className="prose prose-sm max-w-none text-heritage-burgundy">
                          <h4>The Tale of the Wise Elephant</h4>
                          <p>
                            In the ancient forests of Bharatvarsha, where the sacred rivers flowed and the 
                            trees whispered ancient secrets, there lived a wise elephant named Gajendra. 
                            His wisdom was known throughout the land, and creatures from far and wide would 
                            seek his counsel.
                          </p>
                          <p>
                            One day, a young prince lost his way in the dense forest. The sun was setting, 
                            and shadows grew long and mysterious. Fear crept into his heart as he realized 
                            he was completely lost.
                          </p>
                          <p>
                            It was then that Gajendra appeared, his gentle eyes reflecting the wisdom of ages. 
                            "Fear not, young prince," he said in a voice like distant thunder. "Sometimes we 
                            must lose our way to find our true path."
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="audio" className="mt-4">
                    <div className="space-y-6">
                      <div className="bg-heritage-saffron/10 p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-heritage-burgundy">Audio Narration</h4>
                          <Badge className="bg-heritage-gold text-heritage-burgundy">Ready</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <Button variant="cultural" size="lg">
                            <PlayCircle className="h-5 w-5 mr-2" />
                            Play Story
                          </Button>
                          <div className="flex-1 bg-heritage-saffron/20 h-2 rounded-full">
                            <div className="bg-heritage-saffron h-2 rounded-full w-0 transition-all duration-1000"></div>
                          </div>
                          <span className="text-sm text-heritage-burgundy">5:32</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-heritage-warm rounded-lg border border-heritage-saffron/20">
                          <Mic className="h-8 w-8 mx-auto mb-2 text-heritage-saffron" />
                          <p className="text-sm font-medium text-heritage-burgundy">Narrator Voice</p>
                          <p className="text-xs text-muted-foreground">Wise Storyteller</p>
                        </div>
                        <div className="text-center p-4 bg-heritage-warm rounded-lg border border-heritage-saffron/20">
                          <Volume2 className="h-8 w-8 mx-auto mb-2 text-heritage-saffron" />
                          <p className="text-sm font-medium text-heritage-burgundy">Language</p>
                          <p className="text-xs text-muted-foreground">Hindi</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="video" className="mt-4">
                    <div className="space-y-4">
                      <div className="aspect-video bg-heritage-saffron/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Video className="h-16 w-16 mx-auto mb-4 text-heritage-saffron" />
                          <p className="text-heritage-burgundy font-medium">Video Preview</p>
                          <p className="text-sm text-muted-foreground">AI-generated visual storytelling</p>
                        </div>
                      </div>
                      <Button variant="cultural" className="w-full">
                        <PlayCircle className="h-5 w-5 mr-2" />
                        Watch Heritage Tale
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Storyteller;