import { IoIosClose } from 'react-icons/io'
import { InputForm } from '../ui/InputForm'
import { Label } from '../ui/label'
import { Link } from 'react-router-dom'
import { faceboo_icon, google } from '@/assets/images'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import {
  setOpenLoginMobile,
  setOpenSingUpMobile
} from '@/redux/products/toggleSlice'
import { useEffect, useRef } from 'react'

export const PopUpLoginMobile = () => {
  const dispatch = useDispatch()
  const { isLoginMobileOpen } = useSelector((state) => state.toggle)
  const refPopUp = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true)
  }, [])

  const handleClickOutSide = (e) => {
    if (!refPopUp.current.contains(e.target)) {
      dispatch(setOpenLoginMobile(false))
    }
  }

  return (
    <section
      className={`lg:hidden flex absolute items-center md:fixed top-0 h-full left-0 w-full md:bg-gray-300 z-30 transition-all duration-300 ${
        isLoginMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        ref={refPopUp}
        className={`lg:hidden absolute md:static calc_header w-full md:w-[390px] mx-auto bg-card_gray shadow-xl rounded-b-xl md:rounded-xl p-10 z-20 transition-all duration-300 ${
          isLoginMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className='space-y-6'>
          <div className='flex justify-between items-center'>
            <span className='text-2xl'>Log in</span>
            <button
              onClick={() => dispatch(setOpenLoginMobile(false))}
              className='text-text_secondary'
            >
              <IoIosClose size={25} />
            </button>
          </div>
          <div className='space-y-5'>
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
                <div className='text-sm text-[#68778D] underline underline-offset-1 mt-1'>
                  <Link>I forgot my password</Link>
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-xl bg-light_secondary px-3 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
                >
                  Log in
                </button>
              </div>
            </form>
            <div>
              <p className='text-accent_primary text-center'>Or log in with</p>
            </div>
            <div className='flex justify-center gap-5'>
              <Button className='flex items-center gap-2 bg-light_primary text-black'>
                <div className='w-5 h-5'>
                  <img src={google} alt='google_icon' />
                </div>
                Google
              </Button>
              <Button className='flex items-center gap-2 bg-light_primary text-black'>
                <div className='w-6 h-6'>
                  <img src={faceboo_icon} alt='faceboo_icon' />
                </div>
                Facebook
              </Button>
            </div>
            <div className='flex justify-center pt-4'>
              <span className='text-accent_primary mr-1'>
                You don`t have an account?
              </span>
              <button
                onClick={() => {
                  dispatch(setOpenSingUpMobile(true))
                  dispatch(setOpenLoginMobile(false))
                }}
                className='text-dark_primary underline underline-offset-1'
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
