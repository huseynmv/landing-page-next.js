import Container from "./components/Container";
import Header from "./components/Header";
import InfoCards from "./components/InfoCards";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Slider from "./components/Slider";
import { getInfoCardsData, getProducts, getSlides } from "./lib/api";




const [slides, infoCards, products] = await Promise.all([
  getSlides(),
  getInfoCardsData(),
  getProducts()
])

export default async function Home() {
  return(

    <Container>
      <Navbar />
      <Header />
      <Slider data={slides} />
      <InfoCards data={infoCards} />
      <ProductGrid data={products}/>
    </Container>


  )
}
