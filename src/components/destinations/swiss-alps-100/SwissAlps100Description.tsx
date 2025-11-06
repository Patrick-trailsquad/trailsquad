import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SwissAlps100Description = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="font-cabinet text-3xl font-bold mb-4">Løbet</h2>
        <p className="text-lg mb-4">
          Swiss Alps 100 er en af verdens mest spektakulære ultraløb, der fører dig gennem UNESCO-verdensarvsområdet Aletsch-gletsjeren i det schweiziske Goms-område. Løbet tilbyder distancer fra Vertical til imponerende 160 km, og er en officiel kvalifikationsløb for Western States 100, Hardrock 100 og Badwater 135.
        </p>
        <p className="text-lg">
          Med start kl. 7:30 den 7. august 2026 giver løbet dig mulighed for at udfordre dig selv på alpine stier, over svævende hængebroer og forbi imponerende alpine dæmninger. Dette er trail running på højeste niveau i hjertet af Alperne.
        </p>
      </section>

      <section>
        <h2 className="font-cabinet text-3xl font-bold mb-4">Oplevelsen</h2>
        <p className="text-lg mb-4">
          Goms-regionen byder på nogle af de mest betagende bjerglandskaber i Schweiz. Du vil løbe gennem en region præget af majestætiske toppe, grønne dale og den imponerende Aletsch-gletsjer - Alpernes største gletsjer.
        </p>
        <p className="text-lg">
          Området er kendt for sin fantastiske natur, ægte schweizisk gæstfrihed og perfekte forhold for trail running. Efter løbet kan du nyde regionens kulinariske oplevelser og slappe af i den autentiske alpeatmosfære.
        </p>
      </section>

      <section>
        <h2 className="font-cabinet text-3xl font-bold mb-4">Udfordringen</h2>
        <p className="text-lg">
          Swiss Alps 100 er ikke bare et løb - det er en episk udfordring i nogle af verdens smukkeste omgivelser. Uanset om du vælger Vertical, 50 km, 100 km eller den ultimative 160 km, vil du blive udfordret af alpine stigninger, tekniske passager og højfjeldsforhold.
        </p>
        <Button asChild variant="charcoal" size="md" className="mt-4">
          <a href="https://www.swissalps100.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            Besøg officiel løbshjemmeside
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </section>
    </div>
  );
};

export default SwissAlps100Description;
