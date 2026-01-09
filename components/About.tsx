
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="over-ons" className="py-24 bg-anthracite relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square bg-darkSlate border border-white/10 relative overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/elec/800/800" 
              alt="Technisch vakmanschap" 
              className="object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 border-[20px] border-darkSlate/80"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-copper p-8 flex flex-col justify-end">
            <span className="text-5xl font-black text-white">15+</span>
            <span className="text-sm font-bold text-white/80 uppercase tracking-widest">Jaar Ervaring</span>
          </div>
        </div>

        <div>
          <h2 className="text-copper font-bold tracking-[0.2em] uppercase text-sm mb-4">Over KD-Projects</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight italic">PASSIE VOOR PERFECTIE</h3>
          
          <div className="space-y-6 text-gray-400 font-light leading-relaxed">
            <p>
              Bij KD-Projects geloven we dat elektrotechniek meer is dan alleen kabels en aansluitingen. Het is de levensader van elk gebouw, de fundering van modern comfort en zakelijke efficiëntie.
            </p>
            <p>
              Ons team van specialisten combineert jarenlange ervaring met een onverzadigbare drang naar innovatie. Wij zijn niet tevreden met 'goed genoeg'; wij streven naar technische perfectie in elk detail, van de eerste blauwdruk tot de definitieve oplevering.
            </p>
            <p className="text-white italic font-medium">
              "Wij realiseren installaties die niet alleen werken, maar die jarenlang onzichtbaar en feilloos de basis vormen voor uw succes of woongenot."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h5 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Precisie</h5>
              <div className="w-full bg-white/5 h-1">
                <div className="bg-copper h-full w-[98%]"></div>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Innovatie</h5>
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
