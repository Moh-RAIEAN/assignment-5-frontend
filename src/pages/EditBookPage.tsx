import BookForm from "../components/view/BookForm";

export default function EditBookPage() {
  const defaultValues = {
    title: "book1",
    author: "hasib",
    genre: "fantasy",
    publicationYear: "2020",
  };
  return <BookForm defaultFormValues={defaultValues} />;
}
