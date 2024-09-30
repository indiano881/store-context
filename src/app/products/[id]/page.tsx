"use client"

import Link from "next/link";
import { capitalizeFirstLetter } from "../../../../utils/functions";
import { useEffect, useState } from "react";
import StarRating from "@/components/StarRating";
import ArrowIcon from "@/components/ArrowIcon";





const SingleProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);

  
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  const { title, price, category, stock, rating, thumbnail, image, shippingInformation, warrantyInformation, description } = product;

  return (
    <div className=" m-8 border-8 border-pt-secondary bg-white hover:blue-600 flex  md:flex-row flex-col items-center">
      
        <img
          className="w-full sm:w-[60%]  h-auto basis-1/2"
          src={product.images[0]}
          alt={title}
        />
        <div className="bg-white w-full h-[100%] border-8 border-pt-primary basis-1/2 p-4">
          <h2 className="h2 text-black">{title}</h2>
          <p className="italic py-2">{capitalizeFirstLetter(category)}</p>
          
          <p className="py-2">Price: {(price * 10).toFixed(2)} SEK</p>
          <p className="py-2">In stock: {stock}</p>
          <p className="italic py-2 text-justify">{description}</p>
          <StarRating rating={rating} />
          <p className="py-2">{shippingInformation}</p>
          <p className="py-2">{warrantyInformation}</p>
         
        </div>
      </div>
    
  );
};

export default SingleProduct;
/*name: string,
    category: string,
    description: string,
    shippingInformation: string,
    warrantyInformation: string,
    
    reviews?: string,
    simple: boolean*/