import Carousel from "@/components/Carousel";
import Newsletter from "@/components/NewsLetter";
import Categories from "@/components/categories";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SpecialOffers from "@/components/special-offers";

function Home(){
return <main>
    <Navigation/>
    <Header/>
    <Carousel/>
    <SpecialOffers/>
    <Categories/>
    <Newsletter/>
    <footer></footer>
</main>
}
export default Home;