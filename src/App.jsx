import { Routes, Route} from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// pages
import Home from './pages/home/Home'
import SinglePage from './pages/single/SinglePage'
import CategoryPage  from './pages/category/CategoryPage'
import Basket from './pages/basket/Basket'
import Profile from './pages/profile/Profile'
import BrandPage from './pages/brand/BrandPage'
import SearchPage from './pages/search/SearchPage'
import Favorite from './pages/favorite/Favorite'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search/:searchName' element={<SearchPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/category/:categoryName/brand/:brandName" element={<BrandPage />} />
          <Route path='/category/:categoryName/brand/:brandName/product/:productId' element={<SinglePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
