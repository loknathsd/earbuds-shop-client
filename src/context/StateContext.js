import { createContext, useState } from "react";



const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

   const incQyt = ()=>{
    setQty((prevQty)=>prevQty +1 )
   }
   const decQyt = ()=>{
    setQty((prevQty)=>{
        if(prevQty >0){
            return prevQty -1
        }
    } )
   }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQyt,
                decQyt
            }}
        >
            {children}
        </Context.Provider>
    )
}