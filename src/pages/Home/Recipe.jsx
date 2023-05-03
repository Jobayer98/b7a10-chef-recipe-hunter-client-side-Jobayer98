const Recipe = () => {
  return (
    <div className="w-80  border-[1px] flex flex-col items-center rounded-lg">
      <div className="w-full">
        <img
          className="h-64 w-full"
          src="https://chefin.com.au/wp-content/uploads/2021/02/chef-hemant-dadlani-profile-1-833x1024.jpg"
          alt="chef"
        />
      </div>

      <div>
        <div>
          <h2>Name</h2>
          <p>Rating</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            aspernatur.
          </p>
        </div>
        <div>
          <img src="" alt="chef" />
          <p>name</p>
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
