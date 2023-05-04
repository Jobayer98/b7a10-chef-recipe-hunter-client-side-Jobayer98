/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Recipe from "../components/Recipe/Recipe";

const RecipePage = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-8 px-12 my-12 justify-center">
      {data.map((item) => (
        <Recipe key={item.id} recipe={item} />
      ))}
    </div>
  );
};

export default RecipePage;

export const loader = async () => {
  const recipes = await axios.get(
    "https://b7a10-chef-recipe-hunter-server-side-jobayer98.vercel.app/recipes"
  );
  return recipes.data;
};
