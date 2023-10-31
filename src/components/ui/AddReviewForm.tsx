import { SubmitHandler, useForm } from "react-hook-form";

type IReviewFormValue = {
  review: string;
};
export default function AddReviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewFormValue>();
  const handleCreateReview: SubmitHandler<IReviewFormValue> = (data) =>
    console.log(data);

  return (
    <form
      className="join w-full my-3"
      onSubmit={handleSubmit(handleCreateReview)}
    >
      <input
        type="text"
        id="review"
        className={`input input-bordered w-1/2 join-item ${
          errors.review && "input-error"
        }`}
        placeholder="Add a review"
        {...register("review", { required: true })}
      />
      <button
        type="submit"
        className="btn bg-[#A6ADBA] text-[#15191E] hover:bg-[#A6ADBA] join-item"
      >
        Add
      </button>
    </form>
  );
}
