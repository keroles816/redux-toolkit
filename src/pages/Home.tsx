import NavBar from "../components/NavBar.tsx";
import backgroundHomeImage from "../assets/photos/backgroundHomeImage.png";
import Dining from "../assets/photos/Dining.png";
import living from "../assets/photos/living.png";
import BedRoom from "../assets/photos/BedRoom.png";
const Home = () => {
  return (
    <div className=" min-w-full h-full">
      <NavBar />

      <section className="min-w-full ">
        <div
          className="bg-cover  bg-center h-screen flex  items-center md:relative"
          style={{ backgroundImage: `url(${backgroundHomeImage})` }}
        >
          <div
            className="md:absolute 
            md:right-10 md:top-1/2 md:transform md:-translate-y-1/2
            bg-lightPrimary
            rounded-md
            m-2
            "
          >
            <div className="px-8 py-8 md:px-10 md:py-10 max-w-xl">
              <p className=" font-poppins mt-2 md:mt-4 text-l md:text-xl">
                New Arrival
              </p>
              <h3 className=" font-poppins font-bold text-darkPrimary text-3xl md:text-5xl mt-2">
                Discover Our <br></br>New Collection
              </h3>

              <p className="font-poppins mt-4 text-meduim text-s md:text-l">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis
              </p>
              <button className="bg-primary  md:py-4 mt-6 py-3 px-6 md:px-8 shadow-md ">
                <p className="font-poppins text-white font-semiBold md:font-bold text-s md:text-l">
                  BUY NOW
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-8xl py-12">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-center font-poppins text-2xl font-bold ">
            Browse The Range
          </h3>
          <p className="font-poppins text-center font-light text-l md:text-xl mt-2 font-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex justify-center mt-8 gap-4 items-center ">
          <div className="flex flex-col justify-center items-center">
            <img src={Dining} alt="Dining" />
            <p className="text-center mt-2 font-semiBold text-xl">Dining</p>
          </div>

          <div className="flex flex-col justify-center">
            <img src={living} alt="Living" />
            <p className="text-center mt-2 font-semiBold text-xl">living</p>
          </div>

          <div className="flex flex-col justify-center">
            <img src={BedRoom} alt="BedRoom" />
            <p className="text-center mt-2 font-semiBold text-xl">Bedroom</p>
          </div>
        </div>
      </section>

      <section className="max-w-8xl flex justify-center items-center">
        <h3 className=" font-poppins text-2xl font-bold"> Our Products</h3>
        <div
          className="grid grid-col-3 justify-center items-center 
        gap-3
        "
        ></div>
      </section>
    </div>
  );
};

export default Home;
