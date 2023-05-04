/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Recipe = ({ recipe }) => {
  return (
    <div className=" border-[1px] flex flex-col items-center rounded-lg">
      <div className="w-full">
        <img
          className="h-64 w-full rounded-t-lg"
          src={recipe.image}
          alt="chef"
        />
      </div>

      <div className="mt-6 ml-4 flex-1">
        <div>
          <h2 className="text-xl font-semibold">{recipe.title}</h2>
          <p className="mt-1">
            <Rating
              className="text-yellow-400"
              placeholderRating={4.6}
              readonly
              emptySymbol={<AiOutlineStar />}
              placeholderSymbol={<AiFillStar />}
              fullSymbol={<AiFillStar />}
            />
          </p>
          <p className="mt-4">{recipe.description.slice(0, 120)}</p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?cs=srgb&dl=pexels-miquel-ferran-gomez-figueroa-3814446.jpg&fm=jpg"
            alt="chef"
          />
          <p>
            <span className="text-gray-400">By</span> John Doe
          </p>
        </div>
      </div>

      <div className="my-4">
        <a
          className="text-slate-500 hover:underline hover:text-green-800"
          href="#"
        >
          View Recipes
        </a>
        {/* card body */}
      </div>
    </div>
  );
};

export default Recipe;
