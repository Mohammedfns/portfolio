import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Portfolio de EL-FANNASSI Mohammed - Data Analyst/Data Scientist';
export const size = {
  width: 1200,
  height: 630,
};
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #121212, #1e1e1e)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            backgroundImage: 'linear-gradient(to right, #6366f1, #8b5cf6)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          EL-FANNASSI Mohammed
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#f5f5f5',
            marginBottom: 48,
          }}
        >
          Développeur Web & Designer UI/UX
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: 24,
                color: '#a0a0a0',
                padding: '8px 16px',
                borderRadius: 8,
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

