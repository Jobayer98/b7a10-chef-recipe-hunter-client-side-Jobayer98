/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div className="w-72 h-[350px]  border-[1px] flex flex-col items-center rounded-lg">
      <div className="avatar py-4">
        <div className="w-40 rounded-full">
          <img src={chef.photo} alt="chef" />
        </div>
      </div>
      {/* card body */}
      <div className="border-t-[.5px] w-full pt-4">
        <div className="px-6">
          <h2 className="card-title mb-1">Name: {chef.name}</h2>
          <p>
            <span className="font-semibold">Experience:</span> {chef.experience}{" "}
            years
          </p>
          <p>
            <span className="font-semibold">Number of Recipe:</span>{" "}
            {chef.numOfRecipes}
          </p>
        </div>
        <div className="w-full mt-4 px-6 pt-2 flex justify-between items-center border-t">
          <span>
            {isLike ? (
              <AiFillLike
                onClick={handleLike}
                className="text-xl text-green-600"
              />
            ) : (
              <AiOutlineLike onClick={handleLike} className="text-xl" />
            )}
          </span>
          <Link
            to={`/chefs/${chef.id}`}
            className="text-slate-500 hover:underline hover:text-green-800"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
