import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleFilter = () => {};

  return (
    <>
      <h2 className="head-text">
        my creative<span> portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (work, index) => (
            <div
              key={index}
              onClick={() => handleFilter(work)}
              className={`app__work-filter-item app_flex p-text ${
                activeFilter === work ? "item-active" : ""
              }`}
            >
              {work}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      ></motion.div>
    </>
  );
};

export default Work;
