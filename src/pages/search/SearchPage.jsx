import { useSelector, useDispatch } from 'react-redux'
import { CategoryList } from "@/components/home/CategoryList"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { fetchProductsBySearch } from '@/redux/products/searchSlice'
import { Select } from '../../components/ui/Select'

const SearchPage = () => {
  const dispatch = useDispatch()
  const { searchName } = useParams()
  const { data: products } = useSelector((state) => state.search)
  const [selectedOption, setSelectedOption] = useState('Sort by popularity');
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSelectChange = (option) => {
    setSelectedOption(option)
    let sortedProducts = [...products];
    const [sortBy, sortOrder] = option.split(' ');
    if (sortBy === 'Alphabetically') {
      sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Price') {
      sortedProducts = sortedProducts.sort((a, b) => a.actual_price - b.actual_price);
    }
    if (sortOrder === '(desc)') {
      sortedProducts = sortedProducts.reverse();
    }
    setFilteredProducts(sortedProducts);
  }

  useEffect(() => {
    if (searchName) {
      dispatch(fetchProductsBySearch(searchName))
    }
  }, [searchName, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary flex gap-2'>
            <Link to='/'>Home</Link> /<span>{searchName}</span>
          </div>
          <div className='hidden md:block'>
            <Select selectedOption={selectedOption} onSelectChange={handleSelectChange} />
          </div>
        </div>
        <div className=''>
          <div className={`${products.length === 0 ? '' : 'content_products'}`}>
            {products.length === 0 ? (
              <div className='flex items-center justify-center h-[40vh] text-4xl text-accent_primary'>
                <p>Product not found</p>
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
export default SearchPage