/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const ChefsPage = () => {
  return <div>comming</div>;
};

export default ChefsPage;

export const loader = async () => {
  const chefs = await axios.get(
    "https://b7a10-chef-recipe-hunter-server-side-jobayer98.vercel.app/chefs"
  );
  console.log(chefs.data);
};
