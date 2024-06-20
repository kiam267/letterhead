import React from 'react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  items: { name: string; link: string }[];
}

function MobileNav({ items, ...props }: MobileNavProps) {
  return (
    <div {...props}>
      <Sheet>
        <SheetTrigger>
          <Button
            variant="outline"
            asChild
            className="relative flex items-center gap-x-1 p-2 rounded-3xl "
          >
            <div>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#F97316]  to-transparent  h-px " />
              <div className="flex items-center justify-center bg-[#F97316] h-8 w-8 rounded-full -z-[1px]">
                <MoveRight className="h-4 text-white  w-4 font-bold" />
              </div>
              <span className="ms-2 font-bold p-1 text-[#F97316]">
                {' '}
                open
              </span>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className=" mt-5 flex flex-col justify-start gap-y-10 items-start">
            <ul className="flex flex-col  gap-y-6">
              {items.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-black font-medium hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/studio">
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
                  Get Started
                </span>
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
