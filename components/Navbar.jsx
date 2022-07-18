import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <div className='header'>
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              Little Bee
            </div>
            <div className='header__nav'>
              <nav className='header__nav-items'>
                <Link href="/">
                  <a className='header__nav-item'>Home</a>
                </Link>
                <Link href="#">
                  <a className='header__nav-item'>About</a>
                </Link>
                <Link href="#">
                  <a className='header__nav-item'>Product</a>
                </Link>
                <Link href="#">
                  <a className='header__nav-item'>Contact</a>
                </Link>
              </nav>
            </div>
            <div className='header__cart-wrap'>
              <button className='header__cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='header__cart-icon-qty'>{totalQuantities}</span>
              </button>
            </div>
            { showCart && <Cart />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar