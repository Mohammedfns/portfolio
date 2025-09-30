'use client';

import { useState, useEffect } from 'react';

// Button component inline for demo
function Button({ children, href, variant = 'primary', size = 'md' }) {
  const baseStyles = "inline-block rounded-lg font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/50",
    secondary: "border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
  };
  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
  };
  
  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </a>
  );
}

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
        setTypedText(phrase.substring(0, typedText.length + 1));
        
        if (typedText.length === phrase.length) {
          setIsDeleting(true);
          setTypingSpeed(1500);
        } else {
          setTypingSpeed(100);
        }
      } else {
        setTypedText(phrase.substring(0, typedText.length - 1));
        
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  const gradientStyle = {
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 sm:pt-20 pb-16">
      {/* Fond avec effet de particules */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212]" />
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)' 
        }} />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 z-10 flex flex-col items-center justify-center flex-1 text-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight break-words">
            Bonjour, je suis{' '}
            <span 
              style={gradientStyle}
              className="block sm:inline font-bold"
            >
              Mohammed EL-FANNASSI
            </span>
          </h1>
          
          <div className="min-h-[50px] xs:min-h-[60px] sm:min-h-[70px] md:min-h-[80px] mb-6 sm:mb-8 flex items-center justify-center">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white break-words">
              <span className="block sm:inline mb-1 sm:mb-0 sm:mr-2">Je suis</span>
              <span 
                style={gradientStyle}
                className="block sm:inline font-semibold"
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4">
            <Button href="/projects" size="lg">
              Voir mes projets
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Me contacter
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 sm:gap-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 sm:w-8 sm:h-8"
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
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Indicateur de défilement */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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