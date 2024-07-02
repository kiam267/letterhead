'use client';
import React from 'react';
import { Heart } from 'lucide-react';

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic.',
    src: '/testimonials/reviewer-1.jpg',
    subTitle: 'ceo & founder',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    src: '/testimonials/reviewer-1.jpg',
    subTitle: 'ceo & founder',
  },
  {
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    src: '/testimonials/reviewer-1.jpg',
    subTitle: 'ceo & founder',
  },
  {
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    src: '/testimonials/reviewer-1.jpg',
    subTitle: 'ceo & founder',
  },
  {
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    src: '/testimonials/reviewer-1.jpg',
    subTitle: 'ceo & founder',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    src: '/testimonials/reviewer-1.jpg',
    subTitle: 'ceo & founder',
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="lg:container py-20"
    >
      <div className="flex justify-center">
        <div className="relative  flex items-center gap-x-1 border-gray-400 border p-1 px-5 rounded-full ">
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
          <div className="flex items-center justify-center bg-[#F97316] h-2 w-2 rounded-full -z-[1px]"></div>
          <span className="font-bold">testimonials</span>
        </div>
      </div>
      <div className="my-10 block w-1/2 m-auto">
        <h2 className=" text-2xl lg:text-4xl text-center font-bold flex flex-wrap justify-center items-center leading-tight text-[#000D49] ">
          Our customer{' '}
          <span className="text-orange-500 px-2">
            <Heart className="h-8 w-8" />
          </span>
          us
        </h2>
      </div>
      {/* item - 1 */}
      <div>
        <div className=" mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
