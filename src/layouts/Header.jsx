import { useState } from 'react'
// images
import { logo, search } from '@/assets/images'
// components
import { MenuIcons } from '@/components/header/MenuIcons'
import { TabsCategories } from '@/components/header/TabsCategories'
// ui
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const [searchProducts, setSearchProducts] = useState('')

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch()
    }
  }

  const performSearch = () => {
    if (searchProducts.trim() === '') return

    setSearchProducts('')
    navigate(`/search/${searchProducts}`)
  }

  return (
    <>
      <header className='bg-light_primary'>
        <div className='w-[90%] h-[5rem] max-w-7xl md:h-24 mx-auto flex items-center justify-between gap-4 lg:gap-32'>
          <Link to='/' className='flex items-center gap-3'>
            <div>
              <img className='min-w-16' src={logo} alt='logo' />
            </div>
            <p className='hidden sm:block text-nowrap text-2xl'>tech cloud</p>
          </Link>
          <div className='flex w-full max-w-sm items-center gap-24'>
            <div className='relative flex items-center w-full'>
              <div className='hidden md:block absolute left-3'>
                <img src={search} alt='search_icon' />
              </div>
              <Input
                type='text'
                className='lg:rounded-r-none'
                placeholder='What are you looking for?'
                value={searchProducts}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearchProducts(e.target.value)}
              />
              <button
                onClick={performSearch}
                className='hidden lg:block absolute h-full px-5 rounded-r-xl text-white text-sm font-medium left-full bg-light_secondary hover:bg-dark duration-700'
              >
                Search
              </button>
            </div>
          </div>
          <MenuIcons />
        </div>
        <TabsCategories />
      </header>
    </>
  )
}
