export const Contact = ({ text, icon }) => {

  return (
    <div className='flex gap-2 items-center mt-2'>
      <div className="min-w-fit">
        <img src={icon} alt={text} />
      </div>
      <div className="max-w-48">
        <p>{text}</p>
      </div>
    </div>
  )
}
