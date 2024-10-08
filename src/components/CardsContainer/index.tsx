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
    <div className="flex flex-wrap justify-evenly pb-8 mb-2">
        
        {products && products.length > 0 ? (
          products.map((item, index) => (
            
              <CardSingle name={item.title} description={item.description} key={item.id} id={item.id} image={item.thumbnail} category={item.category} shippingInformation={""} warrantyInformation={""} price={item.price} rating={item.rating} stock={item.stock} simple={true}  />
          
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  )
}

export default CardsContainer;