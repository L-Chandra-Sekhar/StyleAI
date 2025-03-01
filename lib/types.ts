// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  preferences: UserPreferences;
  createdAt: Date;
}

export interface UserPreferences {
  stylePreferences: string[];
  favoriteColors: string[];
  bodyType: BodyType;
  occasionPreferences: string[];
  seasonalPreferences: SeasonalPreferences;
}

export type BodyType = 'athletic' | 'slim' | 'average' | 'curvy' | 'plus';

export interface SeasonalPreferences {
  spring: boolean;
  summer: boolean;
  fall: boolean;
  winter: boolean;
}

// Weather Types
export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  chanceOfRain: number;
  forecast: WeatherForecast[];
}

export interface WeatherForecast {
  date: Date;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
}

// Outfit Types
export interface Outfit {
  id: string;
  title: string;
  description: string;
  items: OutfitItem[];
  occasion: string;
  season: string;
  weatherConditions: string[];
  imageUrl: string;
  createdAt: Date;
  userId: string;
  liked: boolean;
}

export interface OutfitItem {
  id: string;
  name: string;
  category: ClothingCategory;
  color: string;
  brand?: string;
  price?: number;
  purchaseUrl?: string;
  imageUrl?: string;
}

export type ClothingCategory = 
  | 'top' 
  | 'bottom' 
  | 'dress' 
  | 'outerwear' 
  | 'footwear' 
  | 'accessory';

// Event Types
export interface StyleEvent {
  id: string;
  title: string;
  date: Date;
  type: EventType;
  description?: string;
  outfitId?: string;
  userId: string;
}

export type EventType = 
  | 'casual' 
  | 'formal' 
  | 'business' 
  | 'date' 
  | 'wedding' 
  | 'sport' 
  | 'other';

// AI Recommendation Types
export interface StyleRecommendation {
  id: string;
  outfits: Outfit[];
  reason: string;
  weatherBased: boolean;
  eventBased: boolean;
  userId: string;
  createdAt: Date;
}