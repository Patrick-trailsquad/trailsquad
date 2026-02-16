interface KangNu26IncludedAmenitiesProps {
  className?: string;
}

const KangNu26IncludedAmenities = ({ className }: KangNu26IncludedAmenitiesProps) => {
  const customAmenities = [
    {
      icon: "/lovable-uploads/a372fe5f-3385-44a7-bb8b-4961448afc3d.png",
      title: "Løbstilmelding",
      description: "Officiel tilmelding til KangNu Race"
    },
    {
      icon: "/lovable-uploads/38b791a4-b1f2-46b4-94e9-3a846f425922.png",
      title: "Flybilletter",
      description: "Tur/retur fra København"
    },
    {
      icon: "/lovable-uploads/c84fb355-d0d8-4186-98d2-586a852eff71.png",
      title: "Transport",
      description: "Lufthavnstransfer til indkvartering"
    },
    {
      icon: "/lovable-uploads/ba002ac9-1745-47a1-a01f-ca8bfa53b60d.png",
      title: "Hotel",
      description: "Hotelindkvartering i Nuuk"
    },
    {
      icon: "/lovable-uploads/9e398900-45e9-4cd0-b353-b07f3c3bfcfb.png",
      title: "Morgenmad",
      description: "Morgenmad inkluderet"
    },
    {
      icon: "/lovable-uploads/04b6b51f-4515-415d-b591-7608f760c49d.png",
      title: "Coaching",
      description: "Strategi og forberedelse inden løb"
    },
    {
      icon: "/lovable-uploads/a18f161c-12fd-4a39-819c-2ffac95a8982.png",
      title: "Socialt",
      description: "Fællesløb før race og fejring efter"
    },
    {
      icon: "/lovable-uploads/whale-icon.png",
      title: "Hvalsafari",
      description: "3-timers hvalsafari i Nuuk fjorden"
    },
    {
      icon: "/lovable-uploads/1c4eceb7-97ce-45ca-b50f-0844491ca83a.png",
      title: "Goodie bag",
      description: "Førsteklasses Trail Squad merchandise"
    },
    {
      icon: "/lovable-uploads/91b914ac-eb58-43d2-b8b9-c464cad202da.png",
      title: "Fællesskab",
      description: "Månedlige træningsløb for deltagere"
    }
  ];

  return (
    <div className={className}>
      <h2 className="font-cabinet text-2xl font-bold mb-8 text-center">Hvad er inkluderet i din pakke</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 container mx-auto px-4">
        {customAmenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src={amenity.icon} alt={amenity.title} className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">{amenity.title}</h4>
            <p className="text-sm text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KangNu26IncludedAmenities;
