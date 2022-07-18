import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ products, product }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <>
        <div className='product-details'>
            <div className="container">
                <div className='product-details__content'>
                    <div className='product-details__image-wrap'>
                        <div className='product-details__image-wrapper'>
                            <img className='product-details__image' src={urlFor(image && image[index])} alt="image" />
                        </div>
                        <div className='product-details__image-marquee'>
                            {
                                image?.map((item, i) => (
                                    <img src={urlFor(item)} className="images" onMouseEnter={() => setIndex(i)}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className='product-details__text-wrap'>
                        <h3 className='product-details__name'>{name}</h3>
                        <div className='product-details__ratings'>
                            <div className='product-details__rating'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <p className='product-details__rating'>(20)</p>
                        </div>
                        <p className='product-details__text'><span>Details:</span> {details}</p>
                        <p className='product-details__price'>৳{price}</p>
                        <div className='product-details__quantity'>
                            <p className='product-details__quantity-text'>Quantites:</p>
                            <p className='product-details__quantity-details'>
                                <span className='product-details__number product-details__number--minus' onClick={decQty}>
                                    <AiOutlineMinus />
                                </span>
                                <span className='product-details__number product-details__number--num'>
                                    {qty}
                                </span>
                                <span className='product-details__number product-details__number--plus' onClick={incQty}>
                                    <AiOutlinePlus />
                                </span>
                            </p>
                        </div>
                        <div className='product-details__buttons'>
                            <button className='button button--transparent' onClick={() => onAdd(product, qty)}>Add to Cart</button>
                            <button className='button'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-details__related-product">
            <h2 className='product-details__related-heading'>You May Also Like It</h2>
            <div className='product-details__marquee'>
                <div className='product-details__marquee-content'>
                <Swiper
                    className="mySwiper"
                    spaceBetween={20}
                    loop={true}
                    speed={2000}
                    slidesPerView={4}
                    autoplay={{
                        delay: 0
                    }}
                >
                    {
                        products.map((item) => (
                            <SwiperSlide>
                                <Product key={item._id} product={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails