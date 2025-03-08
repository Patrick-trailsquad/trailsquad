
import { FC } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

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
              <p className="text-[#FFDC00] mb-3">Founder & Running enthusiast</p>
              <div className="flex justify-center gap-3">
                <a 
                  href="https://www.strava.com/athletes/4655160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDC00] hover:text-[#FFDC00]/80 transition-colors"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    fill="currentColor"
                    className="hover:scale-110 transition-transform"
                  >
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/patricklund/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDC00] hover:text-[#FFDC00]/80 transition-colors"
                >
                  <Linkedin className="size-6 hover:scale-110 transition-transform" />
                </a>
              </div>
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
              <p className="text-[#FFDC00] mb-3">Co-founder, Running coach & Physiotherapist</p>
              <div className="flex justify-center gap-3">
                <a 
                  href="https://www.strava.com/athletes/92236720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDC00] hover:text-[#FFDC00]/80 transition-colors"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    fill="currentColor"
                    className="hover:scale-110 transition-transform"
                  >
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/emil.fysio.albrechtsen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDC00] hover:text-[#FFDC00]/80 transition-colors"
                >
                  <Instagram className="size-6 hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
