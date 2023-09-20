import { useRef } from 'react';

import img from '../public/images/woman.jpg'
import man from '../public/images/man.jpg'
import kids from '../public/images/kids.jpg'
import sport from '../public/images/sport.jpg'

import Image from 'next/image';

function SpecialOffers() {
    const images = [
        img,
        man,
        kids,
        sport,
      ];
      const categories = [
        'Women',
        'Men',
        'Kids',
        'Sport'
      ]
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (index: number) => {
        const imageRef = imageRefs.current[index];
        if (imageRef) {
          imageRef.classList.add('blur', 'scale-125');
        }
      };
    
      const handleMouseLeave = (index: number) => {
        const imageRef = imageRefs.current[index];
        if (imageRef) {
          imageRef.classList.remove('blur', 'scale-125');
        }
      };
  return (
    <section className='flex justify-center items-center max-w-[1200px] m-auto'>
      <div className="grid grid-cols-2 gap-4">
      {images.map((src,index) => (
          <div
            key={index}
            className='relative flex flex-col justify-center items-center group overflow-hidden'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Image
              ref={(el) => (imageRefs.current[index] = el)}
              src={src}
              alt="Header"
              className="w-full h-full filter transition-blur duration-150 ease-in-out"
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <h2 className='text-white z-10 text-4xl transform scale-100 group-hover:scale-125 transition-transform font-bold'>{categories[index]}</h2>
            </div>
            <div className="absolute h-full w-full bottom-0 left-0 bg-black z-1 opacity-50 "></div>
          </div>
        ))}
      
      </div>
    </section>
  );
}

export default SpecialOffers;
