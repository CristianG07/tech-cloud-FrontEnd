import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setOpenSidebar } from '@/redux/products/toggleSlice'

export const Categories = ({ className, name, text }) => {
  const dispatch = useDispatch()

  return (
    <div className={`text-sm text-dark ${className}`}>
      <Link
        onClick={() => dispatch(setOpenSidebar(false))}
        to={`/category/${name}/brand/${text}`}
      >
        {text}
      </Link>
    </div>
  )
}
