"use client"

import { useEffect, useState } from "react";
import { useUserContext } from "../../utils/contexts";
import { fetchSixRandom } from "../../utils/functions";
import CardSingle from "@/components/CardSingle";
import { UserContextType } from "../../utils/types";

export default function Home() {
  const {user} =useUserContext() as UserContextType;
  const [products, setProducts] = useState<any[]>([]);  

  useEffect(() => {
    fetchSixRandom(setProducts)
  }, []);
  return (
    <>
      <div className="flex flex-col bg-white text-black font-semibold justify-center items-center text-left md:text-2xl border-4 rounded-full border-pt-secondary p-6 mx-20">
        
        <div>
          <h2 className="text-pt-primary font-bold text-lg md:text-4xl"> Dasboard</h2> 
          <p>User: {user?.name}</p>
          <p>Password: {user?.password}</p>
          <p>Memebrship: {user?.membership}</p>
          <p>Favourite category: {user?.category}</p>
          <p>Number of items in wishlist: {user?.saveditems.length}</p>
        </div>   
      </div>
        
      <div className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center grow">
                <h2 className="border-4 rounded-full border-pt-secondary p-2">Wanna check out some of our <span className="text-pt-secondary">fantastic </span> products? </h2>
            </div>
    <div className="flex flex-wrap justify-evenly pb-8 mb-2 ">
      
    {products && products.length > 0 ? (
          products.map((item, index) => (
            
              <CardSingle name={item.title} description={item.description} key={item.id} id={item.id} image={item.thumbnail} category={item.category} shippingInformation={""} warrantyInformation={""} price={item.price} rating={item.rating} stock={item.stock} simple={false}  />
          
          ))
        ) : (

          <p className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center grow">Loading products...</p>

        )}
        </div>
        
      
    </>
  );
}
