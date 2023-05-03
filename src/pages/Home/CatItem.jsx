import bannerImg from "../../assets/banner.jpg";

const CatItem = () => {
  return (
    <div className="avatar">
      <div className="w-40 rounded-full">
        <img src={bannerImg} />
      </div>
    </div>
  );
};

export default CatItem;
