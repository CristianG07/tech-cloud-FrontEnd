import { CategoryList } from '@/components/home/CategoryList'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Select } from '../../components/ui/Select'
import { useEffect, useState } from 'react'

const Favorite = () => {
  const { favorites } = useSelector((state) => state.favorite)
  const [selectedOption, setSelectedOption] = useState('Sort by popularity');
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleSelectChange = (option) => {
    setSelectedOption(option)
    filterProducts(option);
  }

  const filterProducts  = (option) => {
    setSelectedOption(option)
    let sortedProducts = [...favorites];
    const [sortBy, sortOrder] = option.split(' ');
    if (sortBy === 'Alphabetically') {
      sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Price') {
      sortedProducts = sortedProducts.sort((a, b) => a.actual_price - b.actual_price);
    }
    if (sortOrder === '(desc)') {
      sortedProducts = sortedProducts.reverse();
    }
    setFilteredProducts(sortedProducts)
  }

  useEffect(() => {
    filterProducts(selectedOption);
  }, [favorites]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary flex gap-2'>
            <Link to='/'>Home</Link> /<span>Favorites</span>
          </div>
          <div className='hidden md:block'>
            <Select selectedOption={selectedOption} onSelectChange={handleSelectChange} />
          </div>
        </div>
        <div className=''>
          <div className={`${favorites.length === 0 ? '' : 'content_products'}`}>
            {favorites.length === 0 ? (
              <div className='flex items-center justify-center h-[40vh] text-4xl text-accent_primary'>
                <p>There are no product</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <CategoryList key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Favorite