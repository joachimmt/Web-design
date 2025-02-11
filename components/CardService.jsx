"use client";
import { useState } from "react";
import Image from "next/image";

export default function CardService({ card }) {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour basculer la visibilité et empêcher le rechargement de la page
  const toggleVisibility = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsVisible(prev => !prev); // Bascule l'état de visibilité
  };
  return (
    <div className="max-w-lg  bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href="#" onClick={toggleVisibility}>
        <div className="relative">
          <Image
            src={card.image}
            width={600}
            height={300}
            alt={`Image of ${card.text}`}
            className=" h-[280px] w-[680px] rounded-t-xl object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black opacity-50 w-full h-[100px] rounded-b-xl"></div>
        </div>
      </a>

      {isVisible && (
        <div className="p-4">
          <h5 className="text-2xl  text-gray-900 dark:text-white mb-2">{card.text}</h5>
          <p className="text-gray-700 dark:text-gray-400 text-base">{card.description}</p>
          <div className="mt-4 flex items-center justify-between">

          </div>
        </div>
      )}
    </div>
  );
}
