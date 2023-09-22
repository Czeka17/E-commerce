import { useRef } from "react";
import Image from "next/image";
import hoodie from "../public/images/hoodie.png"
import jeans from "../public/images/jeans.png"
import boots from "../public/images/boots.png"
import tshirt from "../public/images/t-shirt.png"
import backpack from "../public/images/backpack.png"
import jersey from "../public/images/jersey.png"
import longsleeve from "../public/images/longsleeve.png"
import shorts from "../public/images/shorts.png"
import Link from "next/link";
function Categories(){

    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const images = [
        hoodie,
        jeans,
        boots,
        tshirt,
        backpack,
        jersey,
        longsleeve,
        shorts
      ];
      const categories = [
        'Hoodie',
        'Jeans',
        'Boots',
        'T-shirt',
        'Backpack',
        'Jersey',
        'Longsleeve',
        'Shorts'
      ]
      const handleMouseEnter = (index: number) => {
        const imageRef = imageRefs.current[index];
        if (imageRef) {
          imageRef.classList.add('scale-110');
        }
      };
    
      const handleMouseLeave = (index: number) => {
        const imageRef = imageRefs.current[index];
        if (imageRef) {
          imageRef.classList.remove('scale-110');
        }
      };
    return <section className="grid grid-cols-4 gap-4 max-w-[1200px] m-auto">
        {images.map((src,index) => (
            <Link href={`/all/${categories[index].toLowerCase()}`} key={index}>
             <div className="relative p-4 m-2 group" onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={() => handleMouseLeave(index)}>
             <Image  ref={(el) => (imageRefs.current[index] = el)}
              src={src} alt="hoodie" className="w-full h-auto duration-150 ease-in-out" />
             <div className='absolute inset-0 flex items-center justify-center'>
                   <h2 className='text-white z-10 text-4xl transform scale-100 group-hover:scale-110 transition-transform font-bold bg-black/75 p-4 w-[80%] text-center'>{categories[index]}</h2>
                 </div>
         </div>
         </Link>
        ))}

</section>

}
export default Categories;