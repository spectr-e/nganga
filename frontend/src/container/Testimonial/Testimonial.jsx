import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useEffect, useState } from "react";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testsQuery = '*[_type == "testimonials"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });

    client.fetch(testsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return <div>Testimonial</div>;
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonials"),
  "testimonials",
  "app__primarybg"
);
