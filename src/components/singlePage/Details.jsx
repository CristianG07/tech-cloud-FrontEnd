import { ProductDetail } from './ProductDetail'

export const Details = (details) => {
  return (
    <div>
      <h4 className='title_single_product'>Product details</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4'>
        <div className='grid gap-4 max-w-[90%] md:max-w-full w-full mx-auto'>
          <ProductDetail
            title={'Screen diagonal'}
            details={details[0].screen_diagonal}
          />
          <ProductDetail
            title={'Built-in memory'}
            details={details[1].memory}
          />
          <ProductDetail
            title={'Camera megapixels'}
            details={details[2].camera_megapixels}
          />
          <ProductDetail
            title={'Display resolution'}
            details={details[3].display_resolution}
          />
        </div>
        <div className='flex flex-col gap-4 max-w-[90%] w-full mx-auto'>
          <ProductDetail
            title={'Network standard'}
            details={details[4].network_standard}
          />
          <ProductDetail
            title={'Matrix type'}
            details={details[5].matrix_type}
          />
        </div>
      </div>
    </div>
  )
}
