/* eslint-disable react/no-unescaped-entities */
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            It is even better than an expensive cookery book
          </h1>
          <p className="mt-4 text-xl">
            Learn how to make your favorite restaurant's dishes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
