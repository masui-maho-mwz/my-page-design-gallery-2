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
    <div>
      <Slider {...settings} className={styles.root}>
        {images.map(({ id, src, alt }) => (
          <div key={id} className={styles.wrap}>
            <Image src={src} alt={alt} layout="responsive" width={1440} height={900} className={styles.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
