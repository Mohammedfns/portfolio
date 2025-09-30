import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Les tendances du développement web en 2025",
      excerpt: "Découvrez les technologies et frameworks qui domineront le développement web cette année.",
      date: "5 juin 2025",
      category: "Développement Web",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "Comment optimiser les performances de votre site Next.js",
      excerpt: "Astuces et bonnes pratiques pour améliorer la vitesse et l'expérience utilisateur de vos applications Next.js.",
      date: "28 mai 2025",
      category: "Performance",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "L'importance de l'accessibilité dans le design web moderne",
      excerpt: "Pourquoi et comment rendre vos sites web accessibles à tous les utilisateurs, quelles que soient leurs capacités.",
      date: "15 mai 2025",
      category: "Accessibilité",
      image: "/images/project3.jpg"
    }
  ];

  return (
    <div className="container mx-auto py-16">
      <SectionTitle title="Blog" subtitle="Articles et réflexions sur le développement web" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-48">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-indigo-400">{post.category}</span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                Lire l'article
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

