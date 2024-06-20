'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Link from 'next/link';
import { Brush, MoveLeft, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/mobile-nav';

export default function Header() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Features',
      link: '#features',
    },
  ];

  return (
    <header className="relative  w-full">
      <FloatingNav
        className="container"
        navItems={navItems}
      />
      <div className="fixed  w-full top-0 left-0 lg:relative z-50 pt-5 pb-2 border-b-[0.1px] border-[#f9741657]/10 px-4 bg-white shadow-sm lg:shadow-none">
        <div className="container flex justify-between ">
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold custom-c flex items-center ">
                <Brush className="h-6 w-6 custom-c -rotate-180" />
                <span> Letterhead</span>
              </h1>
            </Link>
          </div>
          <MobileNav
            className="block lg:hidden"
            items={navItems}
          />

          <nav className="hidden lg:flex justify-center gap-x-20 items-center">
            <ul className="flex justify-between gap-3">
              {navItems.map(item => (
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
        </div>
      </div>
    </header>
  );
}
