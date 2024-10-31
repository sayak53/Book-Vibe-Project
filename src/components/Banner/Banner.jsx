import bookimg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="w-[90%] mx-auto bg-gray-300 rounded-lg mt-8 mb-8 p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bookimg}
            className="w-[90%]" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;