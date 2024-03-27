export const Cualities = ({ title, text, icon }) => {

  return (
    <div className='flex justify-normal md:justify-center items-center gap-4'>
      <div className="w-14 sm:w-12 lg:w-16">
        <img src={icon} alt={title} />
      </div>
      <div className="text-nowrap">
        <h5 className="text-3xl sm:text-2xl lg:text-3xl font-semibold">{title}</h5>
        <p className="text-xs lg:text-sm">{text}</p>
      </div>
    </div>
  )
}
