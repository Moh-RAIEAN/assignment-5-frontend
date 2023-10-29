export default function BookCard() {
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=1512&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Book name</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">Read Now</button>
        </div>
      </div>
    </div>
  );
}
