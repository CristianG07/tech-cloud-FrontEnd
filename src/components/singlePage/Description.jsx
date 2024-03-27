import { ProductDescription } from './ProductDescription'

export const Description = (description) => {
  return (
    <>
      <h4 className='title_single_product'>Description</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10'>
        <ProductDescription
          title={'Personalization'}
          description={description[0].personalization}
        />
        <ProductDescription
          title={'The lightning-fast'}
          description={description[1].the_lightning_fast}
        />
        <ProductDescription
          title={'Hollywood Home Movies'}
          description={description[2].hollywood_home_movies}
        />
        <ProductDescription
          title={'Selfies'}
          description={description[3].selfies}
        />
      </div>
    </>
  )
}
