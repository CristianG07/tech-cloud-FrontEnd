import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonCart } from '../ui/ButtonCart'
import { ButtonFavorite } from '../ui/ButtonFavorite'
import { useNavigate } from 'react-router-dom'

export const ProductSlide = (product) => {
  const { id, image, name, category, brand, actual_price, discounted_price } = product
  const navigate = useNavigate()

  const handleClick = (productId) => {
    navigate(`/category/${category}/brand/${brand}/product/${productId}`)
  }

  return (
    <div
      onClick={() => handleClick(id)}
      className='cursor-pointer p-1 mb-7 w-full'
    >
      <div>
        <img src={image} alt={name} className='aspect-[46/45] object-contain' />
      </div>
      <div className='py-4'>
        <div className='flex flex-col justify-between min-h-[84px]'>
          <p className='capitalize'>{name}</p>
          <div className='flex justify-between gap-1.5'>
            <span
              className={`${
                discounted_price ? 'text-red-500' : ''
              } text-lg text-nowrap font-semibold`}
            >
              {FormatPrice(actual_price)}
            </span>
            <div className='flex gap-2 mr-2'>
              <div>
                <ButtonCart {...product} />
              </div>
              <div>
                <ButtonFavorite {...product} />
              </div>
            </div>
          </div>
        </div>
        <div className='-mt-2'>
          {discounted_price && (
            <span className='text-discounted_price text-base line-through font-semibold'>
              {FormatPrice(discounted_price)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
