import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="lg:container">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-orange-200 p-4 rounded-2xl mb-3">
        <div>
          <p>
            Copyright © 2024{' '}
            <Link href="https://anygraphicstoday.com/" target='_blank'>
              Anygraphicstoday
            </Link>
            .
          </p>
        </div>
        <div>
          <ul className="flex justify-between gap-x-3">
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/"> Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
