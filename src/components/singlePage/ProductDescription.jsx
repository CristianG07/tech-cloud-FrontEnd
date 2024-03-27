export const ProductDescription = ({ description, title }) => {
  return (
    <div className='font-medium text-pretty'>
      <h5 className='font-bold'>{title}</h5>
      <p>{description}</p>
    </div>
  )
}
