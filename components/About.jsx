import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';


const infoData = [
   {
      icon: <User2 size={20} />,
      text: 'Morel',
   },
   {
      icon: <PhoneCall size={20} />,
      text: '06 59 34 82 49',
   },
   {
      icon: <MailIcon size={20} />,
      text: 'elmorelyss@gmail.com',
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
      title: 'formation',
      data: [
         {
            university: 'Studi',
            qualification: 'Certificat professionnel de développeur web & mobile',
            years: '2023 - 2024',
         },
         {
            university: 'Google Career Certificates',
            qualification: 'AI Essentials',
            years: '2024',
         },
      ],
   },
   {
      title: 'expérience',
      data: [
         {
            company: 'Free - Lance',
            role: 'Développeur Next JS',
            years: 'Mars 2024',
         },
         {
            company: 'Studi',
            role: "Développement d'une application PHP de présentation de véhicules",
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
            name: 'PHP',
         },
         {
            name: 'SQL',
         },
         {
            name: 'React & Next JS',
         },
         {
            name: 'Expo',
         },
      ],
   },
   {
      title: 'tools',
      data: [
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/github.svg',
         },
         {
            imgPath: '/about/nodejs.svg',
         },
         {
            imgPath: '/about/react.svg',
         },
         {
            imgPath: '/about/nextjs.svg',
         },
         {
            imgPath: '/about/expo.svg',
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
               A propos de moi
            </h2>
            {/* Image */}
            <div className="flex flex-col xl:flex-row">
               {/* <div className="hidden xl:flex flex-1 relative">
                  <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
               </div> */}
               {/* tabs */}
               <div className="flex-1">
                  <Tabs defaultValue="personal">
                     <TabsList className="items-center justify-center xl:bg-white p-1 text-muted-foreground rounded-[30px] dark:md:bg-secondary w-full grid h-full md:grid-cols-3 max-w-[500px] mb-12 mx-auto md:border dark:border-none">
                        <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Informations</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                        <TabsTrigger className="w-[164px] xl:w-auto" value="skills">Compétences</TabsTrigger>
                     </TabsList>
                     {/* tabls content */}
                     <div className="text-lg mt-12 xl:mt-8">
                        {/* personal */}
                        <TabsContent value="personal">
                           <div className="text-center xl:text-left">
                              <h3 className="h3 mb-4">Services irréprochables</h3>
                              <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                 J'adore concevoir des interface utilisateurs fluides et adaptatives à tous les terminaux
                              </p>
                              {/* icons */}
                              <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                 {infoData.map((item, index) => {
                                    return (
                                       <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                          <div className="text-primary">{item.icon}</div>
                                          <div>{item.text}</div>
                                       </div>
                                    );
                                 })}
                              </div>
                              {/* languages */}
                              <div className="flex flex-col gap-y-2">
                                 <div className="text-primary">Langages</div>
                                 <div className="border-b border-border"></div>
                                 <div>Français, Russe, Anglais</div>
                              </div>
                           </div>
                        </TabsContent>
                        {/* qualifications */}
                        <TabsContent value="qualifications">
                           <div >
                              <h3 className="h3 mb-8 text-center xl:text-left">
                                 Mon parcours
                              </h3>
                              {/* experience & education wrapper */}
                              <div className="grid md:grid-cols-2 gap-y-8">
                                 {/* experience */}
                                 <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                       <Briefcase />
                                       <h4 className="capitalize font-medium">
                                          {getData(qualificationData, 'expérience').title}
                                       </h4>
                                    </div>
                                    {/* list */}
                                    <div className="flex flex-col gap-y-8">
                                       {getData(qualificationData, 'expérience').data.map((item, index) => {
                                          const { company, role, years } = item;

                                          return (
                                             <div className="flex gap-x-8 group " key={index}>
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div >
                                                   <div className="font-semibold text-xl leading-none mb-2">
                                                      {company}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {role}
                                                   </div>
                                                   <div className="text-base font-medium">
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          );
                                       })}
                                    </div>
                                 </div>
                                 {/* education */}
                                 <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                       <GraduationCap size={28} />
                                       <h4 className="capitalize font-medium">
                                          {getData(qualificationData, 'formation').title}
                                       </h4>
                                    </div>
                                    {/* list */}
                                    <div className="flex flex-col gap-y-8">
                                       {getData(qualificationData, 'formation').data.map((item, index) => {
                                          const { university, qualification, years } = item;

                                          return (
                                             <div className="flex gap-x-8 group " key={index}>
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div >
                                                   <div className="font-semibold text-xl leading-none mb-2">
                                                      {university}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {qualification}
                                                   </div>
                                                   <div className="text-base font-medium">
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          );
                                       })}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills">
                           <div className="text-center xl:text-left">
                              <h3 className="h3 mb-8">Mes outils au quotidien</h3>
                              {/* skills */}
                              <div className="mb-16">
                                 <h4 className="text-xl font-semibold mb-2">Compétences</h4>
                                 <div className="border-b border-border mb-4"></div>
                                 {/* skill list */}
                                 <div >
                                    {getData(skillData, 'skills').data.map((item, index) => {
                                       const { name } = item;

                                       return (
                                          <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                             <div className="font-medium">
                                                {name}
                                             </div>
                                          </div>
                                       );
                                    })}
                                 </div>
                              </div>
                              {/* tools */}
                              <div>
                                 <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                    Outils
                                 </h4>
                                 <div className="border-b border-border mb-4"></div>
                                 {/* tool list */}
                                 <div className="flex gap-x-8 justify-center xl:justify-start">
                                    {getData(skillData, 'tools').data.map((item, index) => {
                                       const { imgPath } = item;

                                       return (
                                          <div key={index}>
                                             <Image src={imgPath} width={48} height={48} alt='' priority />
                                          </div>
                                       );
                                    })}
                                 </div>
                              </div>
                           </div>
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