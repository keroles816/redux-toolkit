import NavBar from "../components/NavBar.tsx";
import backgroundHomeImage from "../assets/photos/backgroundHomeImage.png";
const Home = () => {
  return (
    <div className=" min-w-full h-full">
      <NavBar />

      <section className="min-w-full">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${backgroundHomeImage})` }}
        ></div>
      </section>
    </div>
  );
};

export default Home;
