import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Suspense, useEffect } from 'react'
import { Loader } from '@/components/loader/Loader'
import { Error } from '@/components/error/Error'
import { STATUS } from '@/utils/status'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '@/redux/products/productSlice'
import { getCartTotal } from '@/redux/products/cartSlice'

export const Layout = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { status: productStatus } = useSelector((state) => state.product)
  const { status: categoryStatus } = useSelector((state) => state.category)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(getCartTotal())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const isLoading =
    productStatus === STATUS.LOADING || categoryStatus === STATUS.LOADING
  const isError =
    productStatus === STATUS.ERROR || categoryStatus === STATUS.ERROR

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
      <Footer />
    </>
  )
}
