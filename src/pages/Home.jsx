import bannerImg from "../assets/banner.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HomePage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <div className="my-16 pb-6">
        <h2 className="text-center mb-6 text-4xl font-bold">Our Chefs</h2>
        <div className="flex justify-center gap-12">
          <div className="avatar">
            <div className="w-40 rounded-full">
              <img src={bannerImg} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-40 rounded-full">
              <img src={bannerImg} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-40 rounded-full">
              <img src={bannerImg} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-40 rounded-full">
              <img src={bannerImg} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-40 rounded-full">
              <img src={bannerImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
