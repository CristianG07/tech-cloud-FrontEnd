// images
import {
  cart_sidebar,
  eye,
  heart_light_sidebar,
  heart_profile,
  information_circle_sidebar,
  mail,
  map,
  payments,
  phone,
  premium,
  shopping_outline,
  tabler_list,
  truck
} from '@/assets/images'

export const tabsNav = [
  {
    name: 'Mobile phones',
    brands: [
      { text: 'Apple' },
      { text: 'Samsung' },
      { text: 'Motorola' },
      { text: 'Xiaomi' },
      { text: 'Oppo' }
    ]
  },
  {
    name: 'Tablets',
    brands: [
      { text: 'Apple' },
      { text: 'Samsung' },
      { text: 'Lenovo' },
      { text: 'Xiaomi' },
      { text: 'LG' }
    ]
  },
  {
    name: 'Laptops',
    brands: [
      { text: 'Apple' },
      { text: 'HP' },
      { text: 'Lenovo' },
      { text: 'Dell' },
      { text: 'ASUS' }
    ]
  },
  {
    name: 'Desktops',
    brands: [
      { text: 'Monitors' },
      { text: 'Keyboards and mouses' },
      { text: 'Loud speakers' },
      { text: 'Computer softwares' },
      { text: 'Adapters' }
    ]
  },
  {
    name: 'Accessories',
    brands: [
      { text: 'Protective glasses' },
      { text: 'Cases and covers' },
      { text: 'Chargers' },
      { text: 'Head phones' },
      { text: 'Cables and adapters' }
    ]
  }
]

export const cualities_footer = [
  { title: 'Fast delivery', text: 'Delivery up to 5 days', icon: truck },
  {
    title: 'Quick payment',
    text: 'Choose your payment method',
    icon: payments
  },
  { title: 'Best quality', text: 'Only original products', icon: premium }
]

export const sidebar = [
  { text: 'Help Center', icon: information_circle_sidebar, link: '/profile' },
  { text: 'Wish list', icon: heart_light_sidebar, link: '/favorite' },
  { text: 'Bucket', icon: cart_sidebar, link: '/basket' }
]

export const profile = [
  { text: 'My orders', icon: tabler_list, link: '/' },
  { text: 'My basket', icon: shopping_outline, link: '/basket' },
  { text: 'Wish list', icon: heart_profile, link: '/favorite' },
  { text: 'Viewed products', icon: eye, link: '/' }
]

export const contact_info = [
  { text: 'Świerkowa 15, Warsaw, 00-123, Poland', icon: map },
  { text: '+48 440 500 600', icon: phone },
  { text: 'tech_cloud@gmail.com', icon: mail }
]

export const links_footer = [
  { text: 'FAQ', link: '/' },
  { text: 'About us', link: '/' },
  { text: 'Terms and conditions', link: '/' },
  { text: 'Privacy policy', link: '/' },
  { text: 'Cookies policy', link: '/' }
]

export const links_footer2 = [
  { text: 'Payment', link: '/' },
  { text: 'Shipping', link: '/' },
  { text: 'Guarantee', link: '/' },
  { text: 'Returns policy', link: '/' },
  { text: 'Cooperation', link: '/' }
]

export const mobile_phones = [
  { text: 'Apple', link: '/Apple' },
  { text: 'Samsung', link: '/Samsung' },
  { text: 'Motorola', link: '/Motorola' },
  { text: 'Xiaomi', link: '/Xiaomi' },
  { text: 'Oppo', link: '/Oppo' }
]

export const tablets = [
  { text: 'Apple', link: '/Apple' },
  { text: 'Samsung', link: '/Samsung' },
  { text: 'Lenovo', link: '/Lenovo' },
  { text: 'Xiaomi', link: '/Xiaomi' },
  { text: 'LG', link: '/LG' }
]

export const laptops = [
  { text: 'Apple', link: '/Apple' },
  { text: 'HP', link: '/HP' },
  { text: 'Lenovo', link: '/Lenovo' },
  { text: 'Dell', link: '/Dell' },
  { text: 'ASUS', link: '/ASUS' }
]

export const desktops = [
  { text: 'Monitors', link: '/Monitors' },
  { text: 'Keyboards and mouses', link: '/Keyboards and mouses' },
  { text: 'Loud speakers', link: '/Loud speakers' },
  { text: 'Computer softwares', link: '/Computer softwares' },
  { text: 'Adapters', link: '/Adapters' }
]

export const Accessories = [
  { text: 'Protective glasses', link: '/Protective glasses' },
  { text: 'Cases and covers', link: '/Cases and covers' },
  { text: 'Chargers', link: '/Chargers' },
  { text: 'Head phones', link: '/Head phones' },
  { text: 'Cables and adapters', link: '/Cables and adapters' }
]
