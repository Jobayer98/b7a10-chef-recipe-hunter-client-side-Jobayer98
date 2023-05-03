
const Chef = () => {
  return (
    <div className="w-72 h-[350px]  border-[1px] flex flex-col items-center rounded-lg">
      <div className="avatar py-4">
        <div className="w-40 rounded-full">
          <img
            src="https://chefin.com.au/wp-content/uploads/2021/02/chef-hemant-dadlani-profile-1-833x1024.jpg"
            alt="chef"
          />
        </div>
      </div>
      {/* card body */}
      <div className="border-t-[.5px] w-full px-6 pt-4">
        <h2 className="card-title mb-1">Name: John Doe</h2>
        <p>
          <span className="font-semibold">Experience:</span> 20 years
        </p>
        <p>
          <span className="font-semibold">Number of Recipe:</span> 30
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
}

export default Chef