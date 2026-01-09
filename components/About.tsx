
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 md:py-24 bg-anthracite relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative mb-12 lg:mb-0">
          <div className="aspect-square bg-darkSlate border border-white/10 relative overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
            <img 
              src="https://picsum.photos/seed/elec/800/800" 
              alt="Technisch vakmanschap" 
              className="object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 border-[15px] md:border-[20px] border-darkSlate/80"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 bg-copper p-4 md:p-8 flex flex-col justify-end shadow-xl">
            <span className="text-3xl md:text-5xl font-black text-white">15+</span>
            <span className="text-[8px] md:text-sm font-bold text-white/80 uppercase tracking-widest">Jaar Ervaring</span>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-copper font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4">Over KD-Projects</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter leading-tight italic uppercase">PASSIE VOOR PERFECTIE</h3>
          
          <div className="space-y-6 text-gray-400 font-light leading-relaxed text-sm md:text-base">
            <p>
              Bij KD-Projects geloven we dat elektrotechniek meer is dan alleen kabels en aansluitingen. Het is de levensader van elk gebouw, de fundering van modern comfort en zakelijke efficiëntie.
            </p>
            <p>
              Ons team van specialisten combineert jarenlange ervaring met een onverzadigbare drang naar innovatie. Wij zijn niet tevreden met 'goed genoeg'; wij streven naar technische perfectie in elk detail.
            </p>
            <p className="text-white italic font-medium border-l-2 border-copper pl-4 text-left">
              "Wij realiseren installaties die niet alleen werken, maar die jarenlang onzichtbaar en feilloos de basis vormen voor uw succes of woongenot."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h5 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">Precisie</h5>
              <div className="w-full bg-white/5 h-1">
                <div className="bg-copper h-full w-[98%]"></div>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">Innovatie</h5>
              <div className="w-full bg-white/5 h-1">
                <div className="bg-copper h-full w-[95%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
