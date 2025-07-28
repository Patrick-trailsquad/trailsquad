
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransylvaniaMainContent = () => {
  return (
    <div className="space-y-6 mb-8">
      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
        <p className="text-lg">
          Beliggende i det mystiske hjerte af Rumæniens Karpater tilbyder Transylvania 100 
          løbere en ekstraordinær rejse gennem et af Europas mest legendariske 
          landskaber. Dette udfordrende ultraløb slynger sig gennem tætte skove, forbi middelalderlige 
          slotte og langs dramatiske bjergkamme, alt sammen inden for synsvidde af det ikoniske Bran 
          Slot, der er kendt verden over som "Draculas Slot."
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
        <p className="text-lg">
          Når du krydser denne historiske rute, vil du opleve Karpaternes rå skønhed, mens du løber 
          gennem uberørt vildmark og traditionelle rumænske landsbyer. Ruten kombinerer tekniske bjergafsnit med 
          smukke skovstier og tilbyder en perfekt blanding af udfordring og naturlig skønhed. Hver kilometer bringer nye 
          udsigter over de omkringliggende toppe og dale og skaber en uforglemmelig bjergløbs-
          oplevelse.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
        <p className="text-lg">
          Dette legendariske løb tester både fysisk udholdenhed og mental modstandskraft, når du 
          navigerer varierende terræner og vejrforhold. Uanset om du vælger 20km, 
          30km, 50km, 80km eller den ultimative 100km udfordring, er hver rute blevet omhyggeligt 
          designet til at vise de mest spektakulære afsnit af Karpaterne 
          og samtidig presse dine grænser som trailløber.
        </p>
      </div>

      <Button 
        asChild
        variant="charcoal"
        size="md"
        className="mb-8"
      >
        <a 
          href="https://www.transylvania100k.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          Besøg officiel løbshjemmeside
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default TransylvaniaMainContent;
