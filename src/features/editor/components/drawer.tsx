'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';

import { color } from 'framer-motion';
import { InputData } from '@/features/editor/components/canvas-image';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  handelInputData: (input: InputData) => void;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  handelInputData,
}) => {
  const COLORS = [
    '#000000',
    '#333333',
    '#7dd3fc',
    '#c084fc',
    '#e879f9',
    '#f472b6',
    '#fb7185',
    '#16a34a',
    '#d9f99d',
    '#92400e',
    '#818cf8',
    '#ffffff',
    '#666666',
    '#fb923c',
    '#facc15',
  ];

  const [selectedColor, setSelectedColor] = useState<
    string | null
  >(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(
      selectedColor === color ? null : color
    );
  };

  const handleColorInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedColor(event.target.value);
  };

  const input = {
    color: selectedColor || '#ffffff',
    size: 20,
  };
  useEffect(() => {
    handelInputData(input);
  }, [handelInputData, input]);
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white transform transition-transform ${
        !isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '300px', zIndex: 1000 }}
    >
      <div className="flex justify-end items-center p-[1.63rem] border-b-[1px]">
        <button
          onClick={onClose}
          className="flex justify-end"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4 relative after:absolute after:border-r after:h-full after:w-full after:flex after:items-center">
        <div className="flex justify-start gap-3 my-5 flex-wrap ">
          {COLORS.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              className={`h-5 w-5 rounded-md cursor-pointer outline outline-gray-200 ${
                selectedColor === color
                  ? 'border-2 border-black'
                  : ''
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
          <label htmlFor="favcolor" className="relative">
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={selectedColor || '#ffffff'}
              onChange={handleColorInputChange}
              className="opacity-0 w-5 h-5 absolute inset-0 cursor-pointer"
            />
            <div
              className="w-5 h-5 rounded-md"
              style={{
                background:
                  'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
                position: 'relative',
              }}
            >
              {/* <div
                className="absolute inset-0 flex items-center justify-center text-black font-bold"
                style={{ fontSize: '24px' }}
              >
                +
              </div> */}
            </div>
          </label>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-3 ">
            <Input
              className=""
              placeholder="enter your details"
            />
            <div></div>
          </div>
          {selectedColor && (
            <div className="mt-4">
              <p>
                Selected Color:{' '}
                <span style={{ color: selectedColor }}>
                  {selectedColor}
                </span>
              </p>
              <p>
                HTML Color Tag:{' '}
                <code>{`<div style="background-color: ${selectedColor};"></div>`}</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
