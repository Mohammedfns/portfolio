import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

// Données de démonstration pour les projets
const featuredProjects = [
  {
    id: 'Analyse des ventes',
    title: 'Analyse des ventes',
    description: 'Un tableau de bord interactif pour visualiser les performances commerciales : chiffre d’affaires, marges, top produits et prévisions de ventes.',
    imageUrl: '/images/Analysedesventes.png',
    tags: ['Power BI', 'SQL Server', 'Python', 'Pandas', 'Matplotlib'],
    demoUrl: 'https://dashboard-prediction-ventes-deeplearning-pgazcebdbfjm7t2sixrja.streamlit.app/',
    codeUrl: 'https://github.com/Mohammedfns/dashboard-prediction-ventes-deeplearning',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio d\'artiste',
    description: 'Un portfolio élégant pour un artiste visuel avec galerie et système de filtrage.',
    imageUrl: '/images/portfolio.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 'dashboard-app',
    title: 'Dashboard Analytics',
    description: 'Une application de tableau de bord pour visualiser et analyser des données.',
    imageUrl: '/images/project3.jpg',
    tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 'Data Cleaning & Automatisation',
    title: 'Data Cleaning & Automatisation',
    description: 'Un pipeline automatisé de préparation de données clients (nettoyage, détection d’anomalies, normalisation et enrichissement via API).',
    imageUrl: '/images/datacleaning.png',
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'Airflow'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 'Prédiction du churn clients',
    title: 'Prédiction du churn clients',
    description: 'Un modèle de machine learning pour anticiper la perte de clients et identifier les facteurs clés de rétention. Résultats présentés dans un dashboard interactif.',
    imageUrl: '/images/churnclients.png',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'Power BI'],
    demoUrl: 'https://churn-dashboard-eaom2dydb97ktbzxxxzngq.streamlit.app/',
    codeUrl: 'https://github.com/Mohammedfns/Churn-dashboard',
  },
  {
    id: 'Analyse géomarketing',
    title: 'Analyse géomarketing',
    description: 'Une cartographie interactive permettant d’analyser la répartition géographique des clients et d’optimiser les implantations commerciales.',
    imageUrl: '/images/Analysegeo.png',
    tags: ['Python', 'GeoPandas', 'Folium', 'PostgreSQL', 'QGIS'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 'Dashboard RH',
    title: 'Dashboard RH',
    description: 'Un tableau de bord RH pour suivre le turnover, l’absentéisme et les recrutements, facilitant la prise de décision stratégique.',
    imageUrl: '/images/Dashboardrh.png',
    tags: ['Power BI', 'SQL', 'Excel'],
    demoUrl: 'https://churn-dashboard-eaom2dydb97ktbzxxxzngq.streamlit.app/',
    codeUrl: 'https://github.com/Mohammedfns/Churn-dashboard',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mes projets"
          subtitle="Découvrez une sélection de mes travaux récents"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} direction="up" delay={index * 100}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll direction="up" delay={300}>
          <div className="mt-12 text-center">
            <Button href="/projects" size="lg">
              Voir tous les projets
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

