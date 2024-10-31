const Book = ({ book }) => {
  const {
    bookName,
    image,
    author,
    rating,
    category,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className="card bg-base-100 shadow-xl w-[90%] rounded-xl p-6">
      <figure className="bg-gray-300 p-8 rounded-lg">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-3">
        <div className="flex gap-3">
          {tags.map((tag) => (
            <button className="btn btn-sm text-green-700">{tag}</button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="divider"></div>
        <div className="card-actions justify-between">
          <div className="text-xl">{category}</div>
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
