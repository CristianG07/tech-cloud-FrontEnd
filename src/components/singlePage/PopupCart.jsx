import { IoIosClose } from 'react-icons/io'
import { DialogClose, DialogHeader, DialogTitle } from '../ui/dialog'
import { CgMathMinus } from 'react-icons/cg'
import { GoPlus } from 'react-icons/go'
import { useEffect, useState } from 'react'
import { removeFromCart, toggleCartQty } from '@/redux/products/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormatPrice } from '@/utils/FormatPrice'

export const PopupCart = ({
  id,
  image,
  name,
  actual_price,
  discounted_price
}) => {
  const { data: cart } = useSelector((state) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

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

  const totalPrice = FormatPrice(actual_price * qty)
  const totalPriceDiscounted = FormatPrice(discounted_price * qty)

  return (
    <>
      <DialogHeader>
        <DialogTitle className='flex justify-between items-center pr-10 md:px-6 text-2xl'>
          Your card
          <DialogClose>
            <div className='text-text_secondary'>
              <IoIosClose />
            </div>
          </DialogClose>
        </DialogTitle>
      </DialogHeader>
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center'>
        <div className='text-black mt-5'>
          <div className='flex gap-4 w-[90%]'>
            <div className='w-[13rem]'>
              <img src={image} className='' alt='' />
            </div>

            <div className='space-y-1.5 lg:max-w-full'>
              <p className='mb-3 md:mb-3 max-w-40 md:max-w-full'>
                {name}
              </p>
              <div className='flex flex-col'>
                <span className='text-xl'>{totalPrice}</span>
                {discounted_price && (
                  <span className='text-discounted_price text-lg line-through font-semibold'>
                    {totalPriceDiscounted}
                  </span>
                )}
              </div>
              <div className='flex text-2xl items-center gap-2'>
                <button onClick={() => decreaseQty()}>
                  <CgMathMinus />
                </button>
                <span className='px-3 py-1 bg-white text-base border rounded-lg shadow-sm'>
                  {qty}
                </span>
                <button onClick={() => increaseQty()}>
                  <GoPlus />
                </button>
              </div>
              <DialogClose>
                <button
                  onClick={() => dispatch(removeFromCart(id))}
                  className='text-sm text-light_secondary underline'
                >
                  Delete item
                </button>
              </DialogClose>
            </div>
          </div>
        </div>
        <div className='w-fit md:w-full max-w-44'>
          <button onClick={() => navigate(`/basket`)} className='bg-light_secondary py-3 rounded-lg text-white text-base w-full'>
            Buy
          </button>
          <DialogClose className='w-full'>
            <button className='py-3 text-base rounded-lg text-accent_primary w-full underline underline-offset-8'>
              Continue shopping
            </button>
          </DialogClose>
        </div>
      </div>
    </>
  )
}
