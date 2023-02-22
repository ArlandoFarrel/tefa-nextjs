import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/styles/Swiper.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000,
                  disableOnInteraction: false  
                }}
    //   navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className={styles.img} src="/assets/swip1.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img className={styles.img} src="/assets/s.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img className={styles.img} src="/assets/swip3.jpg" alt=""/></SwiperSlide>
      {/* <SwiperSlide><img src="/assets/img/dila.JPG" alt=""/></SwiperSlide> */}
    </Swiper>
  );
};