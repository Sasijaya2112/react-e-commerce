import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slide1 from './Slide Images/slide1.png';
import slide2 from './Slide Images/slide2.png'
import slide3 from './Slide Images/slide3.png'

function TopCarousel() {
  return (
    <Carousel className='mt-5'>
      <Carousel.Item>
        <Image src={slide1} className='w-100'></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={slide2} className='w-100'></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={slide3} className='w-100'></Image>
      </Carousel.Item>
    </Carousel>
  );
}

export default TopCarousel;