
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ThumbsUp } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    toast
  } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'homepage_cta',
      submitted_at: new Date().toISOString()
    };
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/21931910/2qxzofy/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });

      setEmail('');
      setIsSuccess(true);
      toast({
        title: "Succes!",
        description: "Tak for tilmeldingen. Vi kontakter dig snart!"
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Fejl",
        description: "Noget gik galt. Prøv venligst igen.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="py-24 bg-[#FFDC00] relative min-h-[600px]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-black mb-6">
            Klar til at starte dit eventyr?
          </h2>
          <p className="font-inter text-xl text-black/90 mb-8">Bliv en del af vores fællesskab af trail løbere og vær den første til at høre, når vi planlægger nye løbsdestinationer.

Tilmeld dig vores nyhedsbrev for at blive holdt opdateret. </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
              disabled={isSuccess}
              placeholder={isSuccess ? '' : 'Indtast email'} 
              className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-50" 
            />
            {isSuccess ? <div className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 animate-fade-in text-black" />
              </div> : <button type="submit" disabled={isSubmitting} className="bg-black text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-black/90 transition-colors duration-300 disabled:opacity-50">
                {isSubmitting ? 'Tilmelder...' : 'Tilmeld'}
              </button>}
          </form>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-32 md:h-64" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 180 C100 120 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{
        strokeDasharray: '8,8',
        opacity: 0.8
      }} />
        <path d="M0 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{
        opacity: 0.6
      }} />
        <path d="M50 200 C150 170 250 140 350 120 C450 160 550 180 650 190 C750 140 850 100 950 80" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5,15" style={{
        opacity: 0.4
      }} />
        <path d="M0 200 C100 160 200 130 300 110 C400 150 500 170 600 185 C700 130 800 90 900 70" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{
        opacity: 0.3
      }} />
      </svg>
    </section>;
};

export default CTASection;

