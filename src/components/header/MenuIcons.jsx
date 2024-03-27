import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'
// images
import {
  cart,
  heart_light,
  information_circle,
  profile_light
} from '@/assets/images'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setOpenLogin, setOpenSidebar } from '@/redux/products/toggleSlice'
// components
import { SideBar } from './SideBar'
import { PopUpLoginMobile } from './PopUpLoginMobile'
import { PopUpSignUpMobile } from './PopUpSignUpMobile'
import { PopUpLogin } from './PopUpLogin'
import { PopUpSignUp } from './PopUpSignUp'
import { Bars } from '../ui/Bars'

export const MenuIcons = () => {
  const dispatch = useDispatch()
  const { isSidebarOpen, isLoginOpen } = useSelector((state) => state.toggle)
  const { favorites } = useSelector((state) => state.favorite)
  const { data: totalItems } = useSelector((state) => state.cart)

  return (
    <div className='flex items-center gap-4 lg:gap-6'>
      <Link to='/favorite' className='show_lg w-8 relative'>
        <img src={heart_light} alt='heart_light_icon' />
        {favorites.length > 0 && (
          <span className='absolute text-center font-sans text-sm font-medium -top-3 -right-2 bg-dark_primary h-6 w-6 flex items-center justify-center text-white rounded-full'>
            {favorites.length}
          </span>
        )}
      </Link>
      <Link to='/basket' className='w-8 relative'>
        <img src={cart} alt='cart_icon' />
        {totalItems.length > 0 && (
          <span className='absolute text-center font-sans text-sm font-medium -top-3 -right-2 bg-dark_primary h-6 w-6 flex items-center justify-center text-white rounded-full'>
            {totalItems.length}
          </span>
        )}
      </Link>
      <button
        onClick={() => {
          dispatch(setOpenLogin(!isLoginOpen))
        }}
        className='show_lg w-8'
      >
        <img src={profile_light} alt='profile_light_icon' />
      </button>
      <Link to='/profile' className='show_lg w-8'>
        <img src={information_circle} alt='information_circle_icons' />
      </Link>
      <OutsideClickHandler
        onOutsideClick={() => dispatch(setOpenSidebar(false))}
      >
        <button
          onClick={() => dispatch(setOpenSidebar(!isSidebarOpen))}
          className='block lg:hidden w-8'
        >
          <Bars />
        </button>
        <SideBar />
      </OutsideClickHandler>
      <PopUpLoginMobile />
      <PopUpSignUpMobile />
      <PopUpLogin />
      <PopUpSignUp />
    </div>
  )
}
