import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { InputForm } from '@/components/ui/InputForm'
import { Button } from '@/components/ui/button'
import { profile } from '@/utils/data'
import { profile_blue } from '@/assets/images'
import { useEffect } from 'react'

function Profile() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products grid gap-10'>
      <div>
        <div className='text-accent_primary capitalize flex gap-2'>
          <Link to='/'>Home</Link> /<span>Profile</span>
        </div>
      </div>
      <div className='flex items-center gap-5 text-dark_primary'>
        <div className='w-10'>
          <img src={profile_blue} alt='profile_blue' />
        </div>
        <h4 className='text-2xl md:text-3xl font-medium'>Adam Kowalski</h4>
      </div>
      <div>
        <form
          className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2'
          action='#'
          method='POST'
        >
          <div className='col-span-2 lg:col-span-1'>
            <div className='space-y-3'>
              {profile.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className='w-fit flex items-center gap-5'
                >
                  <div className='w-6'>
                    <img src={item.icon} alt={item.text} />
                  </div>
                  {item.text}
                </Link>
              ))}
            </div>
            <div className='space-y-2 mt-10'>
              <h4 className='title_single_product text-xl font-medium my-5'>
                User data
              </h4>
              <div className='grid_basket'>
                <div>
                  <Label htmlFor='firstname'>First name</Label>
                  <div>
                    <InputForm name='firstname' type='text' required />
                  </div>
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <div>
                    <InputForm
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='grid_basket'>
                <div>
                  <Label htmlFor='lastname'>Last name</Label>
                  <div>
                    <InputForm name='lastname' type='text' required />
                  </div>
                </div>
                <div>
                  <Label htmlFor='phone'>Phone number</Label>
                  <div>
                    <InputForm name='phone' type='text' required />
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <Button
                  type='button'
                  className='rounded-xl bg-light_secondary px-10 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className='space-y-2 pt-5'>
              <h4 className='title_single_product text-xl font-medium my-5'>
                Delivery data
              </h4>
              <div className='grid_basket'>
                <div>
                  <Label htmlFor='street'>Street</Label>
                  <div>
                    <InputForm name='street' type='text' required />
                  </div>
                </div>
                <div>
                  <Label htmlFor='city'>City</Label>
                  <div>
                    <InputForm name='city' type='text' required />
                  </div>
                </div>
              </div>
              <div className='grid_basket'>
                <div>
                  <Label htmlFor='building'>Building/ flat</Label>
                  <div>
                    <InputForm name='building' type='text' required />
                  </div>
                </div>
                <div>
                  <Label htmlFor='phone'>Postal code</Label>
                  <div>
                    <InputForm name='phone' type='text' required />
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-6'>
              <Button
                type='button'
                className='rounded-xl bg-light_secondary px-10 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
              >
                Edit
              </Button>
            </div>
          </div>
        </form>
        <div className='space-y-1 mt-8 text-lg text-accent_primary'>
          <div>
            <button>Change password</button>
          </div>
          <div>
            <button>Log out</button>
          </div>
          <div>
            <button>Delete account</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Profile
