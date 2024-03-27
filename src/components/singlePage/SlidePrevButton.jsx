import { useSwiper } from "swiper/react"
import { GrFormPrevious } from "react-icons/gr";


export const SlidePrevButton = () => {
  const swiper = useSwiper()

  return (
    <button onClick={() => swiper.slidePrev()}>
      <GrFormPrevious size={35} className="sliceBtn" />
    </button>
  )
}