// This file would contain actual API calls to backend services
// For now, we'll use mock data and functions

import { User, UserPreferences, WeatherData, Outfit, StyleEvent, StyleRecommendation } from './types';

// Mock user data
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    stylePreferences: ['casual', 'minimalist', 'modern'],
    favoriteColors: ['blue', 'black', 'green'],
    bodyType: 'athletic',
    occasionPreferences: ['casual', 'work', 'date'],
    seasonalPreferences: {
      spring: true,
      summer: true,
      fall: true,
      winter: true
    }
  },
  createdAt: new Date()
};

// Mock weather data
const mockWeatherData: WeatherData = {
  location: 'New York, NY',
  temperature: 72,
  condition: 'Sunny',
  humidity: 45,
  windSpeed: 8,
  feelsLike: 75,
  chanceOfRain: 0,
  forecast: [
    {
      date: new Date(),
      temperature: {
        min: 65,
        max: 78
      },
      condition: 'Sunny'
    },
    {
      date: new Date(Date.now() + 86400000), // Tomorrow
      temperature: {
        min: 68,
        max: 80
      },
      condition: 'Partly Cloudy'
    }
  ]
};

// Mock outfits
const mockOutfits: Outfit[] = [
  {
    id: '1',
    title: 'Summer Casual',
    description: 'Perfect for a sunny day out',
    items: [
      {
        id: '101',
        name: 'Light blue cotton shirt',
        category: 'top',
        color: 'blue',
        brand: 'H&M',
        price: 29.99,
        purchaseUrl: 'https://example.com/shirt',
        imageUrl: 'https://example.com/shirt.jpg'
      },
      {
        id: '102',
        name: 'Beige chino shorts',
        category: 'bottom',
        color: 'beige',
        brand: 'Zara',
        price: 39.99,
        purchaseUrl: 'https://example.com/shorts',
        imageUrl: 'https://example.com/shorts.jpg'
      }
    ],
    occasion: 'casual',
    season: 'summer',
    weatherConditions: ['sunny', 'warm'],
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070',
    createdAt: new Date(),
    userId: '1',
    liked: true
  }
];

// API functions
export async function getCurrentUser(): Promise<User> {
  // In a real app, this would fetch from your backend
  return new Promise(resolve => {
    setTimeout(() => resolve(mockUser), 500);
  });
}

export async function updateUserPreferences(preferences: Partial<UserPreferences>): Promise<User> {
  // In a real app, this would update the user's preferences in your backend
  return new Promise(resolve => {
    const updatedUser = {
      ...mockUser,
      preferences: {
        ...mockUser.preferences,
        ...preferences
      }
    };
    setTimeout(() => resolve(updatedUser), 500);
  });
}

export async function getWeatherData(location: string): Promise<WeatherData> {
  // In a real app, this would fetch from a weather API
  return new Promise(resolve => {
    setTimeout(() => resolve(mockWeatherData), 500);
  });
}

export async function generateOutfitRecommendation(
  userId: string, 
  weatherData?: WeatherData, 
  event?: StyleEvent
): Promise<StyleRecommendation> {
  // In a real app, this would call your AI service
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: '1',
        outfits: mockOutfits,
        reason: 'Based on today\'s sunny weather and your casual style preference',
        weatherBased: !!weatherData,
        eventBased: !!event,
        userId,
        createdAt: new Date()
      });
    }, 2000); // Simulate AI processing time
  });
}

export async function saveOutfit(outfit: Outfit): Promise<Outfit> {
  // In a real app, this would save to your backend
  return new Promise(resolve => {
    setTimeout(() => resolve(outfit), 500);
  });
}

export async function getUserOutfits(userId: string): Promise<Outfit[]> {
  // In a real app, this would fetch from your backend
  return new Promise(resolve => {
    setTimeout(() => resolve(mockOutfits), 500);
  });
}

export async function toggleLikeOutfit(outfitId: string, liked: boolean): Promise<Outfit> {
  // In a real app, this would update in your backend
  return new Promise(resolve => {
    const outfit = mockOutfits.find(o => o.id === outfitId);
    if (outfit) {
      outfit.liked = liked;
      setTimeout(() => resolve(outfit), 500);
    } else {
      throw new Error('Outfit not found');
    }
  });
}