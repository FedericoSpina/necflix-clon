import { Navigation, Pagination } from "swiper";

export const sliderProps = {
  /* slidesPerView: 6,
  slidesPerGroup: 4, */
  breakpoints: {
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 4,
    },
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1025: {
      slidesPerView: 2,
      slidesPerGroup: 3,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    400: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  },
  grabCursor: true,
  scrollbar: true,
  navigation: true,
  //   pagination: {
  //     clickable: true,
  //   },
  modules: [Navigation, Pagination],
};
