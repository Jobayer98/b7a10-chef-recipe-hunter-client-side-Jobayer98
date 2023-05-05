import Chef from "../../components/Chefs/Chef";
import useFetch from "../../hooks/useFetch";

const ChefSection = () => {
  const { data } = useFetch(
    "https://b7a10-chef-recipe-hunter-server-side-jobayer98-5wh18qroh.vercel.app/chefs"
  );
  return (
    <section className="my-24 px-4 md:px-8 lg:px-24">
      <h1 className="text-5xl font-bold text-center">Our Chefs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-12 gap-12 mt-8 justify-items-center">
        {data.slice(4, 10).map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </section>
  );
};

export default ChefSection;
