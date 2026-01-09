
import React from 'react';
import { Page } from '../App';

const ProjectsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const projects = [
    { title: 'Project Zenith', category: 'Utiliteit', year: '2023', img: 'https://picsum.photos/seed/p1/800/600' },
    { title: 'Villa Luminous', category: 'Residentieel', year: '2023', img: 'https://picsum.photos/seed/p2/800/600' },
    { title: 'Data Center Alpha', category: 'Utiliteit', year: '2022', img: 'https://picsum.photos/seed/p3/800/600' },
    { title: 'Penthouse Skyline', category: 'Residentieel', year: '2022', img: 'https://picsum.photos/seed/p4/800/600' },
    { title: 'Modern Office Park', category: 'Utiliteit', year: '2021', img: 'https://picsum.photos/seed/p5/800/600' },
    { title: 'Chalet Innova', category: 'Residentieel', year: '2021', img: 'https://picsum.photos/seed/p6/800/600' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">PORTFOLIO</h1>
          <p className="text-copper font-bold tracking-[0.3em] uppercase text-sm">Onze Meesterwerken</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden bg-anthracite aspect-[4/5] border border-white/5">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-darkSlate via-transparent to-transparent">
                <span className="text-copper text-[10px] font-bold uppercase tracking-widest mb-2">{project.category} — {project.year}</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{project.title}</h3>
                <div className="w-0 group-hover:w-full h-[1px] bg-copper transition-all duration-500 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
