// This is using Swiper Element instead of Swiper React due to the following warning:
// "Swiper React components will likely to be removed in future versions.
// It is recommended to migrate to Swiper Element instead."

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

type Props = {
  images: JSX.Element[];
};

function SwiperCoverflowComponent({ images }: Props) {
  return (
    <section className="w-full">
      <swiper-container
        //   REMEMBER TO USE PARAMETERS AS "kebab-case"
        //   e.g. use "slides-per-view" instead of "slidesPerView"
        effect="coverflow"
        grab-cursor="true"
        slides-per-view="2"
        initial-slide="1"
        loop
        navigation
        coverflow-effect-rotate="0"
        coverflow-effect-stretch="500"
        coverflow-effect-depth="200"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="false"
      >
        {images.map((image) => (
          <swiper-slide key={image.key}>{image}</swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

export default SwiperCoverflowComponent;
