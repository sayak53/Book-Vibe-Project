import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const[books,setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="mt-8 mb-8">
            <p className="text-4xl text-center font-bold">Books:{books.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6 mt-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;