import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const slides =[
  {
    "src": "https://picsum.photos/seed/img1/600/400",
    "alt": "Image 1 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img2/600/400",
    "alt": "Image 2 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img3/600/400",
    "alt": "Image 3 for carousel"
  },
  // {
  //   "src": "https://picsum.photos/seed/img1/600/400",
  //   "alt": "Image 1 for carousel"
  // },
  // {
  //   "src": "https://picsum.photos/seed/img2/600/400",
  //   "alt": "Image 2 for carousel"
  // },  
  // {
  //   "src": "https://picsum.photos/seed/img3/600/400",
  //   "alt": "Image 3 for carousel"
  // }
]

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={slides[0].src} />
    <img src={slides[0].src} />
    <img src={slides[0].src} />
  </Carousel>
);

export default MyCarousel;