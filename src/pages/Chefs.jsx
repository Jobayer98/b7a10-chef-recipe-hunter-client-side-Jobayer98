/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Chef from "../components/Chefs/Chef";

const ChefsPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((chef) => (
        <Chef key={chef.id} chef={chef} />
      ))}
    </div>
  );
};

export default ChefsPage;

export const loader = async () => {
  const chefs = await axios.get(
    "https://b7a10-chef-recipe-hunter-server-side-jobayer98.vercel.app/chefs"
  );
  return chefs.data;
};
