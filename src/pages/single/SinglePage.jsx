import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Product from '@/components/singlePage/Product'

const SinglePage = () => {
  const { productId } = useParams()
  const { data: products } = useSelector((state) => state.product)

  return (
    <section>
      <div>
        {products
          .filter((product) => product.id === productId)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </section>
  )
}
export default SinglePage
