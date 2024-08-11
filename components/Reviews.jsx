'use client';

import Image from 'next/image';

import {
   Card,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const reviewsData = [
   {
      avatar: '/reviews/avatar-1.png',
      name: 'Richard Thompson',
      job: 'Chef',
      avatar: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
   },
   {
      avatar: '/reviews/avatar-1.png',
      name: 'Richard Thompson',
      job: 'Chef',
      avatar: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
   },
   {
      avatar: '/reviews/avatar-1.png',
      name: 'Richard Thompson',
      job: 'Chef',
      avatar: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
   }
];


const Reviews = () => {
  return (
    <div>Reviews</div>
  );
};

export default Reviews;