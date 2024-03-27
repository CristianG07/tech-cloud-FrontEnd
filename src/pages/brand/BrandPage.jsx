import { useSelector, useDispatch } from 'react-redux'
import { CategoryList } from '@/components/home/CategoryList'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProductsByBrands } from '@/redux/products/brandSlice'
import { Select } from '../../components/ui/Select'

const BrandPage = () => {
  const dispatch = useDispatch()
  const { categoryName, brandName } = useParams()
  const { data: products } = useSelector((state) => state.brand)
  const [selectedOption, setSelectedOption] = useState('Sort by popularity');
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSelectChange = (option) => {
    setSelectedOption(option)
    if (option === 'Alphabetically') {
      const sortedProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(sortedProducts);
    } else if (option === 'Price') {
      const sortedProducts = products.slice().sort((a, b) => a.actual_price - b.actual_price);
      setFilteredProducts(sortedProducts);
    }
  }

  useEffect(() => {
    if (brandName) {
      dispatch(fetchProductsByBrands(categoryName,brandName))
    }
  }, [categoryName, brandName, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary capitalize flex gap-2'>
            <Link to='/'>Home</Link> /<span>{brandName}</span>
          </div>
          <div className='hidden md:block'>
            <Select selectedOption={selectedOption} onSelectChange={handleSelectChange} />
          </div>
        </div>
        <div className=''>
          <div className={`${products.length === 0 ? '' : 'content_products'}`}>
            {products.length === 0 ? (
              <div className='flex items-center justify-center h-[50vh] text-4xl text-accent_primary'>
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
export default BrandPage
