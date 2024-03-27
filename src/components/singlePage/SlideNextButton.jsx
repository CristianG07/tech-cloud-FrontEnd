import { useSwiper } from "swiper/react";
import { GrFormNext } from "react-icons/gr";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <GrFormNext size={35} className="sliceBtn" />
    </button>
  );
}