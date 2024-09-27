"use client";


import { fetchData } from "../../utils/functions";
import { useEffect, useState } from "react";
import CardSingle from "@/components/CardSingle";
import { useUserContext } from "../../utils/contexts";
import { UserContextType } from "../../utils/types";

export default function Home() {
  const {user} =useUserContext() as UserContextType;
  const [products, setProducts] = useState<any[]>([]);  // Initialize as an empty array

  useEffect(() => {
    fetchData("https://dummyjson.com/products?limit=25", setProducts); // Fetching data
  }, []);  // empty dependency array to fetch once on component mount
  
  useEffect(() => {
  if (user) {
    fetchData("https://dummyjson.com/products?limit=25", setProducts);
  }
}, [user]);  // fetch data only when `user` is present


  return (
    <>
      
      <div className="flex flex-wrap">
        {/* Check if products is not empty before mapping */}
        {products && products.length > 0 ? (
          products.map((item, index) => (
            
              <CardSingle name={item.title} description={item.description} key={item.id} id={item.id} image={item.images[0]} category={item.category} shippingInformation={""} warrantyInformation={""} price={item.price} rating={item.rating} stock={item.stock}  />
          
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
}
