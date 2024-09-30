"use client";

import { useEffect, useState } from "react";
import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import CardSingle from "@/components/CardSingle";

const MySavedItems = () => {
  const { user } = useUserContext() as UserContextType;
  const [products, setProducts] = useState<any[]>([]);

  
  const fetchProduct = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchSavedItems = async () => {
      if (user?.saveditems && user.saveditems.length > 0) {
        try {
          
          setProducts([]);
         
          const uniqueSavedItems = Array.from(new Set(user.saveditems));

          const fetchedProducts = await Promise.all(
            uniqueSavedItems.map(async (id) => {
              const product = await fetchProduct(`https://dummyjson.com/products/${id}`);
              return product;
            })
          );

          setProducts(fetchedProducts.filter(Boolean));
        } catch (error) {
          console.error("Error fetching saved items:", error);
        }
      } else {
        setProducts([]);
      }
    };

    fetchSavedItems();
  }, [user?.saveditems]);

  return (
    <>
      <div className="flex flex-wrap justify-evenly pb-8 mb-2">
        {products && products.length > 0 ? (
          products.map((item) => (
            <CardSingle
              key={item.id}
              name={item.title}
              description={item.description}
              id={item.id}
              image={item.thumbnail}
              category={item.category}
              shippingInformation=""
              warrantyInformation=""
              price={item.price}
              rating={item.rating}
              stock={item.stock}
              simple={true}
            />
          ))
        ) : (
          <p>No saved items.</p>
        )}
      </div>
    </>
  );
};

export default MySavedItems;
