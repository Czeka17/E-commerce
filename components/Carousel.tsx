import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import model from '../public/images/model.jpg'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {Item} from '../lib/item'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'

interface CaruoselProps{
  featuredItems:Item[]
}
function Carousel({featuredItems}:CaruoselProps) {


    const CustomArrow = ({ onClick, name }:any) => (
        <div
          className={`absolute top-1/2 z-10 transform -translate-y-1/2 ${
            name === 'L' ? 'left-2' : 'right-2'
          } cursor-pointer bg-white p-2 rounded-full hover:bg-gray-300`}
          onClick={onClick}
        >
          {name === 'L' ? <AiOutlineLeft/> : <AiOutlineRight/>}
        </div>
      );
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    prevArrow: <CustomArrow name={'L'} />,
    nextArrow: <CustomArrow name={'R'} />,
  };




  return (
    <section className="flex justify-center items-center max-w-[1200px] m-auto">
    <div className="max-w-[100%]">
      <Slider {...settings}>
        {featuredItems.map((item) => (
         <Link key={item._id} href="/[category]/[type]/[id]" as={`/${item.category}/${item.type}/${item._id}`} >
          <div className="flex justify-center">
            <div className='m-4 p-2'>
          <Image
          src={item.imageUrl}
          alt="model"
          height={400}
          width={300}
        />
          <div className='flex flex-row justify-between items-center'>
          <p className="legend">{item.name}</p>
          <p>{item.price}</p>
          </div>
        </div>
          </div></Link>
        ))}
      </Slider>
    </div>
  </section>
);
}

export default Carousel;
