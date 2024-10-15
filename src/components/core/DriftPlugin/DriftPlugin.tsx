"use client"
import { useEffect } from 'react';

export const DriftPlugin: React.FC = () => {
  useEffect(() => {
    // Check if Tawk.to script is already loaded
    if (typeof window !== 'undefined' && !window.Tawk_API) {
      const script = document.createElement('script');
      script.src = 'https://embed.tawk.to/670e56414304e3196ad1d996/1ia801stq';
      script.async = true;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      // Append the script to the document
      document.body.appendChild(script);

      // Initialize Tawk API and load start time
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
    }
  }, []); // Runs only once on component mount

  return null; // This component does not render anything visually
};

