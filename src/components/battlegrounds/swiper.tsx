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

function SwiperComponent({ images }: Props) {
  return (
    <section className="w-full hover:cursor-grab active:cursor-grabbing">
      <swiper-container
        //   REMEMBER TO USE PARAMETERS AS "kebab-case"
        //   e.g. use "slides-per-view" instead of "slidesPerView"
        slides-per-view="1"
        loop
        navigation
        pagination
        pagination-clickable="true"
        autoplay
        // allow the user to read the content
        autoplay-pause-on-mouse-enter="true"
        // fix issues with the height being different and extra empty space being added
        auto-height
        observer
        observe-parents
      >
        {images.map((image) => (
          <swiper-slide key={image.key}>{image}</swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

export default SwiperComponent;
