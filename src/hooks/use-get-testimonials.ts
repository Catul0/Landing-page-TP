import { useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

  const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

const useGetTestimonials = () =>{
    useEffect(() => {
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
          setTestimonials(result);
        });
      });
  }, []);

  return {
    testimonials
  }
}

export default useGetTestimonials;