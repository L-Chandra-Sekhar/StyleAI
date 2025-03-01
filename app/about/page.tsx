import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Sparkles, 
  Brain, 
  Cloud, 
  ShoppingBag, 
  Users, 
  Shield, 
  Zap, 
  Award 
} from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  About StyleAI
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  StyleAI is revolutionizing personal styling through advanced artificial intelligence. Our mission is to help everyone look and feel their best by providing personalized fashion recommendations tailored to individual preferences, body types, and real-world conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="lg" variant="outline">Try Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074" 
                    alt="StyleAI Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2025, StyleAI was born from a simple observation: despite the abundance of clothing options available today, many people still struggle to put together outfits that make them look and feel confident.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">The Vision</h3>
                <p className="text-muted-foreground">
                  Our founders envisioned a world where everyone could have access to personalized styling advice, regardless of budget or fashion knowledge. They believed AI could democratize fashion expertise.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">The Technology</h3>
                <p className="text-muted-foreground">
                  After years of research and development, our team created a sophisticated AI system capable of understanding individual style preferences, body types, and contextual factors.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">The Community</h3>
                <p className="text-muted-foreground">
                  Today, StyleAI serves thousands of users worldwide, helping them discover their personal style and build confidence through fashion that truly represents who they are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Technology Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
              <p className="text-muted-foreground">
                StyleAI combines cutting-edge artificial intelligence with fashion expertise to deliver personalized recommendations that evolve with you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Advanced AI Analysis</h3>
                      <p className="text-muted-foreground">
                        Our proprietary algorithms analyze thousands of fashion parameters to understand what works best for your unique body type and preferences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Cloud className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Real-Time Weather Integration</h3>
                      <p className="text-muted-foreground">
                        Our system connects to weather APIs to ensure recommendations are always appropriate for current and forecasted conditions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Retail Integration</h3>
                      <p className="text-muted-foreground">
                        StyleAI connects with hundreds of retailers to help you find and purchase recommended items seamlessly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Continuous Learning</h3>
                      <p className="text-muted-foreground">
                        Our AI gets smarter with every interaction, constantly improving recommendations based on your feedback and preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006" 
                    alt="StyleAI Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground">
                StyleAI brings together experts in artificial intelligence, fashion, and technology to create a revolutionary styling experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">Sarah Johnson</h3>
                <p className="text-muted-foreground mb-2">CEO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  Former fashion editor with 15+ years of industry experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">David Chen</h3>
                <p className="text-muted-foreground mb-2">CTO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  AI researcher with background in computer vision and machine learning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                    alt="Maya Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">Maya Patel</h3>
                <p className="text-muted-foreground mb-2">Head of Fashion</p>
                <p className="text-sm text-muted-foreground">
                  Celebrity stylist with expertise in personal styling and trend forecasting.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                  <img 
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">James Wilson</h3>
                <p className="text-muted-foreground mb-2">Lead Developer</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack engineer specializing in AI integration and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                At StyleAI, our core values guide everything we do as we work to transform the personal styling experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Inclusivity</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  We believe fashion should be accessible to everyone. Our technology is designed to serve people of all body types, ages, genders, and style preferences without bias or exclusion.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Privacy</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  We respect your personal data and maintain the highest standards of privacy and security. Your information is only used to improve your styling experience.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Innovation</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with AI and fashion technology, always seeking new ways to enhance the personal styling experience.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Quality</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  We're committed to excellence in every aspect of our service, from the accuracy of our recommendations to the usability of our platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Join the StyleAI Community</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Experience the future of personal styling and discover your perfect look with StyleAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  Try Demo
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