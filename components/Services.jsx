import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from 'lucide-react';

const servicesData = [
   {
      icon: < GanttChartSquare size={72} strokeWidth={0.8} />,
      title: 'Web Design',
      description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.'
   },
   {
      icon: < Blocks size={72} strokeWidth={0.8} />,
      title: 'Développement web',
      description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.'
   },
   {
      icon: < Gem size={72} strokeWidth={0.8} />,
      title: "Développement d'applications",
      description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.'
   },
];

const Services = () => {
   return (
      <section className='mb-12 xl:mb-36'>
         <div className="container mx-auto">
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
               Mes Services
            </h2>
            {/* grid items */}
            <div className="">
               grid items
            </div>
         </div>
      </section>
   );
};

export default Services;