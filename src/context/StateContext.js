import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import jwt_decode from 'jwt-decode';
import { useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  let foundProduct;
  const toggleCartItemQuantity = (id, value) => {
    let foundProduct = cartItems.find((item) => item._id === id)
    if (value === 'inc') {
      setCartItems( prevCartItems => 
        prevCartItems.map( item => {          
            if (item._id === id){
                return {...item, quantity: foundProduct.quantity + 1}
            }
            return item
        })
    )
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems( prevCartItems => 
          prevCartItems.map( item => {          
              if (item._id === id){
                  return {...item, quantity: foundProduct.quantity - 1}
              }
              return item
          })
      )
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const removeProduct = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const addCart = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty > 0) {
        return prevQty - 1
      }
      else {
        return 0
      }
    })
  }

  //for user 
  useEffect(() => {
    setLoading(false)
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setUser(decodedToken.user);
    }
  }, []);
  const login = (token) => {
    setLoading(false)
    const decodedToken = jwt_decode(token);
    setUser(decodedToken.user);
    localStorage.setItem('token', token);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        totalQuantities,
        setTotalPrice,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        addCart,
        toggleCartItemQuantity,
        removeProduct,
        user,
        login,
        logout,
        loading

      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);