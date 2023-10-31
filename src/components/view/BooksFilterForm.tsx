import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type IBookFilters = {
  searchTerm?: string;
  publicationYear?: string;
  genre?: string;
};
export default function BooksFilterForm() {
  const navigte = useNavigate();
  const { handleSubmit, watch, register } = useForm<IBookFilters>({
    defaultValues: {
      searchTerm: "",
      publicationYear: "",
      genre: "",
    },
  });
  const handleFilters: SubmitHandler<IBookFilters> = (data) => {
    console.log(data);
  };

  const whatchFields = watch();
  console.log(whatchFields);

  return (
    <div className="min-w-[200px] lg:min-w-[300px] sticky top-0">
      <h3 className="text-3xl font-bold mb-3">Filter Books :</h3>
      <form
        className="flex flex-col gap-3 flex-wrap lg:flex-nowrap"
        onSubmit={handleSubmit(handleFilters)}
      >
        <div className="join">
          <input
            type="text"
            placeholder="Search books..."
            {...register("searchTerm")}
            className="input input-bordered input-sm w-full join-item"
          />
          <button className="btn btn-sm btn-outline font-bold join-item">
            search
          </button>
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Publication Year"
            {...register("publicationYear")}
            className="input input-bordered input-sm w-full"
          />
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            {...register("genre")}
          >
            <option value={""} disabled>
              Select Genre
            </option>
            <option value={"Han Solo"}>Han Solo</option>
            <option value={"Greedo"}>Greedo</option>
          </select>
        </div>
      </form>
      <div className="divider">OR</div>
      <button
        className="btn btn-block bg-[#A6ADBA] text-[#1D232A] hover:bg-[#1D232A] hover:text-[#A6ADBA]"
        onClick={() => navigte("/add-book")}
      >
        Add Book
      </button>
    </div>
  );
}
