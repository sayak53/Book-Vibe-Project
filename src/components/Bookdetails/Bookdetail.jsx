import { useLoaderData, useParams } from "react-router-dom";

const Bookdetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    review,
    rating,
    publisher,
    totalPages,
    yearOfPublishing,
    image,
    bookName,
    author,
    category,
    tags,
  } = book;

  return (
    <div className="mt-4 mb-8">
      <div className="lg:flex lg:justify-evenly gap-6 md:space-y-4 space-y-5">
        <img className="md:h-[700px] w-[550px]" src={image} alt="" />
        <div className="space-y-5">
          <h1>{bookName}</h1>
          <p>By: {author}</p>
          <p>{category}</p>
          <p>{review}</p>
          <p>{tags.map((tag,index) => (
            <button key={index} className="btn btn-sm text-green-700">{tag}</button>
          ))}</p>
          <p>Number of pages: {totalPages}</p>
          <p>Publisher:{publisher}</p>
          <p>Year of Publishing:{yearOfPublishing}</p>
          <p>Rating:{rating}</p>
         <div className="space-x-4">
         <button className="btn">Mark As Read</button>
         <button className="btn">Add to Wishlist</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetail;
