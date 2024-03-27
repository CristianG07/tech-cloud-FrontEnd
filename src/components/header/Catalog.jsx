import { Categories } from './Categories'
import {
  Accessories,
  desktops,
  laptops,
  mobile_phones,
  tablets
} from '@/utils/data'

export const Catalog = () => {
  return (
    <div className='space-y-5 pb-5 border-b-2 border-light_secondary'>
      <div className='flex justify-between gap-3'>
        <div className='grid gap-2'>
          <h4 className='title_categories'>Mobile phones</h4>
          {mobile_phones.map((item, i) => (
            <Categories key={i} name={'Mobile phones'} {...item} />
          ))}
        </div>
        <div className='grid gap-2'>
          <h4 className='title_categories'>Tablets</h4>
          {tablets.map((item, i) => (
            <Categories key={i} name={'Tablets'} {...item} />
          ))}
        </div>
        <div className='grid gap-2'>
          <h4 className='title_categories'>Laptops</h4>
          {laptops.map((item, i) => (
            <Categories key={i} name={'Laptops'} {...item} />
          ))}
        </div>
      </div>
      <div className='flex gap-5 justify-between'>
        <div className='grid gap-2'>
          <h4 className='title_categories'>Desktops</h4>
          {desktops.map((item, i) => (
            <Categories key={i} name={'Desktops'} {...item} />
          ))}
        </div>
        <div className='grid gap-2'>
          <h4 className='title_categories'>Accessories</h4>
          {Accessories.map((item, i) => (
            <Categories key={i} name={'Accessories'} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
