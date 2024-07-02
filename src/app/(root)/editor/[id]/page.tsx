'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Brush,
  Download,
  SquareChevronRight,
} from 'lucide-react';

import CanvasImage, { InputData } from '@/features/editor/components/canvas-image';
import Drawer from '@/features/editor/components/drawer';
import { Button } from '@/components/ui/button';

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDownloadClick, setIsDownloadClick] =
    useState(false);
  const [inputData, setInputData] = useState<InputData>({
    color: '#ffffff',
    size: 20,
    fontFamily: 'Arial',
  });

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const handelInputData = (input: InputData) => {
    setInputData(prev => {
      return {
        ...prev,
        color: input.color,
      };
    });
  };

  return (
    <div
      className={`flex ${
        isDrawerOpen ? 'ml-[300px]' : ''
      } transition-all`}
    >
      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        handelInputData={handelInputData}
      />
      <main className="lg:container flex-grow">
        <div className="fixed top-0 left-0 w-full bg-white shadow-sm flex justify-between p-4 border-b z-50">
          <div className="flex justify-around items-center gap-4">
            <Link href="/">
              <h1 className="text-2xl font-bold custom-c flex items-center ">
                <Brush className="h-6 w-6 custom-c -rotate-180" />
                <span> Letterhead</span>
              </h1>
            </Link>
            <div>
              <SquareChevronRight
                className="h-6 w-6 text-gray-700 cursor-pointer"
                onClick={toggleDrawer}
              />
            </div>
          </div>
          <div>
            <Button
              onClick={() => setIsDownloadClick(true)}
              size="lg"
              variant="outline"
              className="relative flex items-center gap-x-4 p-2 rounded-3xl  w-[150px] py-2"
            >
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
              <div className="absolute left-2 flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px]">
                <Download className="h-4 text-white  w-4 font-bold" />
              </div>
              <span className="ms-2 font-bold p-1 text-[#F97316]">
                {' '}
                download
              </span>
            </Button>
          </div>
        </div>
        <div className="py-20 flex flex-col justify-center items-center">
          {/* My Post: {params.id} */}
          <div className="my-6">
            <CanvasImage
              isDownload={isDownloadClick}
              inputData={inputData}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
