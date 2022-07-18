import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className='product__card'>
          <img className='product__image' src={urlFor(image && image[0])} alt="product" />
          <h3 className='product__name'>{name}</h3>
          <p className='product__price'>৳{price}</p>
        </div>
      </Link>
    </>
  )
}

export default Product