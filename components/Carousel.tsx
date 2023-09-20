import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import model from '../public/images/model.jpg'
import Image from 'next/image';
const items = [
    {
      id: 1,
      content: (
        <div className='m-4 p-2'>
           <Image
          src={model}
          alt="model"
          height={400}
        />
          <p className="legend">Image 1</p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className='m-4 p-2'>
          <Image
          src={model}
          alt="model"
          height={400}
        />
          <p className="legend">Image 2</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className='m-4 p-2'>
         <Image
          src={model}
          alt="model"
          height={400}
        />
          <p className="legend">Image 3</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className='m-4 p-2'>
         <Image
          src={model}
          alt="model"
          height={400}
        />
          <p className="legend">Image 4</p>
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div className='m-4 p-2'>
          <Image
          src={model}
          alt="model"
          height={400}
        />
          <p className="legend">Image 1</p>
        </div>
      ),
    }
  ];

function Carousel() {


    const CustomArrow = ({ onClick, name }:any) => (
        <div
          className={`absolute top-1/2 z-10 transform -translate-y-1/2 ${
            name === 'L' ? 'left-2' : 'right-2'
          } cursor-pointer bg-white p-2 rounded-full hover:bg-gray-300`}
          onClick={onClick}
        >
          <p>{name}</p>
        </div>
      );
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    prevArrow: <CustomArrow name={'L'} />,
    nextArrow: <CustomArrow name={'R'} />,
  };




  return (
    <section className="flex justify-center items-center max-w-[1200px] m-auto">
    <div className="max-w-[100%]">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="flex justify-center">
            {item.content}
          </div>
        ))}
      </Slider>
    </div>
  </section>
);
}

export default Carousel;
