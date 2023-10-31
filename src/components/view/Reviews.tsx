import AddReviewForm from "../ui/AddReviewForm";
import Review from "../ui/Review";

export default function Reviews() {
  const reviews = [1, 2, 3, 4, 5];
  return (
    <div>
      <AddReviewForm />
      {reviews.map((review) => (
        <Review key={review} />
      ))}
    </div>
  );
}
