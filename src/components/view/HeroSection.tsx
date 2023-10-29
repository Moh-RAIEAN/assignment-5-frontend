import heroImage from "../../assets/heroimage-min.jpg";

export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Bookshelf Treasures</h1>
          <p className="mb-5">
            <b>Discover</b> Your Next Adventure, <b>Discover</b> Your Next
            Read!: Explore Our Book Catalog
          </p>
          <button className="btn btn-outline uppercase">view all books</button>
        </div>
      </div>
    </div>
  );
}
