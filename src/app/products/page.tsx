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
      // Fetch products only when user.category is defined
      fetchData(`https://dummyjson.com/products/category/${user.category}`, setProducts);
    }
  }, [user?.category]); // Add user?.category as dependency to refetch on change
  useEffect(() => {
    if (user) {
      // Fetch products only when user.category is defined
      fetchData(`https://dummyjson.com/products/category/${user.category}`, setProducts);
    }
  }, [user]); // Add user?.category as dependency to refetch on change
  return (
    <>
      <h2>Products</h2>
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
