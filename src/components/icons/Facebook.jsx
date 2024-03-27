export const Facebook = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      fill='none'
      {...props}
    >
      <rect width={40} height={40} rx={20} />
      <path
        stroke='#BDBDBD'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.8}
        d='M27 8h-3.818c-1.688 0-3.306.632-4.5 1.757-1.193 1.126-1.864 2.652-1.864 4.243v3.6H13v4.8h3.818V32h5.091v-9.6h3.818L27 17.6h-5.09V14c0-.318.133-.623.372-.848.238-.226.562-.352.9-.352H27V8Z'
      />
    </svg>
  )
}
