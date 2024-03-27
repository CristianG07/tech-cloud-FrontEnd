import { useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { CgMathMinus } from 'react-icons/cg'
import { removeFromCart, toggleCartQty } from '@/redux/products/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FormatPrice } from '@/utils/FormatPrice'
import toast from 'react-hot-toast'

const BasketProdutcs = ({
  id,
  image,
  name,
  actual_price,
  discounted_price
}) => {
  const dispatch = useDispatch()
  const { data: cart } = useSelector((state) => state.cart)
  const [qty, setQty] = useState(1)
  const totalPrice = FormatPrice(actual_price * qty)
  const totalPriceDiscounted = FormatPrice(discounted_price * qty)

  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === id)
    if (itemInCart) {
      setQty(itemInCart.quantity)
    }
  }, [cart, id])

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
      dispatch(toggleCartQty({ id, type: 'DEC' }))
    }
  }

  const increaseQty = () => {
    setQty(qty + 1)
    dispatch(toggleCartQty({ id, type: 'INC' }))
  }

  return (
    <div className='mb-7'>
      <div className='text-black'>
        <div className='flex gap-4'>
          <div className='w-[40%]'>
            <img src={image} alt='' />
          </div>

          <div className='space-y-3 lg:max-w-full'>
            <p className='text-lg mb-3 max-w-40'>{name}</p>
            <div className='flex flex-col'>
              <span
                className={`${discounted_price && 'text-red-500'} text-2xl`}
              >
                {totalPrice}
              </span>
              {discounted_price && (
                <span className='text-discounted_price text-xl line-through font-semibold'>
                  {totalPriceDiscounted}
                </span>
              )}
            </div>
            <div className='flex text-lg items-center gap-2'>
              <button type='button' onClick={() => decreaseQty()}>
                <CgMathMinus />
              </button>
              <span className='px-3 py-1 bg-white text-base border rounded-lg shadow-sm'>
                {qty}
              </span>
              <button type='button' onClick={() => increaseQty()}>
                <GoPlus />
              </button>
            </div>
            <button
              onClick={() => {
                dispatch(removeFromCart(id))
                toast.error('removed from cart')
              }}
              className='text-sm text-light_secondary underline'
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BasketProdutcs
