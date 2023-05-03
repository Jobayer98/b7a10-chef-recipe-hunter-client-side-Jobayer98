import Chef from "./Home/Chef";
import Recipe from "./Home/Recipe";
import Banner from "./Home/Banner";
import CatItem from "./Home/CatItem";

const HomePage = () => {
  return (
    <>
      <Banner />

      <section className="my-24 px-24">
        <h1 className="text-4xl font-bold text-center">Our Chefs</h1>
        <div className="flex justify-center gap-8 mt-8">
          <Chef />
          <Chef />
          <Chef />
          <Chef />
        </div>
      </section>

      <section className="my-24 px-24">
        <h1 className="text-5xl font-bold text-center">Latest Recipes</h1>
        <div className="grid grid-cols-3 gap-x-6 gap-y-12 mt-8">
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </section>

      <section className="my-24">
        <h2 className="text-center mb-6 text-4xl font-bold">
          Receipe Categories
        </h2>
        <div className="flex justify-center gap-12">
          <CatItem />
          <CatItem />
          <CatItem />
          <CatItem />
          <CatItem />
        </div>
      </section>
    </>
  );
};

export default HomePage;
