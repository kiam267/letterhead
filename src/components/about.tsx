import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section id="#about" className="lg:container mt-20">
      <div className="flex justify-center">
        <div className="relative w-[100px] flex items-center gap-x-1 border-gray-400 border p-1 px-5 rounded-full ">
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
          <div className="flex items-center justify-center bg-[#F97316] h-2 w-2 rounded-full -z-[1px]"></div>
          <span className="font-bold"> about</span>
        </div>
      </div>

      <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5 items-center">
        <div>
          <h2 className="text-4xl text-[#000D49] font-bold text-start">
            The best platform to create your own letterhead
            without any hassle.
          </h2>
          <p className="mt-5 text-start">
            The appropriate program will aid you in
            producing a quality letterhead that mirrors your
            personality and brand. You need to find
            easy-to-use models and other preferences that
            can enable you design an exceptional letterhead.
            If you are self-employed or running a small
            business, choosing the right platform for
            creating personalized letterheads is important
            as it helps remove stress from the process thus
            enabling you to create high-quality ones with
            ease.
          </p>
        </div>
        <div>
          <Image
            className='h-[600px] w-[100%] object-fill'
            src="/letterhead.jpg"
            alt="letterhead"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
