import Carousel from "@/components/Carousel";
import Newsletter from "@/components/NewsLetter";
import Categories from "@/components/categories";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SpecialOffers from "@/components/special-offers";
import {useContext} from 'react';
import { ClothesContext } from "@/store/clothes-context";
function Home(){
    const { featuredItems } = useContext(ClothesContext);
return <main>
    <Navigation/>
    <Header/>
    <Carousel featuredItems={featuredItems}/>
    <SpecialOffers/>
    <Categories/>
    <Newsletter/>
    <footer></footer>
</main>
}
export default Home;