import Navbar from "../common/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Welcome Home
        </h1>
      </div>
    </div>
  );
}

export default Home;