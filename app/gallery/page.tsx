"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Heart, 
  Share2, 
  ShoppingBag, 
  Search,
  Filter,
  Calendar,
  Tag
} from "lucide-react";

// Sample outfit data
const outfits = [
  {
    id: 1,
    title: "Summer Casual",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    date: "June 15, 2025",
    event: "Casual Outing",
    liked: true,
  },
  {
    id: 2,
    title: "Business Meeting",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1726",
    date: "June 12, 2025",
    event: "Work",
    liked: false,
  },
  {
    id: 3,
    title: "Evening Dinner",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1973",
    date: "June 10, 2025",
    event: "Date Night",
    liked: true,
  },
  {
    id: 4,
    title: "Weekend Brunch",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1965",
    date: "June 8, 2025",
    event: "Casual",
    liked: false,
  },
  {
    id: 5,
    title: "Formal Event",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1974",
    date: "June 5, 2025",
    event: "Formal",
    liked: true,
  },
  {
    id: 6,
    title: "Outdoor Adventure",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
    date: "June 1, 2025",
    event: "Casual",
    liked: false,
  },
];

export default function Gallery() {
  const [likedOutfits, setLikedOutfits] = useState(
    outfits.map(outfit => ({ ...outfit }))
  );
  
  const toggleLike = (id: number) => {
    setLikedOutfits(
      likedOutfits.map(outfit => 
        outfit.id === id ? { ...outfit, liked: !outfit.liked } : outfit
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Your Outfit Gallery</h1>
          <p className="text-muted-foreground mb-8">Browse and manage your saved outfit recommendations</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search outfits..." 
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Date
              </Button>
              <Button variant="outline" size="sm">
                <Tag className="h-4 w-4 mr-2" />
                Event
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Outfits</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedOutfits.map(outfit => (
                  <Card key={outfit.id} className="overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={outfit.image} 
                        alt={outfit.title}
                        className="w-full h-full object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm ${outfit.liked ? 'text-red-500' : ''}`}
                        onClick={() => toggleLike(outfit.id)}
                      >
                        <Heart className={`h-5 w-5 ${outfit.liked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{outfit.title}</h3>
                          <p className="text-sm text-muted-foreground">{outfit.date}</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {outfit.event}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedOutfits.filter(outfit => outfit.liked).map(outfit => (
                  <Card key={outfit.id} className="overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={outfit.image} 
                        alt={outfit.title}
                        className="w-full h-full object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-red-500"
                        onClick={() => toggleLike(outfit.id)}
                      >
                        <Heart className="h-5 w-5 fill-current" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{outfit.title}</h3>
                          <p className="text-sm text-muted-foreground">{outfit.date}</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {outfit.event}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedOutfits.slice(0, 3).map(outfit => (
                  <Card key={outfit.id} className="overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={outfit.image} 
                        alt={outfit.title}
                        className="w-full h-full object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm ${outfit.liked ? 'text-red-500' : ''}`}
                        onClick={() => toggleLike(outfit.id)}
                      >
                        <Heart className={`h-5 w-5 ${outfit.liked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{outfit.title}</h3>
                          <p className="text-sm text-muted-foreground">{outfit.date}</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {outfit.event}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="seasonal" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedOutfits.slice(3, 6).map(outfit => (
                  <Card key={outfit.id} className="overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={outfit.image} 
                        alt={outfit.title}
                        className="w-full h-full object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm ${outfit.liked ? 'text-red-500' : ''}`}
                        onClick={() => toggleLike(outfit.id)}
                      >
                        <Heart className={`h-5 w-5 ${outfit.liked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{outfit.title}</h3>
                          <p className="text-sm text-muted-foreground">{outfit.date}</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {outfit.event}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}