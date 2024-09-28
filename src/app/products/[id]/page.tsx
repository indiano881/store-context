"use client"

import Link from "next/link";
import { capitalizeFirstLetter, fetchData } from "../../../../utils/functions";
import { Dispatch, useEffect, useState } from "react";
import StarRating from "@/components/StarRating";
import ArrowIcon from "@/components/ArrowIcon";


const SingleProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);

  
  useEffect(() => {
    fetchData(`https://dummyjson.com/products/${id}`,setProduct)
    
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  const { name, price, category, stock, rating, thumbnail } = product;

  return (
    <div className="w-full md:w-2/12 m-4 md:mb-0 md:p-3 border-4 border-pt-primary hover:border-pt-secondary cursor-pointer">
      <div>
        <img
          className="w-full h-auto max-w-[550px] max-h-[251px]"
          src={thumbnail}
          alt={name}
        />
        <div>
          <h2 className="h2">{name}</h2>
          <p>{capitalizeFirstLetter(category)}</p>
          <p>Price: {(price * 10).toFixed(2)} SEK</p>
          <p>{stock} left!</p>
          <StarRating rating={rating} />
          <Link
            className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer"
            href={`/products/${id}`}
          >
            View Details
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


