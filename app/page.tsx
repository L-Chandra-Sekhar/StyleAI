import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Calendar, 
  ShoppingBag, 
  Camera, 
  Sparkles, 
  Shirt, 
  Palette, 
  Clock,
  MessageSquare
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
          <div 
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Your Personal AI Stylist
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Get personalized clothing recommendations based on weather, events, and your unique style preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How StyleAI Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform analyzes your preferences, body type, and external factors to create the perfect outfit recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Camera className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Upload Photos</h3>
                <p className="text-muted-foreground">
                  Upload selfies and photos of your current wardrobe for our AI to analyze.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Weather Integration</h3>
                <p className="text-muted-foreground">
                  Get outfit recommendations based on real-time weather conditions in your area.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Event-Based Styling</h3>
                <p className="text-muted-foreground">
                  Input your upcoming events and receive tailored outfit suggestions for any occasion.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Shop Recommendations</h3>
                <p className="text-muted-foreground">
                  Find and purchase the perfect items from our curated selection of partner stores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">The StyleAI Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our advanced AI technology makes finding the perfect outfit simple and enjoyable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070" 
                    alt="AI Analyzing Style" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="font-semibold text-xl mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your body type, skin tone, and style preferences to understand what works best for you.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071" 
                    alt="Personalized Recommendations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="font-semibold text-xl mb-2">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Receive custom outfit suggestions that match your style, the weather, and your upcoming events.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=2031" 
                    alt="Shop and Save" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="font-semibold text-xl mb-2">Shop and Save</h3>
                <p className="text-muted-foreground">
                  Shop recommended items directly through our platform and save your favorite looks for future reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Chat Feature Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Chat with Your AI Stylist</h2>
                <p className="text-muted-foreground mb-6">
                  Our new chat feature lets you have real-time conversations with our AI stylist. Ask questions, get advice, and receive instant fashion guidance tailored to your needs.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Instant Style Advice</h3>
                      <p className="text-muted-foreground">
                        Get immediate answers to your fashion questions, from color coordination to outfit selection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Personalized Conversations</h3>
                      <p className="text-muted-foreground">
                        Our AI remembers your preferences and previous interactions to provide increasingly tailored advice.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Available 24/7</h3>
                      <p className="text-muted-foreground">
                        Get fashion advice anytime, anywhere - our AI stylist is always ready to help.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/chat">
                    <Button size="lg">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Try AI Chat Now
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
                    alt="AI Chat Feature" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-lg inline-block mb-2">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Real-time Fashion Advice</h3>
                      <p className="text-sm opacity-90">Powered by advanced AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose StyleAI?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Advanced AI Technology</h3>
                      <p className="text-muted-foreground">
                        Our cutting-edge AI algorithms provide highly accurate and personalized recommendations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shirt className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Personalized Experience</h3>
                      <p className="text-muted-foreground">
                        Get recommendations tailored specifically to your body type, preferences, and lifestyle.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Style Evolution</h3>
                      <p className="text-muted-foreground">
                        Our AI learns from your feedback to continuously improve recommendations over time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Time-Saving</h3>
                      <p className="text-muted-foreground">
                        Eliminate the stress and time spent deciding what to wear with instant outfit suggestions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" 
                    alt="StyleAI Benefits" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Style?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of users who have revolutionized their wardrobe with StyleAI's personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Try AI Chat
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}