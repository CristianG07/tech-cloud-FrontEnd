// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { SlidePrevButton } from './SlidePrevButton'
import { SlideNextButton } from './SlideNextButton'

export const ImageSlide = ({ image }) => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={true}
      breakpoints={{
        // when window width is >= 768px
        768: {
          pagination: false
        }
      }}
      speed={700}
      className='relative'
    >
      <SwiperSlide>
        <div className='p-10'>
          <img className='aspect-[193/214] object-contain' src={image} alt='' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='p-10'>
          <img className='aspect-[193/214] object-contain' src={image} alt='' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='p-10'>
          <img className='aspect-[193/214] object-contain' src={image} alt='' />
        </div>
      </SwiperSlide>
      <div className='hidden absolute top-0 md:flex justify-between items-center w-full h-full'>
        <div className='z-10'>
          <SlidePrevButton />
        </div>
        <div className='z-10'>
          <SlideNextButton />
        </div>
      </div>
    </Swiper>
  )
}
