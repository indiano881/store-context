"use client"

import { useEffect, useState } from "react";
import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import LogIn from "../LogIn";
import { fetchSixRandom } from "../../../utils/functions";
import CardSingle from "../CardSingle";


const LogInWrapper = ({children}:{children:React.ReactNode}) => {
    //we have to tell not to use null, so we use aliases
    const {user} =useUserContext() as UserContextType;
    const [products, setProducts] = useState<any[]>([]);  

    useEffect(() => {
      fetchSixRandom(setProducts)
    }, []);
    useEffect(() => {
        fetchSixRandom(setProducts)
      }, [user]);
    return (
    <div className="flex flex-col">
    {/*controller here we choose what to show */}
    {!user ? <LogIn /> :
        <>
          
            <div className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center">
                <h2 className="border-4 rounded-full border-pt-secondary p-2">Hi <span className="text-pt-secondary">{user.name}</span>! As a <span className="text-pt-secondary">{user.membership}</span> member you get a <span className="text-pt-secondary">{user.membership==="gold" ? 10 : user.membership==="platinum" ? 20 : 5}</span> discount!</h2>
            </div>
            
            
            {children}
        </>
    
    }
    <div className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center">
                <h2 className="border-4 rounded-full border-pt-secondary p-2">Wanna check out some of our <span className="text-pt-secondary">fantastic </span> products? </h2>
            </div>
    <div className="flex flex-wrap justify-evenly pb-8 mb-2">
      
    {products && products.length > 0 ? (
          products.map((item, index) => (
            
              <CardSingle name={item.title} description={item.description} key={item.id} id={item.id} image={item.thumbnail} category={item.category} shippingInformation={""} warrantyInformation={""} price={item.price} rating={item.rating} stock={item.stock} simple={false}  />
          
          ))
        ) : (

          <p>Loading products...</p>

        )}
        </div>
    </div>
    )
}

export default LogInWrapper;