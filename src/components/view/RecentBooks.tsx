import BookCard from "./BookCard";

export default function RecentBooks() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="px-3 py-4">
      <h2 className="text-3xl font-bold text-center mb-3">Recent Books</h2>
      <div className="grid grid-cols-4 gap-3">
        {books.map((book) => (
          <BookCard key={book} />
        ))}
      </div>
    </div>
  );
}
