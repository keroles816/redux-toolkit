 const FurnitureItem = ( {item} ) => {


       return( 

        <div className="flex flex-col justify-center items-center"> 
       <img src={item.images[0]} 
       alt={item.title}
        className="max-md:w-[285px] max-md:h-[301px] object-cover"
       />
    
    
    </div>
    )



};
export default FurnitureItem;
