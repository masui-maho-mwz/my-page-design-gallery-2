'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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
      <Slider {...settings}>
        {images.map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} width={540} height={540} />
        ))}
      </Slider>
    </div>
  );
};
