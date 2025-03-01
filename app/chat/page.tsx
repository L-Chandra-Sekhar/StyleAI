"use client";

import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Chat,
  ChatMessage,
  ChatMessageContent,
  ChatMessageHeader,
  ChatMessageFooter,
  ChatInput
} from "@/components/ui/chat";
import { 
  Shirt, 
  Send, 
  Sparkles, 
  Bot,
  User,
  RefreshCw,
  Image,
  Mic,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  feedback?: 'positive' | 'negative';
}

// Sample responses for the AI stylist chatbot
const aiResponses = [
  "Based on your preferences and the current weather, I'd recommend a light cotton shirt paired with chino shorts and canvas sneakers.",
  "For a formal event, consider a navy blue suit with a light blue shirt and brown leather shoes. This combination is timeless and sophisticated.",
  "Your body type would look great in fitted clothes that accentuate your natural shape. Try slim-fit jeans with a structured top.",
  "The color palette that would complement your skin tone includes earth tones, deep blues, and emerald greens.",
  "For your upcoming beach vacation, pack light breathable fabrics, swimwear, cover-ups, and sandals. Don't forget a wide-brimmed hat for sun protection!",
  "Layering is key for unpredictable weather. Start with a basic tee, add a light sweater, and top with a water-resistant jacket that can be easily removed.",
  "To transition your wardrobe from summer to fall, incorporate lightweight knits, closed-toe shoes, and start introducing warmer colors like burgundy and mustard.",
  "For a business casual look, try combining dark wash jeans with a crisp button-down shirt and a blazer. Add leather loafers to complete the outfit."
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI Style Assistant. How can I help with your fashion needs today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const provideFeedback = (messageId: string, type: 'positive' | 'negative') => {
    setMessages(prev => 
      prev.map(message => 
        message.id === messageId 
          ? { ...message, feedback: type } 
          : message
      )
    );
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">AI Style Assistant</h1>
          <p className="text-muted-foreground mb-8">Chat with our AI stylist for personalized fashion advice and outfit recommendations.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar with quick prompts */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Prompts</CardTitle>
                  <CardDescription>Common style questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm h-auto py-2 px-3"
                    onClick={() => {
                      setInputValue("What should I wear today?");
                    }}
                  >
                    What should I wear today?
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm h-auto py-2 px-3"
                    onClick={() => {
                      setInputValue("Help me dress for a formal event");
                    }}
                  >
                    Help me dress for a formal event
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm h-auto py-2 px-3"
                    onClick={() => {
                      setInputValue("What colors look good on me?");
                    }}
                  >
                    What colors look good on me?
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm h-auto py-2 px-3"
                    onClick={() => {
                      setInputValue("Outfit ideas for a beach vacation");
                    }}
                  >
                    Outfit ideas for a beach vacation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm h-auto py-2 px-3"
                    onClick={() => {
                      setInputValue("How to dress for unpredictable weather?");
                    }}
                  >
                    How to dress for unpredictable weather?
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Chat interface */}
            <div className="md:col-span-3">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>StyleAI Assistant</CardTitle>
                      <CardDescription>Your personal AI stylist</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden p-0">
                  <Chat className="h-full border-0">
                    {messages.map((message) => (
                      <ChatMessage key={message.id} isUser={message.isUser}>
                        <ChatMessageHeader>
                          {message.isUser ? (
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>You</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Bot className="h-4 w-4 mr-1" />
                              <span>StyleAI</span>
                            </div>
                          )}
                        </ChatMessageHeader>
                        <ChatMessageContent isUser={message.isUser}>
                          {message.content}
                        </ChatMessageContent>
                        <ChatMessageFooter className="flex justify-between items-center">
                          <span>{formatTime(message.timestamp)}</span>
                          {!message.isUser && (
                            <div className="flex gap-1">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className={`h-5 w-5 ${message.feedback === 'positive' ? 'text-green-500' : ''}`}
                                onClick={() => provideFeedback(message.id, 'positive')}
                              >
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className={`h-5 w-5 ${message.feedback === 'negative' ? 'text-red-500' : ''}`}
                                onClick={() => provideFeedback(message.id, 'negative')}
                              >
                                <ThumbsDown className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </ChatMessageFooter>
                      </ChatMessage>
                    ))}
                    {isTyping && (
                      <ChatMessage>
                        <ChatMessageHeader>
                          <div className="flex items-center">
                            <Bot className="h-4 w-4 mr-1" />
                            <span>StyleAI</span>
                          </div>
                        </ChatMessageHeader>
                        <ChatMessageContent>
                          <div className="flex items-center">
                            <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                            Thinking...
                          </div>
                        </ChatMessageContent>
                      </ChatMessage>
                    )}
                    <div ref={chatEndRef} />
                  </Chat>
                </CardContent>
                <CardFooter className="pt-0">
                  <ChatInput>
                    <Button variant="outline" size="icon" className="mr-2">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="mr-2">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Ask about outfit ideas, style advice, or fashion tips..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="flex-1"
                    />
                    <Button 
                      className="ml-2" 
                      onClick={handleSendMessage}
                      disabled={inputValue.trim() === "" || isTyping}
                    >
                      {isTyping ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </ChatInput>
                </CardFooter>
              </Card>
              
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>StyleAI uses advanced AI to provide personalized fashion advice. For the best experience, be specific about your preferences, body type, and occasion.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}