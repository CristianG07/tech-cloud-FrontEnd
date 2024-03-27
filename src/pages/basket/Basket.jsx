import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BasketProdutcs from './BasketProdutcs'
import { Label } from '@/components/ui/label'
import { InputForm } from '@/components/ui/InputForm'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormatPrice } from '@/utils/FormatPrice'
import { Select } from '../../components/ui/Select'

const Basket = () => {
  const { data: products } = useSelector((state) => state.cart)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const totalAmount = products.reduce((total, product) => {
    const priceWithoutFormat = product.actual_price
    return total + priceWithoutFormat * product.quantity
  }, 0)

  return (
    <section className='container_products grid'>
      <div>
        <div className='text-accent_primary capitalize flex gap-2'>
          <Link to='/'>Home</Link> /<span>Basket</span>
        </div>
      </div>

      {products.length === 0 ? (
        <div className='flex items-center justify-center h-[55vh] text-4xl text-accent_primary'>
          <p>There are no items</p>
        </div>
      ) : (
        <>
          <h4 className='text-center text-2xl md:text-3xl font-medium mt-7 mb-14'>
            Submit your order
          </h4>
          <div>
            <form
              className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5'
              action='#'
              method='POST'
            >
              <div>
                <div>
                  {products.map((product) => (
                    <BasketProdutcs key={product.id} {...product} />
                  ))}
                </div>
                <div className='space-y-2 mt-10 sm:mt-20'>
                  <h4 className='title_single_product text-xl font-medium my-8'>
                    Contact details
                  </h4>
                  <div className='grid_basket'>
                    <div>
                      <Label htmlFor='firstname'>First name</Label>
                      <div>
                        <InputForm name='firstname' type='text' required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor='lastname'>Last name</Label>
                      <div>
                        <InputForm name='lastname' type='text' required />
                      </div>
                    </div>
                  </div>
                  <div className='grid_basket'>
                    <div>
                      <Label htmlFor='email'>Email</Label>
                      <div>
                        <InputForm
                          name='email'
                          type='email'
                          autoComplete='email'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor='phone'>Phone number</Label>
                      <div>
                        <InputForm name='phone' type='text' required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-2'>
                  <h4 className='title_single_product text-xl font-medium my-8'>
                    Delivery details
                  </h4>
                  <div className='grid_basket'>
                    <div>
                      <Label htmlFor='street'>Street</Label>
                      <div>
                        <InputForm name='street' type='text' required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor='building'>Building/ flat</Label>
                      <div>
                        <InputForm name='building' type='text' required />
                      </div>
                    </div>
                  </div>
                  <div className='grid_basket'>
                    <div>
                      <Label htmlFor='city'>City</Label>
                      <div>
                        <InputForm name='city' type='text' required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor='phone'>Postal code</Label>
                      <div>
                        <InputForm name='phone' type='text' required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pt-8'>
                  <Button
                    type='button'
                    className='rounded-xl bg-light_secondary px-10 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
                  >
                    Save
                  </Button>
                </div>
                <div className='space-y-2'>
                  <h4 className='title_single_product text-xl font-medium mb-5 my-10'>
                    Delivery
                  </h4>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                      <div>
                        <input
                          className=''
                          name='delivery'
                          type='radio'
                          defaultChecked
                          required
                        />
                      </div>
                      <Label htmlFor='inpost'>InPost Parcel Locker</Label>
                    </div>
                    <p>free</p>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-2 lg:items-center w-[80%] sm:w-full mx-auto'>
                    <Select />
                    <Button
                      type='submit'
                      className=' rounded-xl bg-accent_primary w-full sm:w-fit px-10 sm:px-5 py-3.5 text-base sm:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent_primary/85 focus-visible:outline focus-visible:outline-2 duration-500'
                    >
                      Select on the map
                    </Button>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                      <div>
                        <input
                          className=''
                          name='delivery'
                          type='radio'
                          required
                        />
                      </div>
                      <Label htmlFor='dpd'>DPD Pickup Point</Label>
                    </div>
                    <p>free</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                      <div>
                        <input
                          className=''
                          name='delivery'
                          type='radio'
                          required
                        />
                      </div>
                      <Label htmlFor='inpost2'>InPost Courier</Label>
                    </div>
                    <p>10.99 zł</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                      <div>
                        <input
                          className=''
                          name='delivery'
                          type='radio'
                          required
                        />
                      </div>
                      <Label htmlFor='dpd'>DPD Courier</Label>
                    </div>
                    <p>10.99 zł</p>
                  </div>
                </div>
              </div>

              <div className='space-y-8 flex justify-center'>
                <div className='flex gap-6 w-full sm:w-fit flex-col sm:flex-col-reverse justify-between'>
                  <div className='space-y-2'>
                    <h4 className='title_single_product text-xl font-medium my-5'>
                      Payment method
                    </h4>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <input
                            className=''
                            name='payment'
                            type='radio'
                            defaultChecked
                          />
                        </div>
                        <Label htmlFor='payment'>Credit Card</Label>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <input
                            className=''
                            name='payment'
                            type='radio'
                            required
                          />
                        </div>
                        <Label htmlFor='payment'>Blik</Label>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <input
                            className=''
                            name='payment'
                            type='radio'
                            required
                          />
                        </div>
                        <Label htmlFor='payment'>Online transfer</Label>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <input
                            className=''
                            name='payment'
                            type='radio'
                            required
                          />
                        </div>
                        <Label htmlFor='payment'>PayPal</Label>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <input
                            className=''
                            name='payment'
                            type='radio'
                            required
                          />
                        </div>
                        <Label htmlFor='payment'>Cash on delivery</Label>
                      </div>
                    </div>
                  </div>
                  <div className='mx-auto'>
                    <div className='bg-card_gray space-y-3 p-5 rounded-2xl shadow-md text-text_secondary max-w-[799px]'>
                      <div className='flex items-center gap-9 text-nowrap'>
                        <p>Product price</p>
                        <span className='text-dark_primary text-xl font-medium'>
                          {FormatPrice(totalAmount)}
                        </span>
                      </div>
                      <div className='flex items-center gap-5'>
                        <p>Cost of delivery</p>
                        <span className='text-black font-medium'>free</span>
                      </div>
                      <div>
                        <Label htmlFor='promo' className='text-xs'>
                          Add promo code
                        </Label>
                        <div>
                          <InputForm name='promo' type='text' />
                          <div className='flex justify-end text-light_secondary'>
                            <button type='button'>Apply</button>
                          </div>
                        </div>
                      </div>
                      <div className='max-w-full'>
                        <Button
                          type='button'
                          className='w-full rounded-xl bg-light_secondary px-10 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
                        >
                          Buy
                        </Button>
                      </div>
                      <div className='flex gap-2 mt-1'>
                        <Checkbox />
                        <Label>
                          <span className='text-sm text-text_secondary'>
                            I accept
                          </span>{' '}
                          <Link className='underline underline-offset-1 text-light_secondary'>
                            terms and conditions
                          </Link>
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className='hidden lg:flex gap-20 items-end mt-5'>
              <div className='space-y-3 text-text_secondary w-fit'>
                <h4 className='title_single_product text-xl font-medium my-5 text-black'>
                  Summary
                </h4>
                <div className='flex items-center gap-9 text-nowrap'>
                  <p>Product price</p>
                  <span className='text-dark_primary text-xl font-medium'>
                    {FormatPrice(totalAmount)}
                  </span>
                </div>
                <div className='flex items-center gap-5'>
                  <p>Cost of delivery</p>
                  <span className='text-black font-medium'>free</span>
                </div>
                <div className='flex gap-2 pt-2'>
                  <Checkbox />
                  <Label>
                    <span className='text-sm text-text_secondary'>
                      I accept
                    </span>{' '}
                    <Link className='underline underline-offset-1 text-light_secondary'>
                      terms and conditions
                    </Link>
                  </Label>
                </div>
              </div>
              <div className='max-w-full'>
                <Button
                  type='button'
                  className='w-full rounded-lg bg-light_secondary px-10 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
                >
                  I order and pay
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
export default Basket
