'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import green from '../../../../public/green.jpg';
import red from '../../../../public/red.jpg';
import water from '../../../../public/water.jpg';

import styles from './styles.module.css';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const SliderComponent = () => {
  return (
    <div className={styles.root}>
      <Slider {...settings} className={styles.root}>
        <Image src={green} alt="green" className={styles.img} />
        <Image src={red} alt="red" className={styles.img} />
        <Image src={water} alt="water" className={styles.img} />
      </Slider>
    </div>
  );
};
