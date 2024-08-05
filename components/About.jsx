import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';


const infoData = [
   {
      icon: <User2 size={20} />,
      text: 'Merlin Migan',
   },
   {
      icon: <PhoneCall size={20} />,
      text: '06 59 34 82 49',
   },
   {
      icon: <MailIcon size={20} />,
      text: 'merlin.migan@gmail.com',
   },
   {
      icon: <Calendar size={20} />,
      text: 'Né le 18 Mai 1994',
   },
   {
      icon: <GraduationCap size={20} />,
      text: 'Certificat professionnel de développeur web & mobile',
   },
   {
      icon: <HomeIcon size={20} />,
      text: '1 Bis Quai des Tanneurs, 34090 Montpellier, France',
   },
];

const qualificationData = [
   {
      title: 'education',
      data: [
         {
            university: 'Studi',
            qualifications: 'Certificat professionnel de développeur web & mobile',
            years: '2023 - 2024',
         },
      ],
   },
];

const skillData = [
   {
      title: 'skills',
      data: [
         {
            name: 'HTML, CSS',
         },
         {
            name: 'JavaScript',
         },
         {
            name: 'React & Next JS',
         },
         {
            name: 'React Native avec Expo',
         },
      ],
   },
];

const About = () => {
   return (
      <div>About</div>
   );
};

export default About;