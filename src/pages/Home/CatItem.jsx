/* eslint-disable react/prop-types */
const CatItem = ({ img, label }) => {
  return (
    <div className="avatar flex-col items-center cursor-pointer">
      <div className="w-48 rounded-full">
        <img src={img} />
      </div>
      <h2 className="text-xl font-semibold mt-4">{label}</h2>
    </div>
  );
};

export default CatItem;
