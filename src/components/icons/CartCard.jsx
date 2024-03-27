export const CartCard = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={22}
      fill='none'
      stroke='#3F51B5'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.1}
        d='M1.306 1.571H3.31l.858 3.089m0 0 2.86 10.294h14.875l2.86-10.294H4.167Z'
      />
      <path
        stroke='#3F51B5'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.8}
        d='M6.963 20.429c.81 0 1.468-.681 1.468-1.521 0-.84-.658-1.52-1.468-1.52-.81 0-1.468.68-1.468 1.52s.657 1.52 1.468 1.52ZM21.622 20.429c.811 0 1.468-.681 1.468-1.521 0-.84-.657-1.52-1.468-1.52-.81 0-1.467.68-1.467 1.52s.657 1.52 1.467 1.52Z'
      />
    </svg>
  )
}
