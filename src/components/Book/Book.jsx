import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookName,
    image,
    author,
    category,
    tags,
    bookId
  } = book;
  return (
    <div className="card bg-base-100 shadow-xl w-[90%] rounded-xl p-6">
      <figure className="bg-gray-300 p-8 rounded-lg">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-3">
        <div className="flex gap-3">
          {tags.map((tag,index) => (
            <button key={index} className="btn btn-sm text-green-700">{tag}</button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="divider"></div>
        <div className="card-actions justify-between items-center">
          <div className="text-xl">{category}</div>
          <div>
            <button className="btn bg-gray-300"><Link to={`/books/${bookId}`}>Read More</Link></button>
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
