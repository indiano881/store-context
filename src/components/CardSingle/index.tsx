import Link from "next/link";
import { ProductType } from "../../../utils/types";
import {capitalizeFirstLetter} from "../../../utils/functions"
const StarRating = ({ rating}:{rating:number}) => {
  // Create an array of stars based on the rating
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push("★"); // Filled star
    } else {
      stars.push("☆"); // Empty star
    }
  }

  return <p >Rating: <span className="text-pt-secondary">{stars.join(' ')}</span></p>;
};



const ArrowIcon = () => (
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );

const CardSingle = ({name, price, category, stock, rating, image}:ProductType)=> {
    return (
        <div className="w-full md:w-2/12 m-4 md:mb-0 md:p-3 border-4 border-pt-primary hover:border-pt-secondary cursor-pointer">
        <div>
          <img
            className="w-full h-auto max-w-[550px] max-h-[251px]"
            src={image}
            alt={name}
          />
          <div>
            <h2 className="h2">{name}</h2>
            <p className="">
            {capitalizeFirstLetter(category)} 
            </p>
            <p>Price: {(price * 10).toFixed(2)} SEK</p>


            <p>{stock} left!</p>
            <StarRating rating={rating} />
            <Link className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" href={""}>
              View Details
              <ArrowIcon />
            </Link>
          </div>
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