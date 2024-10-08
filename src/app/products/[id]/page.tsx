"use client";

import Link from "next/link";
import { capitalizeFirstLetter } from "../../../../utils/functions";
import { useEffect, useState } from "react";
import StarRating from "@/components/StarRating";
import { useUserContext } from "../../../../utils/contexts";
import { UserContextType } from "../../../../utils/types";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const { user, setUser } = useUserContext() as UserContextType;

  const { id } = params;
  const [product, setProduct] = useState<any>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    
    if (user) {
      setIsInWishlist(user.saveditems.includes(id));
    }
  }, [user, id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const {
    title,
    price,
    category,
    stock,
    rating,
    images,
    shippingInformation,
    warrantyInformation,
    description,
  } = product;

  const handleWishlistToggle = () => {
    if (user) {
      const updatedSavedItems = isInWishlist
        ? user.saveditems.filter((itemId) => itemId !== id) // Remove item
        : [...user.saveditems, id]; // Add item

      setUser({
        ...user,
        saveditems: updatedSavedItems,
      });

      // Toggle wishlist state
      setIsInWishlist(!isInWishlist);
    }
  };

  return (
    <div className="m-8 border-8 border-pt-secondary bg-white hover:blue-600 flex md:flex-row flex-col items-center">
      <img
        className="w-full sm:w-[60%] h-auto basis-1/2"
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
        <div className="flex flex-col">
          <p
            className="rounded-full border-2 border-pt-primary py-1 px-6 max-w-[180px] bg-pt-secondary hover:bg-pt-primary text-white mb-4 text-center cursor-pointer"
            onClick={handleWishlistToggle}
          >
            {isInWishlist ? "Remove from Wishlist" : "Save in Wishlist"}
          </p>
          <Link
            href={"/mycategory"}
            className="rounded-full border-2 border-pt-primary py-1 px-6 max-w-[180px] bg-pt-secondary hover:bg-pt-primary text-white text-center"
          >
            Back My Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
