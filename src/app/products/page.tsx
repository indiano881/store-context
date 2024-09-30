"use client";

import { useEffect, useState } from "react";
import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import { fetchData } from "../../../utils/functions";
import CardSingle from "@/components/CardSingle";

const Products = () => {
  const { user } = useUserContext() as UserContextType;
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (user?.category) {
      
      fetchData(`https://dummyjson.com/products?limit=90`, setProducts);
    }
  }, [user?.category]); 
  useEffect(() => {
    if (user) {
      
      fetchData(`https://dummyjson.com/products?limit=90`, setProducts);
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
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Products;
