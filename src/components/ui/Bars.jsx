import { useSelector } from 'react-redux'

export const Bars = () => {
  const { isSidebarOpen } = useSelector((state) => state.toggle)
  return (
    <div>
      <div className={`grid justify-items-center gap-1.5 ${!isSidebarOpen && ''}`}>
        <div className={`w-full h-[3px] rounded-full bg-dark ${isSidebarOpen && '-rotate-45 translate-y-2.5'} transition duration-300`} />
        <div className={`w-full h-[3px] rounded-full bg-dark ${isSidebarOpen && 'opacity-0'} transition duration-100`} />
        <div className={`w-full h-[3px] rounded-full bg-dark ${isSidebarOpen && 'rotate-45 -translate-y-2'} transition duration-300`} />
      </div>
    </div>
  )
}
