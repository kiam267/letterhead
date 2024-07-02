import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page;


/* 


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';


import { Button } from '@/components/ui/button';

export const templates = [
  {
    id: '30489458',
    src: '/letterhead.jpg',
  },
  {
    id: '30482458',
    src: '/letterhead.jpg',
  },
  {
    id: '31489458',
    src: '/letterhead.jpg',
  },
];

function Page() {
  const [selectedId, setSelectedId] = useState<
    string | null
  >(null);
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (id: string) => {
    setSelectedId(id);
    setId(id);
  };

  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-center my-10">
      <div className="my-4">
        <h2 className="font-bold">select one !!</h2>
      </div>
      <ul className="flex justify-evenly flex-wrap gap-10">
        {templates.map(template => (
          <li key={template.id}>
            <div
              className={`border p-5 rounded-2xl cursor-pointer ${
                selectedId === template.id
                  ? 'border-red-500'
                  : 'border-black'
              }`}
              onClick={() => handleClick(template.id)}
            >
              <Image
                className="w-[250px]"
                src={template.src}
                alt="Template Image"
                width={300}
                height={300}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="my-5 fixed  bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        {selectedId && (
          <Button
            size="lg"
            variant="outline"
            className="relative flex items-center gap-x-2 p-2 rounded-3xl w-[150px] py-2 "
            onClick={() => router.push(`/editor/${id}`)}
          >
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
            <div className="absolute left-2 flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px]">
              <MoveRight className="h-4 text-white  w-4 font-bold" />
            </div>
            <span className="ms-2 font-bold p-1 text-[#F97316]">
              {' '}
              Start
            </span>
          </Button>
        )}
      </div>
    </main>
  );
}

export default Page;



*/