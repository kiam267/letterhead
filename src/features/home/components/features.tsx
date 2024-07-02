'use client';
import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AutoCarousel from '@/components/ui/auto-carousel';

const TEXTS = ['name', 'email', 'phone', 'address'];
function Features() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  const inputPlaceholder = `Enter your ${
    TEXTS[index % TEXTS.length]
  }`;
  return (
    <section id="features" className="lg:container mt-20">
      <div className="flex justify-center">
        <div className="relative w-[120px] flex items-center gap-x-1 border-gray-400 border p-1 px-5 rounded-full ">
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
          <div className="flex items-center justify-center bg-[#F97316] h-2 w-2 rounded-full -z-[1px]"></div>
          <span className="font-bold"> features</span>
        </div>
      </div>
      <div className="my-10">
        <h2 className=" text-2xl lg:text-4xl text-center font-bold lg:w-1/2 block m-auto leading-tight text-[#000D49] ">
          All in one tool for Generating your letterhead
          using{' '}
          <span className="text-orange-500 ">
            letterhead.com
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3   mt-7 my-10 gap-10">
        {/* item - 1  */}
        <div className="flex flex-col gap-y-6 border rounded-3xl p-10 justify-between ">
          <div className="flex border rounded-3xl p-10">
            <div className="border-r-[2px] border-orange-200 pr-4 mr-4 relative">
              <span className="absolute inset-x-0 w-10 mx-auto -bottom-px bg-gradient-to-r from-transparent  to-orange-500 h-[2.3px] rotate-90 -left-1 animate-top-to-bottom" />
            </div>
            <div className="p-4">
              <div className="relative pt-6">
                <div className="absolute -top-3 -left-[3.3rem] transform  translate-x-1/2 translate-y-1/2 -z-10">
                  <svg
                    className="rotate-180 absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 30"
                    x="0px"
                    y="0px"
                    fill="#fed7aa"
                    width="42px"
                    height="42px"
                  >
                    <path
                      d="m12.5,12c0-5.23828-4.26172-9.5-9.5-9.5-.27637,0-.5-.22363-.5-.5s.223-.5.5-.5c5.78955,0,10,4.70996,10.5,10.5s-4.71045,10.5,10.5c-.27637,0-.5-.22363.5-.5s.22363-.5.5-.5c5.21828,0,9.5-4.26172,9.5-9.5Z"
                      strokeWidth="0"
                    />
                  </svg>
                </div>
                <Input
                  className="rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 -mt-3"
                  readOnly
                  placeholder={inputPlaceholder}
                ></Input>
              </div>

              <div className="relative">
                <div className="absolute top-[30px] -left-[3.3rem] transform  translate-x-1/2 translate-y-1/2 -z-10">
                  <svg
                    className="rotate-180 absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 30"
                    x="0px"
                    y="0px"
                    fill="#fed7aa"
                    width="42px"
                    height="42px"
                  >
                    <path
                      d="m12.5,12c0-5.23828-4.26172-9.5-9.5-9.5-.27637,0-.5-.22363-.5-.5s.223-.5.5-.5c5.78955,0,10,4.70996,10.5,10.5s-4.71045,10.5,10.5c-.27637,0-.5-.22363.5-.5s.22363-.5.5-.5c5.21828,0,9.5-4.26172,9.5-9.5Z"
                      strokeWidth="0"
                    />
                  </svg>
                </div>
                <div className="relative  top-12">
                  <Button
                    variant="outline"
                    className="relative flex items-center gap-x-2 p-2 rounded-3xl "
                  >
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
                    <div className="flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px]">
                      <MoveRight className="h-4 text-white  w-4 font-bold" />
                    </div>
                    <span className="ms-2 font-bold p-1 text-[#F97316]">
                      {' '}
                      create
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border rounded-3xl p-4 w-full items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px] mr-2">
                <span className="text-2xl text-white p-3">
                  1
                </span>
              </div>
              <span className="font-bold ">
                Easily customize
              </span>
            </div>
            <div className="py-3 text-center">
              <p>
                You can easily customize your name email,
                phone number, and address.
              </p>
            </div>
          </div>
        </div>
        {/* item - 2 */}
        <div className="flex flex-col gap-y-6 border rounded-3xl p-10 justify-between ">
          <div className="flex justify-center w-full border rounded-3xl px-0 py-5">
            <AutoCarousel />
          </div>
          <div className="flex flex-col border rounded-3xl p-4 w-full items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px] mr-2">
                <span className="text-2xl text-white p-3">
                  2
                </span>
              </div>
              <span className="font-bold ">
                Lot of templates
              </span>
            </div>
            <div className="py-3 text-center">
              <p>
                There are many templates and color options
                available.
              </p>
            </div>
          </div>
        </div>
        {/* item - 3 */}
        <div className="flex flex-col gap-y-6 border rounded-3xl p-10 justify-between ">
          <div className="flex justify-center w-full border rounded-3xl px-0 py-5">
            <svg
              width="100px"
              height="100px"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="15.773 15.773 32.454 32.454"
              enableBackground="new 0 0 64 64"
            >
              <g>
                <path
                  fill="#FFFFFF"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M16.273,39.99V24.01c0-4.273,3.464-7.737,7.737-7.737h15.98c4.273,0,7.737,3.464,7.737,7.737v15.98c0,4.273-3.464,7.737-7.737,7.737H24.01C19.737,47.727,16.273,44.263,16.273,39.99z"
                />
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M39.661,31.339L32,39l-7.661-7.661 M32,39l0-14"
                />
              </g>
            </svg>
          </div>
          <div className="flex flex-col border rounded-3xl p-4 w-full items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px] mr-2">
                <span className="text-2xl text-white p-3">
                  3
                </span>
              </div>
              <span className="font-bold ">
                Download high-resolution.
              </span>
            </div>
            <div className="py-3 text-center">
              <p>
                Download your letterhead with high
                resolution to help grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
