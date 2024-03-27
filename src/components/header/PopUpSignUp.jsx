import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { InputForm } from '../ui/InputForm'
import { Label } from '../ui/label'
import { IoIosClose } from 'react-icons/io'
import { faceboo_icon, google } from '@/assets/images'
import { Checkbox } from '../ui/checkbox'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenLogin, setOpenSingUp } from '@/redux/products/toggleSlice'
import { useEffect, useRef } from 'react'

export const PopUpSignUp = () => {
  const dispatch = useDispatch()
  const { isSingUpOpen } = useSelector((state) => state.toggle)
  const refPopUp = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true)
  }, [])

  const handleClickOutSide = (e) => {
    if (!refPopUp.current.contains(e.target)) {
      dispatch(setOpenSingUp(false))
    } else {
      dispatch(setOpenSingUp(true))
    }
  }

  return (
    <section
      className={`hidden lg:flex fixed items-center top-0 h-full left-0 w-full bg-gray-300 z-30 transition-all duration-300 ${
        isSingUpOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        ref={refPopUp}
        className={`hidden lg:block w-full md:w-[390px] mx-auto bg-card_gray shadow-xl rounded-b-xl lg:rounded-xl px-14 py-10 z-20 transition-all duration-300 ${
          isSingUpOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className='space-y-5'>
          <div className='flex justify-between items-center'>
            <span className='text-2xl'>Sign up</span>

            <button
              onClick={() => dispatch(setOpenSingUp(false))}
              className='text-text_secondary'
            >
              <IoIosClose size={25} />
            </button>
          </div>
          <div className='space-y-4'>
            <form className='space-y-3' action='#' method='POST'>
              <div>
                <Label htmlFor='email'>Email or phone number</Label>
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
                <Label htmlFor='password'>Create a password</Label>
                <div>
                  <InputForm
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor='repeatpassword'>Repeat a password</Label>
                <div>
                  <InputForm name='repeatpassword' type='password' required />
                </div>
              </div>
              <div className='flex gap-3 mt-1'>
                <Checkbox />
                <Label>
                  <span className='text-sm text-text_secondary'>I accept</span>{' '}
                  <Link className='underline underline-offset-1 text-light_secondary'>
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <div className='pt-3'>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-xl bg-light_secondary px-3 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
                >
                  Sign up
                </button>
              </div>
            </form>
            <div>
              <p className='text-accent_primary text-center'>Or log in with</p>
            </div>
            <div className='flex justify-center gap-7 text-lg'>
              <Button className='flex items-center gap-2 bg-light_primary text-black'>
                <div className='w-5 h-5'>
                  <img src={google} alt='google_icon' />
                </div>
                Google
              </Button>
              <Button className='flex items-center gap-2 bg-light_primary text-black py-5'>
                <div className='w-6 h-6'>
                  <img src={faceboo_icon} alt='faceboo_icon' />
                </div>
                Facebook
              </Button>
            </div>
            <div className='flex justify-center pt-4'>
              <span className='text-accent_primary mr-1'>
                You already have an account?
              </span>
              <button
                onClick={() => {
                  dispatch(setOpenLogin(true))
                  dispatch(setOpenSingUp(false))
                }}
                className='text-dark_primary underline underline-offset-1'
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
