
import { FC } from 'react';

const TeamSection: FC = () => {
  return (
    <section className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cabinet font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative aspect-square">
            <img 
              src="/lovable-uploads/1023bdb7-a56d-4712-88cb-c6b747627029.png" 
              alt="Patrick Lund" 
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 rounded-lg" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="font-bold text-xl mb-1 text-[#FFDC00]">Patrick Lund</h3>
              <p className="text-[#FFDC00]">Founder & Running enthusiast</p>
            </div>
          </div>
          <div className="relative aspect-square">
            <img 
              src="/lovable-uploads/c9f1a696-b9d9-406b-8ae1-6e14b85b3e22.png" 
              alt="Emil Albrechtsen" 
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 rounded-lg" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="font-bold text-xl mb-1 text-[#FFDC00]">Emil Albrechtsen</h3>
              <p className="text-[#FFDC00]">Co-founder, Running coach & Physiotherapist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
