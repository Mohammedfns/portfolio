import Timeline from '@/components/ui/Timeline';
import { TimelineItem } from '@/components/ui/Timeline';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Experience() {
  const experiences = [
    {
      title: "Consultant Data Analyst (Micro-Entreprise) ",
      company: "FANASI Solutions",
      period: "20 ctobre 2024  - Présent",
      description: "Développement de solutions analytiques pour PME : modèles prédictifs réduisant le churn de 10%, automatisation complète du reporting Power BI (gain de 90% d'efficacité), et consolidation de données multi-sources."
    },
    {
      title: "Stagiaire Data Analyst - Formation POEC Certifiante",
      company: "Global Knowledge ",
      period: "Avril 2024 - Juillet 2024",
      description: "Formation intensive en Business Intelligence : conception de 5 tableaux de bord Power BI interactifs, implémentation de modèles ML (régression, classification, clustering), maîtrise de Tableau, Azure et SQL Server."
    },
    {
      title: "Stagiaire Data Science | Recherche Appliquée",
      company: "LRCS - Laboratoire de Réactivité et Chimie des Solides",
      period: "Mars 2023 - Juillet 2023",
      description: "Modélisation de données scientifiques par graphes pour 1000+ composés chimiques, développement d'algorithmes d'analyse Python, analyses statistiques structure-propriété et modèles prédictifs."
    },
    {
      title: "Data Analyst - Immobilier & Géomarketing",
      company: "AL OMRANE",
      period: "Décembre 2018 - Juillet 2019",
      description: "Analyse des tendances du marché immobilier, reporting stratégique avec outils SIG et bases de données relationnelles, accompagnement des décisions commerciales et territoriales."
    }
  ];

  return (
    <div className="container mx-auto py-16">
      <SectionTitle title="Mon expérience professionnelle" subtitle="Parcours et réalisations" />
      
      <div className="mt-12">
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
}

