import { Link, NavLink, useParams } from 'react-router-dom'
import { tabsNav } from '@/utils/data'
import { useDispatch } from 'react-redux'
import { fetchProductsByCategory } from '@/redux/products/categorySlice'
import { useEffect } from 'react'
import { Categories } from './Categories'

export const TabsCategories = () => {
  const dispatch = useDispatch()
  const { categoryName } = useParams()

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchProductsByCategory(categoryName))
    }
  }, [categoryName, dispatch])

  return (
    <nav className='show_lg lg:flex justify-center bg-accent_primary text-white h-14'>
      <div className='flex items-center h-full'>
        <Link
          exact='true'
          to='/'
          className={`tabs_categories ${!categoryName && 'bg-dark'}`}
        >
          All Products
        </Link>
        <NavLink
          to={`/category/Best sellers`}
          className={({ isActive }) =>
            `tabs_categories group-hover:bg-dark ${isActive && 'bg-dark'}`
          }
        >
          Best sellers
        </NavLink>
        <div className='flex h-full z-20'>
          {tabsNav.map((tab, i) => (
            <div key={i} className='relative group'>
              <NavLink
                to={`/category/${tab.name.toLowerCase()}`}
                className={({ isActive }) =>
                  `tabs_categories group-hover:bg-dark ${isActive && 'bg-dark'}`
                }
              >
                {tab.name}
              </NavLink>
              <div className='opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 absolute px-5 w-full grid justify-center py-3 bg-card_gray rounded-b-xl'>
                <div className='grid gap-1'>
                  <span className='text-lg text-dark_primary'>
                    {tab.name}
                  </span>
                  {tab.brands.map((brand, i) => (
                    <Categories key={i} name={tab.name} {...brand} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
