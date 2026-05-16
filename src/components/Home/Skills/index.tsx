"use client";

import React, { useEffect } from 'react';

const skills = [
  'Certifications',
  'React',
  'Next.js',
  'Node.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Sass/SCSS',
  'Tailwind CSS',
  'Redux',
  'MySQL',
  'Git',
  'GitHub',
  'Responsive Web Design',
  'Database Management',
  'Test-Driven Development (TDD)',
  'Error Handling',
  'Web Deployment',
  'Vite',
  'RESTful APIs',
  'TypeScript',
  'Performance Optimization',
];

const Skills: React.FC = () => {
  useEffect(() => {
    const scriptSrc = '//cdn.credly.com/assets/utilities/embed.js';
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const s = document.createElement('script');
      s.src = scriptSrc;
      s.async = true;
      document.body.appendChild(s);
      return () => {
        document.body.removeChild(s);
      };
    }
    return;
  }, []);

  return (
    <section id='skills' className='bg-transparent py-16'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='mb-8 text-center'>
          <h3 className='text-xl font-black tracking-tight text-white uppercase italic sm:text-2xl'>
            Full Stack & Front-end Skills
          </h3>
          <p className='mx-auto mt-2 max-w-2xl text-sm text-gray-400'>
            Technical competencies and tools used regularly in projects and
            deployments.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((s) => (
            <div
              key={s}
              className='flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3'
            >
              <div className='flex h-8 w-8 items-center justify-center rounded border border-[#4B92DB]/30 bg-[#0C2340] text-sm font-bold text-[#4B92DB]'>
                •
              </div>
              <div className='text-sm font-medium text-white'>{s}</div>
            </div>
          ))}
        </div>

        {/* Credly badge embed */}
        <div className='mt-8 flex justify-center'>
          <div
            data-iframe-width='150'
            data-iframe-height='270'
            data-share-badge-id='d0de8024-3fd8-4952-98db-c76e9e5bbf7d'
            data-share-badge-host='https://www.credly.com'
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
