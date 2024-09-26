"use client"

import LogIn from "@/components/LogIn";
import { fetchData } from "../../utils/functions";
import { useEffect } from "react";


export default function Home() {

  useEffect(()=>{
    fetchData("https://dummyjson.com/products?limit=0")//working get all 194 products use limit=25 or x2 x4
    fetchData('https://dummyjson.com/products/category/smartphones')//working
    fetchData('https://dummyjson.com/products/categories')
  },[])
//data.meals.slice(0,5) for example or sort by review
  return (<>
  <h1>connected</h1>
  
  </>
   
  );
}
