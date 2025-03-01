"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  Upload, 
  Cloud, 
  Calendar, 
  Shirt, 
  Sparkles, 
  RefreshCw,
  ThermometerSun,
  Umbrella,
  Wind,
  Sun,
  CloudRain
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("today");
  const [weatherData, setWeatherData] = useState({
    temperature: 72,
    condition: "Sunny",
    humidity: 45,
    windSpeed: 8
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [outfitGenerated, setOutfitGenerated] = useState(false);
  const [location, setLocation] = useState("New York, NY");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateOutfit = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setOutfitGenerated(true);
    }, 2000);
  };

  const updateLocation = () => {
    // In a real app, this would fetch new weather data for the location
    console.log("Updating weather for location:", location);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Your Style Dashboard</h1>
          <p className="text-muted-foreground mb-8">Get personalized outfit recommendations based on your preferences and current conditions.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - User Profile & Preferences */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                  <CardDescription>Manage your style preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <Shirt className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">Premium Member</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Style Preferences</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">Casual</Button>
                      <Button variant="outline" size="sm">Minimalist</Button>
                      <Button variant="outline" size="sm">Modern</Button>
                      <Button variant="secondary" size="sm">+ Add More</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Favorite Colors</Label>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                      <div className="w-6 h-6 rounded-full bg-emerald-600"></div>
                      <Button variant="ghost" size="sm" className="h-6 px-2">+</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Body Type</Label>
                    <Select defaultValue="athletic">
                      <SelectTrigger>
                        <SelectValue placeholder="Select body type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="athletic">Athletic</SelectItem>
                        <SelectItem value="slim">Slim</SelectItem>
                        <SelectItem value="average">Average</SelectItem>
                        <SelectItem value="curvy">Curvy</SelectItem>
                        <SelectItem value="plus">Plus Size</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Current Weather</CardTitle>
                  <CardDescription>Outfit recommendations based on local conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sun className="h-10 w-10 text-yellow-500" />
                      <div>
                        <p className="text-2xl font-semibold">{weatherData.temperature}°F</p>
                        <p className="text-muted-foreground">{weatherData.condition}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Feels like 75°F</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Umbrella className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Humidity {weatherData.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Wind {weatherData.windSpeed} mph</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CloudRain className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">0% chance of rain</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-1">Location</p>
                    <div className="flex items-center">
                      <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="h-8"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-2 h-8"
                        onClick={updateLocation}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Middle Column - Outfit Generator */}
            <div className="space-y-6">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Outfit Generator</CardTitle>
                  <CardDescription>Get AI-powered outfit recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex-1">
                  <Tabs defaultValue="today" onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="today">Today</TabsTrigger>
                      <TabsTrigger value="event">Event</TabsTrigger>
                      <TabsTrigger value="custom">Custom</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="today" className="space-y-4">
                      <div className="text-center py-2">
                        <p>Based on today's weather and your preferences</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="event" className="space-y-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Event Type</Label>
                          <Select defaultValue="casual">
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casual">Casual Outing</SelectItem>
                              <SelectItem value="formal">Formal Event</SelectItem>
                              <SelectItem value="business">Business Meeting</SelectItem>
                              <SelectItem value="date">Date Night</SelectItem>
                              <SelectItem value="wedding">Wedding</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Date & Time</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Input type="date" />
                            <Input type="time" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="custom" className="space-y-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Style Vibe</Label>
                          <Select defaultValue="casual">
                            <SelectTrigger>
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casual">Casual</SelectItem>
                              <SelectItem value="formal">Formal</SelectItem>
                              <SelectItem value="streetwear">Streetwear</SelectItem>
                              <SelectItem value="bohemian">Bohemian</SelectItem>
                              <SelectItem value="vintage">Vintage</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Color Palette</Label>
                          <Select defaultValue="neutral">
                            <SelectTrigger>
                              <SelectValue placeholder="Select colors" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="neutral">Neutral Tones</SelectItem>
                              <SelectItem value="warm">Warm Colors</SelectItem>
                              <SelectItem value="cool">Cool Colors</SelectItem>
                              <SelectItem value="monochrome">Monochrome</SelectItem>
                              <SelectItem value="bright">Bright & Bold</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label>Formality Level</Label>
                            <span className="text-sm text-muted-foreground">Casual to Formal</span>
                          </div>
                          <Slider defaultValue={[50]} max={100} step={1} />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="border-2 border-dashed rounded-lg p-4 text-center">
                    {uploadedImage ? (
                      <div className="relative">
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded" 
                          className="max-h-[200px] mx-auto rounded-md"
                        />
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="absolute top-2 right-2"
                          onClick={() => setUploadedImage(null)}
                        >
                          Change
                        </Button>
                      </div>
                    ) : (
                      <div className="py-4">
                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload a selfie or photo of your current wardrobe
                        </p>
                        <Label 
                          htmlFor="picture" 
                          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 cursor-pointer"
                        >
                          Upload Image
                        </Label>
                        <Input 
                          id="picture" 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleImageUpload}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={generateOutfit}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Outfit
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Right Column - Recommendations */}
            <div>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Your Recommendations</CardTitle>
                  <CardDescription>AI-generated outfit suggestions</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {outfitGenerated ? (
                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070" 
                          alt="Outfit Recommendation" 
                          className="w-full h-auto"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-lg">Casual Summer Look</h3>
                          <p className="text-muted-foreground text-sm">Perfect for today's sunny weather</p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="font-medium text-sm">Outfit Components:</p>
                          <ul className="text-sm space-y-1">
                            <li className="flex justify-between">
                              <span>• Light blue cotton shirt</span>
                              <a href="#" className="text-primary hover:underline">Shop</a>
                            </li>
                            <li className="flex justify-between">
                              <span>• Beige chino shorts</span>
                              <a href="#" className="text-primary hover:underline">Shop</a>
                            </li>
                            <li className="flex justify-between">
                              <span>• White canvas sneakers</span>
                              <a href="#" className="text-primary hover:underline">Shop</a>
                            </li>
                            <li className="flex justify-between">
                              <span>• Minimal leather watch</span>
                              <a href="#" className="text-primary hover:underline">Shop</a>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="font-medium text-sm">AI Stylist Notes:</p>
                          <p className="text-sm text-muted-foreground">
                            This outfit balances comfort and style for today's warm weather. The light colors reflect the sun and keep you cool, while the fitted silhouette complements your athletic build.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          Save to Gallery
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Regenerate
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4">
                      <Shirt className="h-16 w-16 text-muted-foreground mb-4" />
                      <h3 className="font-medium text-lg mb-2">No Outfits Generated Yet</h3>
                      <p className="text-muted-foreground mb-6">
                        Fill in your preferences and generate your first AI-powered outfit recommendation.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}