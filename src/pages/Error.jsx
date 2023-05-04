import Header from "../layout/Header/Header";
import errorImg from "../assets/error-404.jpg";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${errorImg})`,
        }}
      ></div>
    </>
  );
};

export default ErrorPage;
