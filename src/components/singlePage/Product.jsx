import { Link } from 'react-router-dom'
// components
import { ImageSlide } from './ImageSlide'
import { carbon_security, light_payments, light_truck } from '@/assets/images'
import { Description } from './Description'
import { Details } from './Details'
import { StarRating } from './StarRating'
import { ButtonFavorite } from '../ui/ButtonFavorite'
import { useEffect, useState } from 'react'
// import { PopUpLogin } from '../header/PopUpLogin'
import { PopupCart } from './PopupCart'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/redux/products/cartSlice'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { SlidePrevButton } from './SlidePrevButton'
import { SlideNextButton } from './SlideNextButton'
import { ProductSlide } from './ProductSlide'
import { FormatPrice } from '@/utils/FormatPrice'
import { Select } from '../ui/Select'

const Product = (product) => {
  const {
    category,
    brand,
    image,
    name,
    actual_price,
    discounted_price,
    delivery,
    guarantee,
    payment_methods,
    description,
    product_details,
    rating_star
  } = product
  
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  const { data: products } = useSelector((state) => state.product)
  const [selectedOption, setSelectedOption] = useState('Sort by popularity');
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSelectChange = (option) => {
    setSelectedOption(option)
    if (option === 'Alphabetically') {
      const sortedProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(sortedProducts);
    } else if (option === 'Price') {
      const sortedProducts = products.slice().sort((a, b) => a.actual_price - b.actual_price);
      setFilteredProducts(sortedProducts);
    }
  }

  const addToCartHandler = () => {
    let newTotalPrice = actual_price
    const tempProduct = {
      ...product,
      quantity: qty,
      newTotalPrice
    }
    dispatch(addToCart(tempProduct))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products pb-0'>
      <div className='grid gap-5'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary capitalize flex gap-2'>
            <Link to='/'>Home</Link> /
            <Link to={`/category/${category}`}>{category}</Link> /
            <span>{brand}</span>
          </div>
          <div className='hidden md:block'>
            <Select selectedOption={selectedOption} onSelectChange={handleSelectChange} />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10'>
          <div className='w-full max-w-md mx-auto'>
            <ImageSlide image={image} />
          </div>
          <div className='flex flex-col justify-center gap-10 md:gap-5 w-full max-w-md md:w-[69%] mx-auto text-pretty'>
            <div className='flex flex-col gap-5 mx-auto text-pretty'>
              <h3 className='text-xl md:text-lg lg:text-2xl font-medium capitalize'>
                {name}
              </h3>
              <div className='flex items-center justify-between text-dark_primary'>
                <span className='text-base'>Available</span>
                <ButtonFavorite {...product} />
              </div>
              <div className='grid'>
                <span
                  className={`${
                    discounted_price && 'text-red-500'
                  } text-3xl font-semibold`}
                >
                  {FormatPrice(actual_price)}
                </span>
                {discounted_price && (
                  <span className='text-discounted_price text-2xl line-through font-semibold'>
                    {FormatPrice(discounted_price)}
                  </span>
                )}
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className='bg-light_secondary py-3 rounded-lg text-white text-base w-full'
                  >
                    Add to card +
                  </button>
                </DialogTrigger>
                <DialogContent className='w-[90%] px-5 py-8 md:px-12 md:py-14'>
                  <PopupCart {...product} />
                </DialogContent>
              </Dialog>
            </div>
            <div className='grid gap-2 text-nowrap'>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <span className='w-6'>
                  <img src={light_truck} alt='' />
                </span>
                {delivery}
              </p>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <span className='w-6'>
                  <img src={carbon_security} alt='' />
                </span>
                {guarantee}
              </p>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <span className='w-6'>
                  <img src={light_payments} alt='' />
                </span>
                {payment_methods}
              </p>
            </div>
          </div>
        </div>
        <div className='grid gap-20'>
          <div>
            <Description {...description} />
          </div>
          <div>
            <Details {...product_details} />
          </div>
          <div>
            <StarRating rating_star={rating_star} />
          </div>
        </div>
      </div>
      <div className='my-10 md:mt-16'>
        <h4 className='title_single_product mb-2'>
          You might be interested in
        </h4>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          pagination={true}
          navigation={true}
          spaceBetween={13}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4
            },
            // when window width is >= 960px
            960: {
              slidesPerView: 5,
              pagination: false,
              navigation: false
            }
          }}
          loop={true}
          speed={700}
        >
          {filteredProducts
            .filter((product) => product.category === category)
            .slice(0, 8)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductSlide {...product} />
              </SwiperSlide>
            ))}
          <div className='hidden lg:block z-10 absolute top-[40%] -left-2.5'>
            <SlidePrevButton />
          </div>
          <div className='hidden lg:block z-10 absolute top-[40%] -right-3'>
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Product
