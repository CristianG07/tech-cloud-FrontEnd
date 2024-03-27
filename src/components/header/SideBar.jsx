import { profile_light_white } from '@/assets/images'
import { links_footer, sidebar } from '@/utils/data'
import { Link } from 'react-router-dom'
import { Socials } from '../footer/Socials'
import { useSelector, useDispatch } from 'react-redux'
import {
  setOpenLoginMobile,
  setOpenSidebar,
  setOpenSingUpMobile
} from '@/redux/products/toggleSlice'
import { Catalog } from './Catalog'

export const SideBar = () => {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector((state) => state.toggle)

  return (
    <div
      className={`absolute lg:hidden z-20 rounded-b-2xl shadow-lg ${
        isSidebarOpen ? '' : 'translate-x-full'
      } calc_header w-full right-0 max-w-full sm:max-w-[400px] duration-200 ease-linear`}
    >
      <div className='relative flex justify-center items-center gap-6 bg-dark_primary px-12 py-5 text-white'>
        <div className='w-10 h-10'>
          <img src={profile_light_white} alt='profile_light_white' />
        </div>
        <div className='flex text-lg text-nowrap text-black'>
          <button
            onClick={() => {
              dispatch(setOpenLoginMobile(true))
              dispatch(setOpenSidebar(false))
            }}
            className='pr-3 text-white'
          >
            Log in
          </button>
          <div className='text-white'>|</div>
          <button
            onClick={() => {
              dispatch(setOpenSingUpMobile(true))
              dispatch(setOpenSidebar(false))
            }}
            className='pl-3 text-white'
          >
            Sign up
          </button>
        </div>
      </div>
      <div className='grid gap-6 bg-card_gray p-8 rounded-b-2xl'>
        <Catalog />
        <div className='grid gap-4'>
          {sidebar.map((item, i) => (
            <Link
              onClick={() => dispatch(setOpenSidebar(false))}
              to={item.link}
              key={i}
              className='flex items-center gap-4'
            >
              <div>
                <img src={item.icon} alt={item.text} />
              </div>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
        {/* socials */}
        <div className='flex gap-5 w-52'>
          <Socials className='md:flex-row' />
        </div>
        {/* Links */}
        <div className='grid gap-3 text-text_secondary'>
          {links_footer.map((nav, i) => (
            <div key={i}>
              <Link onClick={() => dispatch(setOpenSidebar(false))} to={nav.link} className='hover:text-dark duration-500'>
                {nav.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
