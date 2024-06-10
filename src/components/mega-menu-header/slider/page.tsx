'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import styles from './styles.module.css';

type Image = {
  id: number;
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const SliderComponent = ({ images }: Props) => {
  return (
    <div className={styles.root}>
      <Slider {...settings} className={styles.root}>
        {images.map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} className={styles.img} width={540} height={540} />
        ))}
      </Slider>
    </div>
  );
};
