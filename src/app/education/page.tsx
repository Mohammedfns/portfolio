import Timeline from '@/components/ui/Timeline';
import { TimelineItem } from '@/components/ui/Timeline';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Education() {
  const education = [
    {
      title: "Master en Développement Web",
      company: " Université de Picardie Jules Verne",
      period: "2022-2023",
      description: "Formation orientée vers la modélisation statistique et mathématique appliquée aux données complexes, avec un fort accent sur l’analyse prédictive et les méthodes numériques. Développement de compétences en statistiques avancées, optimisation et simulation, utiles pour traduire des problématiques métiers en solutions data-driven."
    },
    {
      title: "Master en Mathématiques et Applications au Calcul Scientifique",
      company: "Faculté des Sciences et Techniques",
      period: "2019–2022",
      description: "Approfondissement des mathématiques appliquées et du calcul scientifique, avec une solide maîtrise des algorithmes, de l’analyse numérique et de la programmation scientifique. Ce cursus a renforcé ma capacité à exploiter des données massives, à concevoir des modèles analytiques et à résoudre des problématiques complexes grâce aux outils quantitatifs."
    },
    {
      title: "Licence en Mathématiques",
      company: "École Normale Supérieure",
      period: "2015–2018",
      description: "Solide formation en mathématiques fondamentales (algèbre, analyse, probabilités, statistiques), fournissant une base robuste pour l’analyse et la modélisation des données. Ce parcours m’a permis de développer rigueur scientifique, logique analytique et compétences en probabilités appliquées à l’exploration et l’interprétation des données."
    }
  ];

  return (
    <div className="container mx-auto py-16">
      <SectionTitle title="Ma formation" subtitle="Parcours académique" />
      
      <div className="mt-12">
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.title}
              subtitle={edu.company}
              period={edu.period}
              description={edu.description}
              isLast={index === education.length - 1}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
}

