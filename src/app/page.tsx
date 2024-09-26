"use client"

import LogIn from "@/components/LogIn";
import { fetchData } from "../../utils/functions";
import { useEffect } from "react";


export default function Home() {

  useEffect(()=>{
    fetchData("https://dummyjson.com/products")
  },[])

  return (<>
  <h1>connected</h1>
  
  </>
   
  );
}
