'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
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
	{
		image: '/work/3.png',
		category: 'Node JS',
		name: 'Nexa Website',
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste voluptatum laborum modi sapiente nemo labore ea perferendis vel veritatis, autem cum aliquam illo fuga ipsum laudantium reprehenderit ipsam animi.",
		link: '',
		github: ''
	},
];

const uniqueCategories = [
	'tout',
	...new Set(projectData.map((item) => item.category)),
];


const Projects = () => {
	const [categories, setCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState('tout');

	const filteredProjects = projectData.filter((project) => {
		return (
			category === 'tout'
				? project
				: project.category === category
		);
	});
	

	return (
		<section className='min-h-screen pt-12'>
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					Mes projets
				</h2>

				{/* tabs */}
				<Tabs defaultValue={category}>
					<TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
						{categories.map((category, index) => {
							return (
								<TabsTrigger
									onClick={() => setCategory(category)}
									key={index}
									value={category}
									className='capitalize w-[162px] md:w-auto'
								>
									{category}
								</TabsTrigger>
							);
						})}
					</TabsList>

					{/* tabs content */}
					<div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
						{filteredProjects.map((project, index) => {
							return (
								<TabsContent value={category} key={index}>
									<ProjectCard project={project} badgeStyle='relative top-negative-19rem -left-4' />
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Projects;