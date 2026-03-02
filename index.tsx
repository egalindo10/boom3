@import "tailwindcss";

@theme {
  --font-serif: "Cormorant Garamond", serif;
  --font-body: "Libre Baskerville", serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  
  --color-boom-earth: #5A5A40;
  --color-boom-clay: #A67C52;
  --color-boom-cream: #F5F5F0;
  --color-boom-ink: #1A1A1A;
  --color-boom-gold: #C5A059;
}

@layer base {
  body {
    @apply bg-boom-cream text-boom-ink font-body;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: opacity 0.5s ease-out forwards;
}

@keyframes opacity {
  from { opacity: 0; }
  to { opacity: 1; }
}
