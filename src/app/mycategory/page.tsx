"use client"

import { useEffect, useState } from "react";
import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import CardSingle from "@/components/CardSingle";
import { fetchData } from "../../../utils/functions";

const Mycategory = ()=> {
    const { user } = useUserContext() as UserContextType;
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (user?.category) {
     
      fetchData(`https://dummyjson.com/products/category/${user.category}`, setProducts);
    }
  }, [user?.category]); 
  useEffect(() => {
    if (user) {
      
      fetchData(`https://dummyjson.com/products/category/${user.category}`, setProducts);
    }
  }, [user]); 

  return (
    <>
      <div className="flex flex-wrap justify-evenly pb-8 mb-2">
        {products && products.length > 0 ? (
          products.map((item) => (
            <CardSingle
              name={item.title}
              description={item.description}
              key={item.id}
              id={item.id}
              image={item.thumbnail}
              category={item.category}
              shippingInformation={""}
              warrantyInformation={""}
              price={item.price}
              rating={item.rating}
              stock={item.stock}
              simple={true}
            />
          ))
        ) : (
          <p className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center">Loading products...</p>
        )}
      </div>
    </>
  );
};


export default Mycategory;