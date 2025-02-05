"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telephone",
    description: "(+1) 514 224 9810",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Chloe.ptrx@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "5133 boulevard Saint-Laurent, Montreal,H3A 1A9",
  },
];

export default function ContactPage() {
  return (
    <div>
      <div className="bg-[#9747ff] flex flex-col py-[10rem]">
        <h1 className="ml-[92rem] font-['Montserrat'] text-5xl font-normal leading-[52px] text-white ">Une question ? Une idée?</h1>
        <p className="ml-[92rem] text-5xl text-[#fdc350] font-['Montserrat'] leading-[52px] ">Parlons-en!</p>
      </div>
       <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >

      <div className="container mx-auto mt-[3rem]">
        <h1 className="mr-4 font-bold text-4xl mb-[4rem] text-[#9747ff] ">ME CONTACTER</h1>
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#9747ff] rounded-xl">
              {/* <h3 className="text-4xl text-accent">Travaillons ensemble</h3> */}
              <p className="text-white/90 font-semibold">
              Profitez d’une analyse personnalisée et gratuite pour booster votre présence en ligne en remplissant ce formulaire !
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prénom" />
                <Input type="lastname" placeholder="Nom" />
                <Input type="email" placeholder="Adresse courriel" />
                <Input type="phone" placeholder="Numéro de téléphone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sélectionnez un service</SelectLabel>
                    <SelectItem value="est">Design Web</SelectItem>
                    <SelectItem value="mst">Création de logo</SelectItem>
                    <SelectItem value="sst">Stratégie Marketing</SelectItem>
                    <SelectItem value="cst">Visuels de communication</SelectItem>
                    <SelectItem value="fst">Développement de site web</SelectItem>
                    <SelectItem value="jst">Hébergement et maintenance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="xl" className="max-w-40 py-3 bg-[#fdc350] font-bold">
                Envoyez un message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#fdc350]  text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 ">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}
