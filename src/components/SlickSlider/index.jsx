import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiArrowNarrowRight className="w-6 h-6 fill-black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiArrowNarrowLeft className="w-6 h-6 fill-black" />
    </div>
  );
}
export default function SlickSlider({ visibleSlides = 3, children }) {
  return (
    <Slider
      centerMode={true}
      accessibility={true}
      slidesToShow={visibleSlides}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={5000}
      infinite={true}
      arrows={true}
      dots={true}
      adaptiveHeight={true}
      centerPadding="0"
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
      responsive={[
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ]}
      customPaging={(i) => {
        return (
          <span className="blue-dot w-3 h-3 inline-block rounded-full border border-gray-300"></span>
        );
      }}
      dotsClass="slick-dots slick-thumbs"
    >
      {children}
    </Slider>
  );
}
