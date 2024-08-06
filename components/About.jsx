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
         {
            university: 'Google Career Certificates',
            qualifications: 'AI Essentials',
            years: '2024',
         },
      ],
   },
   {
      title: 'experience',
      data: [
         {
            company: 'Free-Lance',
            qualifications: 'Développeur Next JS',
            years: 'Mars 2024',
         },
         {
            company: 'Studi',
            qualifications: "Développement d'une application PHP de présentation de véhicules",
            years: 'Nov - Déc 2023',
         },
      ],
   },
];

const skillData = [
   {
      title: 'skills',
      data: [
         {
            name: 'HTML & CSS',
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
   {
      title: 'tools',
      data: [
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/notion.svg',
         },
      ],
   },
];

const About = () => {
   const getData = (arr, title) => {
      return arr.find((item) => item.title === title);
   };

   // console.log(getData(qualificationData, 'experience'))
   return (
      <section className="xl:h-[860px] pb-12 xl:py-24">
         <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
               About me
            </h2>
            {/* Image */}
            <div className="flex flex-col xl:flex-row">
               <div className="hidden xl:flex flex-1 relative">
                  <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
               </div>
               {/* tabs */}
               <div className="flex-1">
                  <Tabs defaultValue="personal">
                     <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                        <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Informations</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Compétences</TabsTrigger>
                     </TabsList>
                     {/* tabls content */}
                     <div className="text-lg mt-12 xl:mt-8">
                        {/* personal */}
                        <TabsContent value="personal">
                           <div className="text-center xl:text-left">
                              <h3 className="h3 mb-4">Services irréprochables</h3>
                              <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                 I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaginguser experiences.
                              </p>
                              {/* icons */}
                              <div>
                                 {infoData.map((item, index) => {
                                    return(
                                       <div key={index}>
                                          <div className="text-primary">{item.icon}</div>
                                          <div>{item.text}</div>
                                       </div>
                                    );
                                 })}
                              </div>
                           </div>
                        </TabsContent>
                        {/* qualifications */}
                        <TabsContent value="qualifications">
                           Qualifications
                        </TabsContent>
                        <TabsContent value="skills">
                           Compétences
                        </TabsContent>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;