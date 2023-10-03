import Image from 'next/image';
import React, { useState } from 'react';

interface ProductCardProps {
  item: string;
  name:string;
}

function ProductCard({ item,name }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [followCursorY,setFollowCursorY]= useState(0)
  const [followCursorX,setFollowCursorX]= useState(0)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: any) => {
    const container = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - container.left) / container.width;
    const offsetY = (e.clientY - container.top) / container.height;
    setFollowCursorX(e.clientX - container.left);
    setFollowCursorY(e.clientY - container.top);
    setCursorX(offsetX);
    setCursorY(offsetY);
  };

  const zoomStyle = {
    backgroundImage: `url(${item})`,
    backgroundPosition: `${cursorX * 100}% ${cursorY * 100}%`,
    backgroundSize: '300% 300%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className="bg-white/50 p-6 shadow-md rounded-lg relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={item}
        alt={name}
        width={300}
        height={400}
        className="mb-4 rounded-md"
      />
      {isHovered && (
        <div
          className="absolute top-0 left-0 z-50 w-48 h-48 bg-white/50 border border-gray-300 rounded-full shadow-md flex justify-center items-center pointer-events-none"
          style={{ left: followCursorX , top: followCursorY }}
        >
          <div
            className="w-48 h-48 rounded-full"
            style={zoomStyle}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
