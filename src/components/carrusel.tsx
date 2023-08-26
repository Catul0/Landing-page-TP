import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ComentariosCarrousel from './ComentariosCarrousel';
import { useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

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
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
  };
  const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
          setTestimonials(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
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
          {testimonials.map((testimonial) => (
            <div className="card" key={testimonial.fullName}>

              <ComentariosCarrousel imagen={testimonial.avatar} nombre={testimonial.fullName} comentario={testimonial.testimonial} />

            </div>
          ))}
        </Slider>
      </div>
    </div>
    <div className='mb-24 mt-16 pb-16 px-24 2xl:px-[350px] lg:hidden ' id='testimonios2'>

      <div className='text-center mb-16'>
        <div className= "m-auto">
          <h2 className="text-[36px]"><b>Trusted by Thousands of Happy Customer</b></h2>
        </div>
        <div className="  m-auto">
          <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
      </div>
      <div className='m-auto'>
        <Slider {...settings2}>
          {testimonials.map((testimonial) => (
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