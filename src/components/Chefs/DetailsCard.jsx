/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import Rating from "react-rating";

const DetailsCard = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
    if (!isFav) {
      toast.success("Add to Favorite");
    }
  };

  return (
    <div className="border-[1px] flex flex-col items-center rounded-lg">
      <div className="w-full">
        <img
          className="h-64 w-full rounded-t-lg"
          src={recipe.image}
          alt="chef"
        />
      </div>

      <div className="mt-6 mx-4 px-2 flex-1">
        <div>
          <h2 className="text-xl font-semibold">{recipe.title}</h2>
          <p className="mt-2 flex justify-between">
            <Rating
              className="text-yellow-400"
              placeholderRating={4.5}
              readonly
              emptySymbol={<AiOutlineStar />}
              placeholderSymbol={<AiFillStar />}
              fullSymbol={<AiFillStar />}
            />

            <span className="mr-6">
              {isFav ? (
                <MdOutlineFavorite
                  onClick={handleFav}
                  className="text-xl text-red-500"
                />
              ) : (
                <MdOutlineFavoriteBorder
                  onClick={handleFav}
                  className="text-xl"
                />
              )}
            </span>
            <Toaster />
          </p>
          <div className="mt-4">
            <p>
              <span className="font-semibold">Difficulty: </span>{" "}
              {recipe.difficulty}
            </p>
            <p>
              <span className="font-semibold">Time: </span>
              {recipe.time}
            </p>
            <p>
              <span className="font-semibold">Portion: </span>
              {recipe.portion}
            </p>
          </div>
          <div>
            <p className="font-semibold mt-4">Ingredients list:</p>
            <ul className="list-disc ml-8">
              <li>{recipe.ingredients[0]}</li>
              <li>{recipe.ingredients[1]}</li>
              <li>{recipe.ingredients[2]}</li>
              <li>{recipe.ingredients[3]}</li>
              <li>{recipe.ingredients[4]}</li>
            </ul>
          </div>
          <div className="mb-12 mt-4">
            <ul>
              <li>
                <span className="font-semibold">Step-1 : </span>{" "}
                {recipe.method[0]["Step 1"]}
              </li>
              <li>
                <span className="font-semibold">Step-2 : </span>
                {recipe.method[1]["Step 2"]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
