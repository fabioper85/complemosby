// src/themes/rockTheme.ts
// Tema personalizzato in stile Rock Burger

export const rockTheme = {
  primary: '#ff3c3c', // rosso rock burger
  secondary: '#ff3c3c',
  dark: '#000000',
  lightDark: '#1a1a1a',
  textPrimary: '#ffffff',
  textSecondary: '#cccccc',
};

// Funzione per lo scroll liscio alle sezioni
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
};
