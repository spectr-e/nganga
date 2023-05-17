import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "../../constants";
import "./About.scss";
const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I am a good web developer.",
      imageurl: images.about01,
    },
    {
      title: "Web Design",
      description: "I am a good web developer.",
      imageurl: images.about02,
    },
    {
      title: "UI/UX",
      description: "I am a good web developer.",
      imageurl: images.about03,
    },
    {
      title: "Web Animation",
      description: "I am a good web developer.",
      imageurl: images.about04,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I know that
        <span>good design</span>
        <br />
        means
        <span>good business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={about.imageurl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
