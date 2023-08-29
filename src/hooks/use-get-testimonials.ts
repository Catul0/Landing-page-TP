import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

const useGetTestimonials = () => {
  const [result, setResult] = useState<Testimonial[]>([]);


  const handleGetData = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/testimonial`);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.log(err)
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    result,

  };
};

export default useGetTestimonials;