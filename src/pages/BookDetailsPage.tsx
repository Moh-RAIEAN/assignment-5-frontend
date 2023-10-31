import { useNavigate } from "react-router-dom";
import Reviews from "../components/view/Reviews";

export default function BookDetailsPage() {
  const navigte = useNavigate();
  return (
    <div className="p-3">
      <div className="flex gap-3">
        <figure className="max-w-md">
          <img
            src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=1512&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shoes"
          />
        </figure>
        <div>
          <h1 className="text-3xl font-bold">Book title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolorem consequuntur eaque repudiandae autem. Officiis at tenetur
            totam error quis nesciunt vel necessitatibus velit praesentium quam
            sed ratione exercitationem, voluptates optio recusandae, harum
            quidem incidunt, omnis minus. Voluptatum velit, sapiente,
            consequuntur suscipit debitis quas numquam aspernatur quidem odio
            nemo deserunt?
          </p>
          <p className="font-bold">Author: author name</p>
          <p>genre</p>
          <p>ratings</p>
          <p>publication date</p>
          <div className="flex gap-3 mt-3">
            {" "}
            <button
              onClick={() => navigte("/book/edit/1")}
              className="btn btn-sm btn-outline"
            >
              Edit
            </button>
            <button className="btn btn-sm btn-error">Delete</button>
          </div>
        </div>
      </div>
      <hr className="mt-3" />
      <div>
        <h2 className="text-xl font-bold">Reviews:</h2>
        <Reviews />
      </div>
    </div>
  );
}
