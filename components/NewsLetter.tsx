import React from 'react';
import Image from 'next/image';
import newsLetter from '../public/images/newsletter.jpg';

function Newsletter() {
  return (
    <header className='relative'>
      <div className='relative h-[40vh] p-16 z-1'>
        <Image
          src={newsLetter}
          alt="Header"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute h-full w-full bottom-0 left-0 bg-black z-1 opacity-25"></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <button className='p-16 bg-white text-black z-10'>Sign up to our newsletter</button>
      </div>
    </header>
  );
}

export default Newsletter;
