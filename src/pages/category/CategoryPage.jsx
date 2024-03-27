import { useSelector, useDispatch } from 'react-redux'
import { CategoryList } from '@/components/home/CategoryList'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Select } from '../../components/ui/Select'

const CategoryPage = () => {
  const { categoryName } = useParams()
  const { data: products } = useSelector((state) => state.category)
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
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary capitalize flex gap-2'>
            <Link to='/'>Home</Link> /<span>{categoryName}</span>
          </div>
          <div className='hidden md:block'>
            <Select selectedOption={selectedOption} onSelectChange={handleSelectChange} />
          </div>
        </div>
        <div>
          <div className='content_products'>
            {filteredProducts.map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
