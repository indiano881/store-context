"use client";

import { fetchData } from "../../utils/functions";
import { useEffect, useState } from "react";
import CardSingle from "@/components/CardSingle";
import { useUserContext } from "../../utils/contexts";
import { UserContextType } from "../../utils/types";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);  

  useEffect(() => {
    fetchData("https://dummyjson.com/products?limit=25", setProducts)
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
       
        {products && products.length > 0 ? (
          products.map((item, index) => (
            
              <CardSingle name={item.title} description={item.description} key={item.id} id={item.id} image={item.thumbnail} category={item.category} shippingInformation={""} warrantyInformation={""} price={item.price} rating={item.rating} stock={item.stock}  />
          
          ))
        ) : (

          <p>Loading products...</p>

        )}
        
      </div>
    </>
  );
}
