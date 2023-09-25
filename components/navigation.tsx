import Link from "next/link"
import { useState } from "react";
import Cart from "./cart";
function Navigation(){
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [isopen,setIsOpen] = useState(false)
  const handleMouseEnter = (category:any) => {
    setShowSubMenu(category);
  };
  function closeModal(){
    setIsOpen(false)
  }
  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

  const isSubMenuVisible = (category:string) => {
    return showSubMenu === category;
  };
    return (
      <nav className="text-black py-4">
      <div className="flex justify-center items-center">
        <Link href="/">
          VogueNest
        </Link>
      </div>
      <div className="relative">
        <ul className="flex row justify-around items-center">
          <li
            onMouseEnter={() => handleMouseEnter('men')}
            className="relative group"
          >
            <Link href="/[category]" as="/men">
              Man
            </Link>
            {isSubMenuVisible('men') && (
              <div onMouseEnter={() => handleMouseEnter('men')}
              onMouseLeave={handleMouseLeave} className="absolute left-[50%] transform -translate-x-1/2 mt-2 bg-gray-800 text-white shadow-lg z-10">
                <ul className="text-center">
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/hoodie">
                      Hoodie
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/jeans">
                      Jeans
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/boots">
                      Boots
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/t-shirt">
                      T-shirt
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/backpack">
                      Backpack
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/jersey">
                      Jersey
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/longsleeve">
                      Longsleeve
                    </Link>
                  </li>
                  <li className="p-4 hover:bg-white hover:text-black duration-200">
                    <Link href="/[category]/[type]" as="/men/shorts">
                      Shorts
                    </Link>
                  </li>

                </ul>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('women')}
            className="relative group"
          >
            <Link href="/[category]" as="/women">
             Woman
            </Link>
            {isSubMenuVisible('women') && (
               <div onMouseEnter={() => handleMouseEnter('women')}
               onMouseLeave={handleMouseLeave} className="absolute left-[50%] transform -translate-x-1/2 mt-2 bg-gray-800 text-white shadow-lg z-10">
                 <ul className="text-center">
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/hoodie">
                       Hoodie
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/jeans">
                       Jeans
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/boots">
                       Boots
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/t-shirt">
                       T-shirt
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/backpack">
                       Backpack
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/jersey">
                       Jersey
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/longsleeve">
                       Longsleeve
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/women/shorts">
                       Shorts
                     </Link>
                   </li>
 
                 </ul>
               </div>
            )}
          </li>
          <li className="relative group" onMouseEnter={() => handleMouseEnter('kids')}>
            <Link href="/[category]" as="/kids">
             Kids
            </Link>
            {isSubMenuVisible('kids') && (
               <div onMouseEnter={() => handleMouseEnter('kids')}
               onMouseLeave={handleMouseLeave} className="absolute left-[50%] transform -translate-x-1/2 mt-2 bg-gray-800 text-white shadow-lg z-10">
                 <ul className="text-center">
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/hoodie">
                       Hoodie
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/jeans">
                       Jeans
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/boots">
                       Boots
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/t-shirt">
                       T-shirt
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/backpack">
                       Backpack
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/jersey">
                       Jersey
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/longsleeve">
                       Longsleeve
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/kids/shorts">
                       Shorts
                     </Link>
                   </li>
 
                 </ul>
               </div>
            )}
          </li>
          <li className="relative group" onMouseEnter={() => handleMouseEnter('sport')}>
            <Link href="/[category]" as="/sport">
              Sport
            </Link>
            {isSubMenuVisible('sport') && (
               <div onMouseEnter={() => handleMouseEnter('sport')}
               onMouseLeave={handleMouseLeave} className="absolute left-[50%] transform -translate-x-1/2 mt-2 bg-gray-800 text-white shadow-lg z-10">
                 <ul className="text-center">
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/hoodie">
                       Hoodie
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/jeans">
                       Jeans
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/boots">
                       Boots
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/t-shirt">
                       T-shirt
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/backpack">
                       Backpack
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/jersey">
                       Jersey
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/longsleeve">
                       Longsleeve
                     </Link>
                   </li>
                   <li className="p-4 hover:bg-white hover:text-black duration-200">
                     <Link href="/[category]/[type]" as="/sport/shorts">
                       Shorts
                     </Link>
                   </li>
 
                 </ul>
               </div>
            )}
          </li>
          <li onClick={() => setIsOpen(true)}>
            <p>open</p>
          </li>
        </ul>
      </div>
      {isopen && <Cart closeModal={closeModal}/>}
    </nav>
    )
}
export default Navigation