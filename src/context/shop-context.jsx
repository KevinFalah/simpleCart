import { PRODUCTS } from '../product'
import { createContext, useState } from 'react'
import { formatIDR } from '../assets/util/func'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1;i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    
    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItem = (newValue, itemId) => {
        setCartItems(prev => ({...prev, [itemId]: newValue}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemSpecific = PRODUCTS.find(product => product.id == item);
                totalAmount += itemSpecific?.price * cartItems[item]
            }
        }
        return formatIDR(totalAmount);
    }

    const checkout = () => {
        setCartItems(getDefaultCart())
    }


    const contextValue = {
        addToCart,
        removeFromCart,
        cartItems,
        updateCartItem,
        getTotalAmount,
        checkout,
    }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
