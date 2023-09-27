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
      <Link href="/[category]/[type]" as={`/${category}/hoodie`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
            Hoodie
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/jeans`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
            Jeans
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/boots`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
            Boots
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/t-shirt`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
            T-shirt
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/backpack`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
            Backpack
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/longsleeve`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
            Longsleeve
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/shorts`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          
            Shorts
        </li>
        </Link>
        <Link href="/[category]/[type]" as={`/${category}/sport`}>
        <li className="p-4 hover:bg-white hover:text-black duration-200">
          
            Sport
        </li>
        </Link>

      </ul>
    </div>
}
export default Submenu;