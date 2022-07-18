import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]}></HeroBanner>

      <div className='product'>
        <div className='container'>
          <div className='section'>
            <h2 className='section__heading'>Product</h2>
            <p className='section__text'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='product__content'>
            {
              products?.map((product) => <Product key={product._id} product={product} />)
            }
          </div>
        </div>
      </div>

      <FooterBanner FooterBanner={bannerData.length && bannerData[0]}></FooterBanner>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home