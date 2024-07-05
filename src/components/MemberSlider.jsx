import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function MemberSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className='w-full md:w-5/6 m-auto'>
      
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[300px] w-full text-black rounded-xl">
            <div className='h-56 bg-indigo-500 w-full flex justify-center items-center rounded-t-xl'>
              <Image src={d.img} alt="" height={1000} width={1000} className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="md:text-xl text-xs font-semibold">{d.name}</p>
            
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
      <p className="m-4 font-semibold p-3 text-[9px]">Scroll &larr; &rarr; to see members list</p>
    </div>
  );
}

const data = [
  {
    name: `Hapkido boxing international organisation`,
    img: `/members/1.jpeg`,
    review: ``
  },
  {
    name: `HBIO`,
    img: `/members/2.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing national federation`,
    img: `/members/3.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing north zone association`,
    img: `/members/4.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing north East states association`,
    img: `/members/5.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing west india association`,
    img: `/members/6.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing central states association`,
    img: `/members/7.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing south states association`,
    img: `/members/8.jpeg`,
    review: ``
  },
  {
    name: `Hapkido boxing east states association`,
    img: `/members/9.jpeg`,
    review: ``
  },
  
];

export default MemberSlider;