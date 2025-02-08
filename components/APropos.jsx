"use client";
import { motion } from "framer-motion";
import React from "react";
import { Waterfall } from "next/font/google";
import { Montserrat } from "next/font/google";
import Photo from "@/components/Photo";

const montserrat = Montserrat({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
});

const waterfall = Waterfall({
  weight: "400",
  style: "normal",
  subsets: ["serif"],
});

const MotionH1 = React.forwardRef(function MotionH1({ children, ...props }, ref) {
  return (
    <motion.h1
      ref={ref}
      {...props}
      className={`${waterfall.className} ${props.className}`}
      initial={{ x: "-100%" }}  // Position initiale (hors écran à gauche)
      animate={{ x: 0 }}        // Animer pour arriver à la position d'origine
      transition={{
        duration: 2,           // Durée de l'animation
        ease: "easeOut",       // Courbe d'accélération de l'animation
      }}
      whileHover={{
        scale: 1.15,           // Agrandir légèrement au survol
        opacity: 0.8,          // Diminuer légèrement l'opacité
      }}
    >
      {children}
    </motion.h1>
  );
});

export default function APropos() {
  // Texte à animer
  const texte = `
    je suis une Franco-Canadienne passionnée par la création et la stratégie web.
    Forte de quatre années d’expérience dans le marketing, je mets aujourd’hui
    mon expertise au service des entreprises désireuses de valoriser leur image
    et de se démarquer, tant à travers leur site internet que leurs réseaux sociaux.
    Mon objectif : transformer vos idées en un design unique, mémorable et à la
    hauteur de vos ambitions.
  `;

  // Convertir le texte en un tableau de lettres
  const texteArray = texte.split("");

  return (
    <div className="bg-[#9747ff] pb-[10rem] pt-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-start items-start mt-8 mb-6 px-4 pt-[10px] md:pt-[80px]">
        {/* Conteneur Flex pour photo et texte */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-8 md:mt-0">
          {/* Photo avec animation d'entrée */}
          <motion.div
            className="flex-1 md:w-1/3" // La photo prendra 1/3 de la largeur sur les grands écrans
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1, // Durée de l'animation de la photo
              delay: 0.5,   // Délai avant l'apparition de la photo
              ease: "easeOut",
            }}
          >
            <Photo />
          </motion.div>

          {/* Conteneur pour le texte */}
          <div className="flex flex-col justify-start md:w-2/3">
            {/* Titre animé */}
            <MotionH1
              className="text-white text-6xl xl:text-xxl md:text-6xl lg:text-[100px] ml-0 xl:ml-auto pb-2 md:pb-5 font-[`waterfall`] mt-8 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1, // Durée de l'animation du titre
                delay: 1,    // Délai pour que le titre apparaisse après la photo
              }}
            >
              Bonjour ! Moi c'est Chloé,
            </MotionH1>

            {/* Texte avec effet de dactylo */}
            <motion.p
              className={`${montserrat.className} text-s md:text-lg lg:text-4xl text-justify text-white leading-loose md:leading-relaxed lg:leading-normal md:w-3/4`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5, // Accélérer l'animation du texte
                ease: "linear",
                delay: 1.5, // Début de l'animation après le titre
              }}
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              {texteArray.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.05, // Délai réduit entre chaque caractère
                    duration: 0.05,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
