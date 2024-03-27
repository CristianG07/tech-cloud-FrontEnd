import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CategoryList } from '@/components/home/CategoryList'
import { Title } from '@/components/home/Title'

const Home = () => {
  const [numToShow, setNumToShow] = useState(10)
  const { data: products } = useSelector((state) => state.product)
  const [startIndexByCategory, setStartIndexByCategory] = useState({
    'best sellers': 0,
    'mobile phones': 0,
    tablets: 0,
    laptops: 0,
    accessories: 0
  })

  const handleShowMoreAll = () => {
    setNumToShow(numToShow + 5)
  }

  const filterByCategory = (category) => {
    return products.filter((product) => product.category === category)
  }

  const handleShowMore = (category) => {
    setStartIndexByCategory((prevState) => ({
      ...prevState,
      [category]: prevState[category] + 5
    }))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className='container_products pb-0 max-w-7xl'>
      <section className='hidden lg:grid content_products'>
        {products.slice(0, numToShow).map((product) => (
          <CategoryList key={product.id} {...product} />
        ))}
      </section>

      {products.length > numToShow && (
        <div className='btn_show_all lg:justify-end hidden lg:flex'>
          <button onClick={handleShowMoreAll}>See all products</button>
        </div>
      )}

      {[
        'best sellers',
        'mobile phones',
        'tablets',
        'laptops',
        'accessories'
      ].map((category) => (
        <section key={category} className='mb-20 mt-5 lg:mt-20'>
          <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
          <div className='content_products'>
            {filterByCategory(category)
              .slice(0, startIndexByCategory[category] + 5)
              .map((product) => (
                <CategoryList key={product.id} {...product} />
              ))}
          </div>
          <div className='btn_show_all'>
            <button onClick={() => handleShowMore(category)}>
              See all products
            </button>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Home
