/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import DetailsCard from "./DetailsCard";

const ChefDetails = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-4 gap-12 p-6 mx-12 my-12 border-2 shadow">
        <div className="col-span-2">
          <img className="h-72 w-full" src={data.photo} alt={data.name} />
        </div>
        <div className="col-span-2 text-slate-600 flex flex-col gap-2">
          <h2 className="text-md font-semibold">Name: {data.name}</h2>
          <p className="max-w-[100%] text-justify">
            <span className="text-md font-semibold">Bio: </span> {data.name} is
            an award-winning chef with over 20 years of experience in the
            culinary industry. She trained at the prestigious Le Cordon Bleu in
            Paris and has worked in some of the world most renowned restaurants,
            including The French Laundry and Per Se in New York City.{data.name}{" "}
            cooking style is influenced by her French training and her passion
            for using local, seasonal ingredients. Her dishes are known for
            their elegance and attention to detail, and she has been praised for
            her ability to balance flavors and textures in a way that highlights
            the natural qualities of each ingredient.
          </p>
          <p className="flex items-center gap-2">
            <BiLike className="text-2xl" />: 65
          </p>
          <p>
            <span className="text-md font-semibold">Number of Recipe: </span>
            {data.numOfRecipes}
          </p>
          <p>
            <span className="text-md font-semibold">Experience: </span>
            {data.experience} years
          </p>
        </div>
      </div>

      {/* chef recipes */}
      <div className="grid grid-cols-2 gap-16 justify-items-center mx-16">
        {data.recipes.map((recipe) => (
          <DetailsCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default ChefDetails;

export const loader = async ({ params }) => {
  const id = params.chefId;
  const chefData = await axios.get(
    `https://b7a10-chef-recipe-hunter-server-side-jobayer98-5wh18qroh.vercel.app/chefs/${id}`
  );

  return chefData.data;
};
