import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from '@/components/ui/card';

const servicesData = [
   {
      icon: < GanttChartSquare size={72} strokeWidth={0.8} />,
      title: 'Web Design',
      description: "J'utilise souvent Figma pour concevoir des interfaces utilisateur attractives et fonctionnelles, en optimisant l'expérience utilisateur et en facilitant la collaboration avec les équipes de développement."
   },
   {
      icon: < Blocks size={72} strokeWidth={0.8} />,
      title: 'Développement Frontend',
      description: "Next JS est mon framework préféré pour la conception d'interface utilisateur pour application web. Et quand je ne suis pas sur une appli web, j'en développe une pour Android avec Expo !"
   },
   {
      icon: < Gem size={72} strokeWidth={0.8} />,
      title: "Développement Backend",
      description: "Grace à mes connaissances de Node.js et de Express, je conçois des applications web performantes et évolutives. Je maîtrise la gestion des API, le traitement des données, et l'intégration de solutions adaptées aux besoins."
   },
];

const Services = () => {
   return (
      <section className='mb-12 xl:mb-36'>
         <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
               Mes Services
            </h2>
            {/* grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-24 xl:gap-x-8'>
               {
                  servicesData.map((item, index) => {
                     return (
                        <Card key={index} className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                           <CardHeader className='text-primary absolute -top-[60px]'>
                              <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                 {item.icon}
                              </div>
                           </CardHeader>
                           <CardContent className='text-center'>
                              <CardTitle className='mb-4'>
                                 {item.title}
                              </CardTitle>
                              <CardDescription className='text-lg'>
                                 {item.description}
                              </CardDescription>
                           </CardContent>
                        </Card>
                     );
                  })
               }
            </div>
         </div>
      </section>
   );
};

export default Services;