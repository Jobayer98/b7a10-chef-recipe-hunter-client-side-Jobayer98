/* eslint-disable no-unused-vars */
import img1 from "../../assets/food/img1.jpg";
import img2 from "../../assets/food/img2.jpg";
import img3 from "../../assets/food/img3.jpg";
import img4 from "../../assets/food/img4.jpg";
import img6 from "../../assets/food/img5.jpg";
import CatItem from "./CatItem";

const CatSection = () => {
  return (
    <section className="my-24 px-24">
      <h1 className="text-5xl font-bold text-center ">Category</h1>
      <div className="flex justify-center gap-8 mt-8">
        <CatItem img={img1} label="Pizza" />
        <CatItem img={img2} label="Chicken" />
        <CatItem img={img3} label="Beef" />
        <CatItem img={img4} label="Dessert" />
        <CatItem img={img6} label="Vegetarian" />
      </div>
    </section>
  );
};

export default CatSection;
