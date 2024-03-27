export const ProductDetail = ({ details, title }) => {
  return (
    <div className='flex justify-between text-pretty border-b'>
      <h5 className='font-medium text-nowrap'>{title}</h5>
      <p className="max-w-[53%] sm:max-w-[41%] text-sm text-accent_primary text-right">{details}</p>
    </div>
  )
}