import { error } from "@/assets/images"

export const Error = () => {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
        <div className="w-72">
            <img src={error} alt="error" />
        </div>
    </div>
  )
}