import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

// Données de démonstration pour les compétences
const technicalSkills = [
  { name: 'Python', level: 90 },
  { name: 'R', level: 85 },
  { name: 'SQL', level: 95 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Deep Learning ', level: 75 },
  { name: 'Statistics', level: 95 },
  { name: 'Excel', level: 95 },
  { name: 'Power BI', level: 90 },
  { name: 'MongoDB', level: 85 },
  { name: 'Git ', level: 85 },
  { name: 'AWS ', level: 65 },
];

const tools = [
  'Pandas',
  'NumPy',
  'Jupyter Notebook',
  'Matplotlib',
  'Seaborn',
  'Plotly',
  'Scikit-learn',
  'TensorFlow',
  'PyTorch',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Power BI',
  'Tableau',
  'Looker',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mes compétences"
          subtitle="Les technologies et outils que j'utilise au quotidien"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll direction="right">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Compétences techniques</h3>
              
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Outils et technologies</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="bg-[#1e1e1e] rounded-lg p-4 text-center hover:bg-[#2d2d2d] transition-colors"
                  >
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-10 mb-6">Soft skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1e1e1e] rounded-lg p-4 hover:bg-[#2d2d2d] transition-colors">
                  <h4 className="text-white font-medium mb-2">Analyse</h4>
                  <p className="text-gray-400 text-sm">Capacité à analyser des données complexes et identifier des insights pertinents</p>
                </div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 hover:bg-[#2d2d2d] transition-colors">
                  <h4 className="text-white font-medium mb-2">Résolution de problèmes</h4>
                  <p className="text-gray-400 text-sm">Approche méthodique pour résoudre des problématiques business avec les données</p>
                </div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 hover:bg-[#2d2d2d] transition-colors">
                  <h4 className="text-white font-medium mb-2">Communication</h4>
                  <p className="text-gray-400 text-sm">Excellente communication pour présenter les résultats d'analyses à des audiences variées</p>
                </div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 hover:bg-[#2d2d2d] transition-colors">
                  <h4 className="text-white font-medium mb-2">Esprit critique</h4>
                  <p className="text-gray-400 text-sm">Capacité à questionner les données et valider les hypothèses</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        
        <RevealOnScroll direction="up" delay={300}>
          <div className="mt-12 text-center">
            <Button href="/skills" size="lg">
              Voir toutes mes compétences
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

