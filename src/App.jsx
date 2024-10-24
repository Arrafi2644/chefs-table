import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/Our Recipes/OurRecipes";

export default function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  )
}