import Link from "next/link";
import { ProductType } from "../../../utils/types";
import {capitalizeFirstLetter} from "../../../utils/functions"
import StarRating from "../StarRating";
import ArrowIcon from "../ArrowIcon";






const CardSingle = ({name, price, category, stock, rating, image, id, simple}:ProductType)=> {
    return (
        <div className="w-[170px] md:w-2/12 mb-2 sm:m-4 md:mb-0 md:p-3 border-4 border-pt-secondary bg-white hover:border-blue-600 cursor-pointer">
        
          <img
            className="w-auto h-auto "
            src={image}
            alt={name}
          />
          <div>
            <h2 className="h2">{name}</h2>
            {simple && 
            <>
              {capitalizeFirstLetter(category)} 
            </>
            
            }
            <p className="">
            
            </p>
            <p>{(price * 10).toFixed(2)} SEK</p>


           
            {simple && 
            <>
             <p>{stock} left!</p>
              <StarRating rating={rating} />
              
            </>
            
            }
            <Link className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" href={`/products/${id}`}>
              View Details
              <ArrowIcon />
            </Link>
            
          </div>
        
      </div>
    )
}

export default CardSingle;

/* NEXT UI HEART
 <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
              
              */