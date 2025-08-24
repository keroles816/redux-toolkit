import Share from "../assets/Icons/Share.png"
import like from "../assets/Icons/like.png"
import compare from "../assets/Icons/compare.png"

const FurnitureItem = ({ item }) => {
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      <div className="bg-[#F4F5F7] group relative overflow-hidden pb-6 rounded-l shadow-l">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-[285px] h-[301px] max-sm:mx-auto object-cover"
        />
        <div className="p-3">
          <p className="font-poppins text-l font-semiBold">{item.title}</p>
          <p
            className="font-poppins font-meduim mt-2
          text-[#898989]
          color-[#898989] text-s"
          >
            {item.description.length > 100
              ? item.description.slice(1, 100) + "..."
              : item.description}
          </p>
          <p className="font-poppins mt-4 text-l font-semiBold ">
            EGY:{item.price}
          </p>


        </div>  
        
          <div className=" absolute opacity-0 
            bg-[#3A3A3A]  bg-opacity-50  group-hover:opacity-100 
            group-hover:translate-y-0
            overflow-hidden
            group-hover:h-full
            flex flex-col justify-center items-center
          bottom-0 left-0 w-full h-full
           translate-y-full transition-all duration-500
           ">

            <div className="flex flex-col justify-center">

              <button className="bg-white
                font-poppins
                text-l
                font-semiBold
              text-primary
              px-12 py-2
              rounded-sm
              shadow-l
              mx-auto
              "> 
              Add to Cart
              </button>


                <div className="flex flex-row 
                gap-4 justify-center items-center
                mt-2
                ">

                <button className="flex justify-center gap-2 items-center">
                  <img src={Share} 
                  alt="love"
                 className="w-[1rem] h-[1rem]"
                  h-
                
                  />
                  <p className="font-poppins text-xl
                  text-white
                  font-poppins
                  font-semiBold">
                    Share</p>
                </button>

                    
                <button className="flex justify-center gap-1 items-center">
                  <img src={compare} 
                  alt="love"
                 className="w-[1rem] h-[1rem]"
                  
                
                  />
                  <p className="font-poppins text-xl
                  text-white
                  font-poppins
                  font-semiBold">
                    Compare</p>
                </button>


                <button className="flex justify-center gap-1 items-center">
                  <img src={like} 
                  alt="love"
                 className="w-[1rem] h-[1rem]"
                  />

                  <p className="font-poppins text-xl
                  text-white
                  font-poppins
                  font-semiBold">
                    Like</p>
                </button>

                

                </div>

            </div>

          </div>


      </div>

    </div>
  );
};
export default FurnitureItem;
