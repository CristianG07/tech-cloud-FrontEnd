export const InputForm = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      className={
        'block w-full rounded-lg py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-dark_primary sm:text-sm' +
        className
      }
      {...props}
    />
  )
}
