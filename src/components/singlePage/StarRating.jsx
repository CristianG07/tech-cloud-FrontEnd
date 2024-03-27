import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'

export const StarRating = ({ rating_star }) => {
  const star = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {rating_star >= index + 1 ? (
          <BsStarFill size={30} />
          ) : rating_star >= index + 0.5 ? (
            <BsStarHalf size={30} />
            ) : (
          <BsStarFill size={30} className='text-text_secondary' />
        )}
      </span>
    )
  })

  return (
    <>
      <div>
        <h4 className='title_single_product mb-3'>Rate the product</h4>
        <div className='flex gap-5 text-dark_primary'>{star}</div>
        <button className='text-light_secondary underline underline-offset-2 mt-3'>Leave the review</button>
      </div>
    </>
  )
}
