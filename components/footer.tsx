import Link from "next/link";
import { Shirt, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shirt className="h-6 w-6" />
              <span className="font-bold text-xl">StyleAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your personal AI stylist that provides clothing recommendations based on weather, events, and your preferences.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Outfit Gallery
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  AI Chat
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">
                Email: contact@styleai.com
              </li>
              <li className="text-muted-foreground text-sm">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-muted-foreground text-sm">
                Address: 123 Fashion St, Style City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} StyleAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}