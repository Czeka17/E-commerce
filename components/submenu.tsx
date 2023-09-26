import Link from "next/link";
interface SubmenuProps{
    handleMouseEnter:(category:string) => void
    handleMouseLeave:() => void
    category: string
}
function Submenu({handleMouseEnter,handleMouseLeave,category}:SubmenuProps){
    return <div onMouseEnter={() => handleMouseEnter(`${category}`)}
    onMouseLeave={handleMouseLeave} className="absolute left-[50%] transform -translate-x-1/2 mt-2 bg-gray-800 text-white shadow-lg z-10">
      <ul className="text-center">
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/hoodie`}>
            Hoodie
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/jeans`}>
            Jeans
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/boots`}>
            Boots
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/t-shirt`}>
            T-shirt
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/backpack`}>
            Backpack
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/jersey`}>
            Jersey
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/longsleeve`}>
            Longsleeve
          </Link>
        </li>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          <Link href="/[category]/[type]" as={`/${category}/shorts`}>
            Shorts
          </Link>
        </li>

      </ul>
    </div>
}
export default Submenu;