import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const books = [
  {
    id: 1,
    image: "",
    title: "Change by Design",
    author: "Allie Wells",
    rating: "4.5/5",
  },
  {
    id: 2,
    image: "",
    title: "Let me Penal you in",
    author: "Cora Mack",
    rating: "4.5/5",
  },
  {
    id: 3,
    image: "",
    title: "Ethereum",
    author: "Chase Thornton",
    rating: "4.5/5",
  },
  {
    id: 4,
    image: "",
    title: "Applied AI",
    author: "Francis Salazar",
    rating: "4.5/5",
  },
  {
    id: 5,
    image: "",
    title: "Unlimited Memory",
    author: "Delta Fowler",
    rating: "4.5/5",
  },
];

const userBooks = [
  {
    id: 1,
    image: "",
    title: "Super-Modified",
    author: "Ash Maurya",
    rating: "4.5/5",
    category: "Design & UX",
     period: 11,
    user: "Manuel Blake",
    stdID:"12141",
    returnDate: "2024-07-15",
  },
  {
    id: 2,
    image: "",
    title: "Scaling Lean",
    author: "Ash Maurya",
    rating: "4.5/5",
    category: "Design & UX",
    period: 16,
    user: "Manuel Blake",
    stdID:"12141",
    returnDate: "N/A",
  },
  {
    id: 3,
    image: "",
    title: "The Zero Marginal Cost Society",
    author: "Michael C. Feathers",
    rating: "3.5/5",
    category: "Programming",
    period: 10,
    user: "Manuel Blake",
    stdID:"12141",
    returnDate: "2024-07-10",
  },
  {
    id: 4,
    image: "",
    title: "Working Effectively",
    author: "Michael C. Feathers",
    rating: "4.5/5",
    category: "Business",
    period: 6,
    user: "Margaret Powers",
    stdID:"12141",
    returnDate: "2024-07-18",
  },
];

const BorrowBooks = () => {
  const currentDate:any = new Date();

  return (
    <div className="p-6 bg-gray-100  min-h-screen">
    <div className="bg-white p-4 lg:mt-16 mt-10 rounded-lg shadow-md overflow-x-auto">
    <h1 className="text-2xl mb-8">🎯Borrow Book List: {userBooks.length}</h1>
      <table className="w-full border-collapse">
        <thead>
        <tr className="text-left border-b">
          <th className="p-2">ID</th>
          <th className="p-2">Image</th>
          <th className="p-2">Title</th>
          <th className="p-2">Student Name</th>
          <th className="p-2">Student ID</th>
          <th className="p-2">Return Date</th>
          <th className="p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>
        </thead>
        <tbody>
        {userBooks.map((book) => {
          const returnDate:any = new Date(book.returnDate);
          const diffDays =
            (returnDate - currentDate) / (1000 * 60 * 60 * 24);
          const isEmergency = !isNaN(returnDate) && diffDays < -14;

          return (
            <tr
            key={book.id}
            className={`border-b ${isEmergency ? "bg-red-200" : ""}`}
            >
            <td className="p-2">{book.id}</td>
            <td className="p-2">
              <Image
               height={50}
               width={50}
                src={book.image}
                alt={book.title}
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="p-2">{book.title}</td>
            <td className="p-2">{book.user || "N/A"}</td>
            <td className="p-2">{book.stdID}</td>
            <td className="p-2">{book.returnDate} </td>
            <td className={`p-2 ${book.period > 10 ? "text-red-500 lg:font-bold" : ""}`}>
              {book.period > 10 ? `${book.period} days/ Date Over` : `${book.period} Days`}
            </td>
            <td className="p-2">
              {!book.user && (
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                {book.period}
                </button>
              )}
              {book.user && (
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                Return
                </button>
              )}
            </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-3">Recommended Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                height={200}
                width={200}
                src={book.image}
                alt={book.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-md font-semibold mt-2">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm font-bold">{book.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowBooks;
