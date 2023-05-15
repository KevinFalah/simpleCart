import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { formatIDR } from '../../assets/util/func'

export const CartItem = ({data}) => {
    const {id, productName, price, productImage} = data
    const {cartItems, addToCart, removeFromCart, updateCartItem} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName} />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>{formatIDR(price)}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input type='number' value={cartItems[id]} onChange={(e) => updateCartItem(e.target.value, id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
