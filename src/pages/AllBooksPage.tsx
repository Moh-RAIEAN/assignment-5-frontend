import Link from "../components/ui/Link";
import BookCard from "../components/view/BookCard";
import BooksFilterForm from "../components/view/BooksFilterForm";

export default function AllBooksPage() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="flex gap-3 px-3 py-8 bg-base-300">
      <BooksFilterForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {books.map((book) => (
          <Link navigateTo={`/book/${book}`} key={book}>
            <BookCard />
          </Link>
        ))}
      </div>
    </div>
  );
}
