import NavBar from "../components/NavBar.tsx";
import backgroundHomeImage from "../assets/photos/backgroundHomeImage.png";
const Home = () => {
  return (
    <div className=" min-w-full h-full">
      <NavBar />

      <section className="min-w-full">
        <div
          className="bg-cover bg-center h-screen relative"
          style={{ backgroundImage: `url(${backgroundHomeImage})` }}
        >
          <div
            className="absolute 
           right-10 top-1/2 transform -translate-y-1/2
            bg-lightPrimary"
          >
            <div className="px-8 py-8 max-w-3xl">
              <p className=" font-poppins  text-xl">New Arrival</p>
              <h3 className=" font-poppins font-bold text-darkPrimary text-5xl mt-2">
                Discover Our <br></br>New Collection
              </h3>

              <p className="font-poppins mt-4 text-meduim text-l">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
