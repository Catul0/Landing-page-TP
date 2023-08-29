import useGetTestimonials from '../hooks/use-get-testimonials'; 
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ComentariosCarrousel from './ComentariosCarrousel';


const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const {result} = useGetTestimonials();
  
  return (
    
    <>
    <div className='mb-24 mt-16 pb-16 px-24 2xl:px-[350px] hidden lg:block' id='testimonios'>

      <div className='text-center mb-16'>
        <div className="w-[50%] m-auto">
          <h2 className="text-[36px]"><b>Trusted by Thousands of Happy Customer</b></h2>
        </div>
        <div className="w-[45%]  m-auto">
          <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {result.map((testimonial) => (
            <div className="card" key={testimonial.fullName}>

              <ComentariosCarrousel imagen={testimonial.avatar} nombre={testimonial.fullName} comentario={testimonial.testimonial} />

            </div>
          ))}
        </Slider>
      </div>
    </div>
    {/*de aca para abajo esta el responsiv */}
    <div className='mb-24 mt-16 pb-16 px-4  lg:hidden ' id='testimonios2'>

      <div className='text-center mb-16'>
        <div className= "m-auto">
          <h2 className="text-[30px]"><b>Trusted by Thousands of Happy Customer</b></h2>
        </div>
        <div className="  m-auto text-[20px]">
          <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
      </div>
      <div className='m-auto'>
        <Slider {...settings2}>
          {result.map((testimonial) => (
            <div className="card" key={testimonial.fullName}>

              <ComentariosCarrousel imagen={testimonial.avatar} nombre={testimonial.fullName} comentario={testimonial.testimonial} />

            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Carousel;