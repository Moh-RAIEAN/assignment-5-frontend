import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidBookReader } from "react-icons/bi";

type IBookData = {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
};

type IBookFormProps = {
  defaultFormValues?: IBookData;
};

export default function BookForm({ defaultFormValues }: IBookFormProps) {
  const defaultValues: IBookData = defaultFormValues
    ? defaultFormValues
    : { title: "", author: "", genre: "", publicationYear: "" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookData>({ defaultValues });
  const handleBook: SubmitHandler<IBookData> = (data) => console.log(data);

  return (
    <div className="grid place-items-center py-7">
      <div className="max-w-lg bg-base-100 px-3 py-10 rounded-lg border-2 border-[#383F47]">
        <div className="flex justify-center items-center">
          <div className="rounded-full border-2 border-[#383F47] p-3">
            <BiSolidBookReader className="text-6xl text-[#383F47]" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-center pb-5">
          Book Information Manager
        </h1>
        <form
          onSubmit={handleSubmit(handleBook)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="name">
              <span
                className={`label-text ${errors.title && "text-[#F87272]"}`}
              >
                Book Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Book Name"
              id="name"
              {...register("title", { required: true })}
              className={`input input-bordered input-sm w-full max-w-xs ${
                errors?.title && "input-error placeholder-[#F87272]"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="author">
              <span
                className={`label-text ${errors.author && "text-[#F87272]"}`}
              >
                Author
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Author Name"
              id="author"
              {...register("author", { required: true })}
              className={`input input-bordered input-sm w-full max-w-xs ${
                errors?.author && "input-error placeholder-[#F87272]"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="genre">
              <span
                className={`label-text ${errors.genre && "text-[#F87272]"}`}
              >
                Genre
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Genre"
              id="genre"
              {...register("genre", { required: true })}
              className={`input input-bordered input-sm w-full max-w-xs ${
                errors?.genre && "input-error placeholder-[#F87272]"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="publicationYear">
              <span
                className={`label-text ${
                  errors.publicationYear && "text-[#F87272]"
                }`}
              >
                Publication Year
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Publication Year"
              id="publicationYear"
              {...register("publicationYear", { required: true })}
              className={`input input-bordered input-sm w-full max-w-xs ${
                errors?.publicationYear && "input-error placeholder-[#F87272]"
              }`}
            />
          </div>
          <div className="form-control w-full col-span-2">
            <button className="btn btn-outline btn-sm mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
