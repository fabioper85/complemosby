// src/themes/minimal/minimalRockTheme.ts

export const rockTheme = {
    // Primary colors
    primary: '#111111', // Almost black
    secondary: '#ffffff', // White
    accent: '#ff3c3c', // Red accent (keeping from original)
    
    // Background colors
    bgPrimary: '#ffffff',
    bgSecondary: '#111111',
    
    // Text colors
    textOnLight: '#111111',
    textOnDark: '#ffffff',
    
    // Additional colors for blocks
    blockOne: '#f0f0f0', // Light gray
    blockTwo: '#333333', // Dark gray
  };
  
  // Smooth scroll function (keeping from original)
  export const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };