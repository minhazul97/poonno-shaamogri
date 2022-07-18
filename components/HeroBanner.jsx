import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ HeroBanner }) => {
  return (
    <>
        <div className='hero'>
            <div className="container">
                <div className='hero__content'>
                    <div className="hero__text-wrap">
                        <p className='hero__text'>{HeroBanner.smallText}</p>
                        <h1 className='hero__heading'>{HeroBanner.product}</h1>
                        <p className='hero__text'>{HeroBanner.desc}</p>
                        <div className='hero__button-wrap'>
                            <Link href={`/product/${HeroBanner.product}`}>
                                <button className='button'>{HeroBanner.buttonText}</button>
                            </Link>
                        </div>
                    </div>
                    <div className='hero__image-wrap'>
                        <img className='hero__image' src={urlFor(HeroBanner.image)} alt={HeroBanner.product} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroBanner