import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';

import { Highlight } from '@/components/ui/hero-highlight';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <section id="home">
      <ContainerScroll
        titleComponent={
          <div className="my-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#000D49] dark:text-white leading-10 my-10">
              <div className='py-4'> The fastest way to create your own</div>
              <Highlight className="text-white  mt-10">
                letterhead is by one click
              </Highlight>
            </h1>

            <Link
              href="/studio"
              className="block mx-auto  md:w-1/3"
            >
              <Button
                size="lg"
                variant="outline"
                className="relative flex items-center gap-x-2 p-2 rounded-3xl  w-full py-2"
              >
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
                <div className="absolute left-2 flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px]">
                  <MoveRight className="h-4 text-white  w-4 font-bold" />
                </div>
                <span className="ms-2 font-bold p-1 text-[#F97316]">
                  {' '}
                  Get Started
                </span>
              </Button>
            </Link>
          </div>
        }
      >
        <Image
          src={`/letterhead.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

export default Hero;
