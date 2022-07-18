import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({ FooterBanner: {
  discount, largeText, largeText2, saleTime, smallText, midText, desc, product, buttonText, copyright
} }) => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='footer__content'>
            <div className="footer__text-wrap">
              <h2 className='footer__heading'>{largeText}</h2>
              <p className='footer__text'>{largeText2}</p>
              <div className='footer__button-wrap'>
                <Link href={`/product/${product}`}>
                  <a className='button'>{buttonText}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBanner