/* eslint-disable no-unused-vars */
import Banner from "./Banner";
import CatSection from "./CatSection";
import ChefSection from "./ChefSection";
import RecipeSection from "./RecipeSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ChefSection />
      <CatSection />
      <RecipeSection />
    </>
  );
};

export default HomePage;
