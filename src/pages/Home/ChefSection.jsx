import Chef from "../../components/Chefs/Chef";
import useFetch from "../../hooks/useFetch";

const ChefSection = () => {
  const { data } = useFetch(
    "https://b7a10-chef-recipe-hunter-server-side-jobayer98-5wh18qroh.vercel.app/chefs"
  );
  return (
    <section className="my-24 px-24">
      <h1 className="text-5xl font-bold text-center">Our Chefs</h1>
      <div className="grid grid-cols-3 gap-12 mt-8">
        {data.slice(0, 6).map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </section>
  );
};

export default ChefSection;
