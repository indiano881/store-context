"use client"

import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/functions";
import CardSingle from "../CardSingle";


const CardsContainer = () => {
  const [products, setProducts] = useState<any[]>([]); 

  useEffect(() => {
    fetchData("https://dummyjson.com/products?limit=25", setProducts); 
  }, []); 


  return(
    <>
    <div className="flex flex-wrap justify-center pb-8">
        
        {products && products.length > 0 ? (
          products.map((item, index) => (
            
              <CardSingle name={item.title} description={item.description} key={item.id} id={item.id} image={item.images[0]} category={item.category} shippingInformation={""} warrantyInformation={""} price={item.price} rating={item.rating} stock={item.stock}  />
          
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  )
}

export default CardsContainer;