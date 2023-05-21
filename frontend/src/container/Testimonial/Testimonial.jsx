import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
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

  const test = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial app__flex">
            <img src={urlFor(test.imageUrl)} alt="testimonials" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
            </div>
            <h4 className="bold-text">{test.name}</h4>
            <h5 className="p-text">{test.company}</h5>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  // if we are at the first index, we move to the last testimonial, else we move to the next testimonial
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  // if we are at the last index, we move to the first testimonial, else we move to the next testimonial
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div
            transition={{ duration: 0.5, type: "tween" }}
            whileInView={{ opacity: [0, 1] }}
            className="app"
            key={index}
          >
            <img src={urlFor(brand.imageUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
