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
  const texte = `Passionnée de création et stratégie web, j’aide les entreprises à se démarquer en ligne avec un design unique et impactant`;
  const texteArray = texte.split("");

  return (
    <div className="bg-[#9747ff] pb-[8rem] pt-1 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-start items-start mt-8 mb-6 px-4 pt-[10px] md:pt-[80px]">
        {/* Changer l'ordre en mobile (texte avant photo) */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8 mt-8 md:mt-0">
          {/* Texte en premier en mobile */}
          <div className="flex flex-col justify-start md:w-2/3 mt-11">
            {/* Titre animé */}
            <MotionH1
              className="text-white text-6xl md:text-6xl lg:text-[100px] text-center md:text-left pb-2 md:pb-5  md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              Bonjour ! Moi c'est Chloé,
            </MotionH1>

            {/* Texte animé */}
            <motion.p
              className={`${montserrat.className} font-extrabold mt-[2rem] md:mt-[7rem] text-3xl md:text-4lg lg:text-5xl text-center md:text-left text-white leading-loose md:leading-relaxed lg:leading-normal md:w-3/4`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                ease: "linear",
                delay: 1,
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
                    delay: index * 0.03,
                    duration: 0.04,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Photo après texte en mobile */}
          <motion.div
            className="flex-1 w-2/3 mx-auto md:w-1/3 md:mx-0" // Réduction de la taille en mobile
            initial={{ opacity: 0, scale: 0.5 }} // Plus petite au départ
            animate={{ opacity: 1, scale: 0.8 }} // Reste plus petite en mobile
            transition={{
              duration: 1,
              delay: 2, // Affichage après le texte
              ease: "easeOut",
            }}
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
