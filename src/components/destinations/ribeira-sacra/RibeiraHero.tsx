
import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RibeiraHero = () => {
  return (
    <div className="relative h-[70vh]">
      <img
        src="/lovable-uploads/087fe87f-e6e4-4c2e-b840-bea332c370d2.png"
        alt="Trail Ribeira Sacra"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-stone transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
          Trail Ribeira Sacra, Spain
        </h1>
      </div>
    </div>
  );
};

export default RibeiraHero;
