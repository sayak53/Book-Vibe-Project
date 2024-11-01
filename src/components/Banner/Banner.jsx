import bookimg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="w-[90%] mx-auto bg-gray-300 rounded-lg mt-8 mb-8 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookimg} className="w-[90%] lg:w-[60%]" />
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">
            Books are windows to new worlds, offering knowledge, stories, and
            endless possibilities within their pages. Books are timeless
            companions, offering wisdom and comfort, no matter the situation.{" "}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
