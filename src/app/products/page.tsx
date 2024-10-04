"use client";

import { useEffect, useState } from "react";
import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import { fetchData } from "../../../utils/functions";
import CardSingle from "@/components/CardSingle";

const Products = () => {
  const { user } = useUserContext() as UserContextType;
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");

  useEffect(() => {
    if (user) {
      fetchData(`https://dummyjson.com/products?limit=90`, (data) => {
        setProducts(data);
        setFilteredProducts(data); 
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const searchValue = e.target.value; 
  setInputSearch(searchValue);

  
  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  setFilteredProducts(filteredItems);
};

  return (
    <>
      <div className="bg-pt-primary text-white flex flex-col items-center">
        <label
          htmlFor="user-input"
          className="bg-pt-primary text-white text-3xl md:text-4xl text-center p-4 flex justify-center"
        >
          Search item
        </label>
        <input
          id="user-input"
          type="text"
          value={inputSearch}
          onChange={handleChange}
          className="text-black min-h-[40px] mb-4 w-[250px] md:w-[500px]"
        />
      </div>

      <div className="flex flex-wrap justify-evenly pb-8 mb-2">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
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
          <p className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center">
            Loading products...
          </p>
        )}
      </div>
    </>
  );
};

export default Products;
