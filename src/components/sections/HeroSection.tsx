'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'Data Analyst',
    'Data Scientist',
    'Designer',
    'Freelance',
  ];

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Écriture
        setTypedText(phrase.substring(0, typedText.length + 1));
        
        // Si le texte est complètement écrit, commencer à supprimer après un délai
        if (typedText.length === phrase.length) {
          setIsDeleting(true);
          setTypingSpeed(1500); // Pause avant de commencer à supprimer
        } else {
          setTypingSpeed(100); // Vitesse normale d'écriture
        }
      } else {
        // Suppression
        setTypedText(phrase.substring(0, typedText.length - 1));
        
        // Si le texte est complètement supprimé, passer à la phrase suivante
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setTypingSpeed(500); // Pause avant de commencer la nouvelle phrase
        } else {
          setTypingSpeed(50); // Vitesse de suppression
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  return (
    <section className="h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Fond avec effet de particules */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212]" />
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)' 
        }} />
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center flex-1 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Bonjour, je suis <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Mohammed EL-FANNASSI</span>
          </h1>
          
          <div className="h-12 md:h-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <span className="mr-2">Je suis</span>
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/projects" size="lg">
              Voir mes projets
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Me contacter
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Indicateur de défilement */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Défiler vers le bas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M7 13l5 5 5-5"></path>
            <path d="M7 6l5 5 5-5"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

