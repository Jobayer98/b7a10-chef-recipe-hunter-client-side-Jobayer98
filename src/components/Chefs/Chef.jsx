/* eslint-disable react/prop-types */
const Chef = ({ chef }) => {
  return (
    <div className="w-72 h-[350px]  border-[1px] flex flex-col items-center rounded-lg">
      <div className="avatar py-4">
        <div className="w-40 rounded-full">
          <img src={chef?.photo} alt="chef" />
        </div>
      </div>
      {/* card body */}
      <div className="border-t-[.5px] w-full px-6 pt-4">
        <h2 className="card-title mb-1">Name: {chef?.name}</h2>
        <p>
          <span className="font-semibold">Experience:</span> {chef?.experience}{" "}
          years
        </p>
        <p>
          <span className="font-semibold">Number of Recipe:</span>{" "}
          {chef?.numOfRecipes}
        </p>
        <div className="mt-4">
          <a
            className="text-slate-500 hover:underline hover:text-green-800"
            href="#"
          >
            View Recipes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chef;
