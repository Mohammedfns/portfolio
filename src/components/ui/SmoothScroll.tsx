'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Fonction pour gérer le défilement fluide
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      e.preventDefault();
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      });
    };

    // Ajouter l'écouteur d'événements
    document.addEventListener('click', handleSmoothScroll);
    
    // Nettoyer l'écouteur d'événements
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null; // Ce composant n'affiche rien, il ajoute juste la fonctionnalité
}

