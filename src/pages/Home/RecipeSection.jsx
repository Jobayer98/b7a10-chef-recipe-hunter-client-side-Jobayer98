import useFetch from "../../hooks/useFetch";
import Recipe from "../../components/Recipe/Recipe";

const RecipeSection = () => {
  const { data } = useFetch(
    "https://b7a10-chef-recipe-hunter-server-side-jobayer98.vercel.app/recipes"
  );
  return (
    <section className="my-24 px-24">
      <h1 className="text-5xl font-bold text-center">Latest Recipes</h1>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12 mt-8">
        {data.slice(0, 6).map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;
