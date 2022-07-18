import React, { useRef } from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  return (
    <>
      <div className='cart' ref={cartRef}>
        <div className='cart__content'>
          <button className='cart__button' onClick={() => setShowCart(false)}>
            <AiOutlineLeft />
            <span className='cart__heading'>Your Cart</span>
            <span className='cart__quantity'>({ totalQuantities } items)</span>
          </button>
          {cartItems.length < 1 && (
            <div className="cart__empty-cart">
              <div className="cart__empty-cart-content">
                <AiOutlineShopping size={150} />
                <h3 className='cart__empty-cart-heading'>Your shopping card is empty</h3>
                <Link href="/">
                  <button className="button cart__empty-cart-button" onClick={() => setShowCart(false)}>
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
          <div className="cart__product-content">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="cart__product" key={item._id}>
                  <img className="cart__product-image" src={urlFor(item?.image[0])}/>
                  <div className="cart__item-desc">
                    <div className="cart__item-top">
                      <h5>{item.name}</h5>
                      <h4>৳{item.price}</h4>
                    </div>
                    <div className="cart__item-bottom">
                      <div className="product-details__quantity-details">
                        <span className="product-details__number product-details__number--minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                          <AiOutlineMinus />
                        </span>
                        <span className="product-details__number product-details__number--num">
                          {item.quantity}
                        </span>
                        <span className="product-details__number product-details__number--plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                          <AiOutlinePlus />
                        </span>
                      </div>
                      <button className="cart__remove-item" onClick={() => onRemove(item)}>
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart__bottom">
              <div className="cart__total">
                <h3>subtotal:</h3>
                <h3>৳{totalPrice}</h3>
              </div>
              <div className="cart__button-wrap">
                <button className="button cart__checkout">
                  pay with stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart

