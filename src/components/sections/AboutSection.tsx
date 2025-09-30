import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="À propos de moi"
          subtitle="Découvrez mon parcours et mes motivations"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="right">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/profile1.jpg"
                alt="Photo de profil"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-40" />
              
              {/* Overlay décoratif */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl" />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Qui suis-je ?
              </h3>
              
              <p className="text-gray-300">
               Passionné par la donnée et l’intelligence artificielle, j’accompagne les entreprises dans la transformation de leurs données en décisions stratégiques. J’utilise des techniques de statistique, de machine learning et de visualisation pour révéler la valeur cachée derrière les chiffres.              </p>
              
              <p className="text-gray-300">
Fort de plusieurs projets en analyse exploratoire, modélisation prédictive et création de tableaux de bord, j’aime relever de nouveaux défis et explorer des approches innovantes en data science et intelligence artificielle. Mon objectif : proposer des solutions pertinentes et à forte valeur ajoutée.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Nom</h4>
                  <p className="text-gray-400">EL-FANNASSI Mohammed</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <p className="text-gray-400">fnsmohammed@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Localisation</h4>
                  <p className="text-gray-400">Paris, France</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Disponibilité</h4>
                  <p className="text-gray-400">Freelance / Remote</p>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button href="/about">
                  En savoir plus
                </Button>
                <Button href="/contact" variant="secondary">
                  Me contacter
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

