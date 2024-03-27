import { Facebook } from "../icons/Facebook"
import { Instagram } from "../icons/Instagram"
import { Twitter } from "../icons/Twitter"

export const Socials = ({className}) => {

  return (
    <div className={`flex justify-center gap-5 ${className}`}>
      <a href='https://www.instagram.com/' className='w-fit' target='_blank'>
        <div className='min-w-full'>
          <Instagram className='fill-dark_primary hover:fill-dark duration-700' />
        </div>
      </a>
      <a href='https://www.facebook.com/' className='w-fit' target='_blank'>
        <div className='min-w-full group'>
          <Facebook className='fill-dark_primary hover:fill-dark duration-700' />
        </div>
      </a>
      <a href='https://twitter.com/' className='w-fit' target='_blank'>
        <div className='min-w-full group'>
          <Twitter className='fill-dark_primary hover:fill-dark duration-700' />
        </div>
      </a>
    </div>
  )
}
