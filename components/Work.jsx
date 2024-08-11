'use client';
import Link from 'next/Link';
import { Button } from './ui/Button';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';


const projectData = [
	{
		image: '/work/3.png',
		category: 'React',
		name: 'Nexa Website',
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste voluptatum laborum modi sapiente nemo labore ea perferendis vel veritatis, autem cum aliquam illo fuga ipsum laudantium reprehenderit ipsam animi.",
		link: '',
		github: ''
	},
	{
		image: '/work/4.png',
		category: 'React',
		name: 'Nexa Website',
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste voluptatum laborum modi sapiente nemo labore ea perferendis vel veritatis, autem cum aliquam illo fuga ipsum laudantium reprehenderit ipsam animi.",
		link: '',
		github: ''
	},
	{
		image: '/work/2.png',
		category: 'Next JS',
		name: 'Nexa Website',
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste voluptatum laborum modi sapiente nemo labore ea perferendis vel veritatis, autem cum aliquam illo fuga ipsum laudantium reprehenderit ipsam animi.",
		link: '',
		github: ''
	},
	{
		image: '/work/1.png',
		category: 'Next JS',
		name: 'Nexa Website',
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste voluptatum laborum modi sapiente nemo labore ea perferendis vel veritatis, autem cum aliquam illo fuga ipsum laudantium reprehenderit ipsam animi.",
		link: '',
		github: ''
	},
	{
		image: '/work/3.png',
		category: 'React',
		name: 'Nexa Website',
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste voluptatum laborum modi sapiente nemo labore ea perferendis vel veritatis, autem cum aliquam illo fuga ipsum laudantium reprehenderit ipsam animi.",
		link: '',
		github: ''
	},
];

const Work = () => {
	return (
		<section className='relative mb-12 xl:mb-48'>
			<div className="container mx-auto">
				{/* text */}
				<div className='bg-pink-100 max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
					<h2 className='section-title mb-4'>Projets récents</h2>
					<p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

					<Link href="/projects">
						<Button>All Projects</Button>
					</Link>
				</div>
				{/* slider */}
				<div>slider</div>
			</div>
		</section>
	);
};

export default Work;