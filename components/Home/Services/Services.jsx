import React, { useState } from "react";
import styles from "./Services.module.css";
import Heading from "../common/Heading/Heading";
import Image from "next/image";
import market from "../../../public/assets/serviceAssets/market.png";
import ui from "../../../public/assets/serviceAssets/ui.png";
import web from "../../../public/assets/serviceAssets/web.png";
import CourseCard from "../common/CourseCard/CourseCard";

const data = [
  {
    logo: web,
    heading: "User Experience",
    para: "Lessons on design that cover the most recent developments.",
    link: "https://forms.gle/cYgDjY7qJCLVER9w5",
  },
  {
    logo: ui,
    heading: "IT Services",
    para: "Classes in development that cover the most recent advancements in web.",
    link: "https://forms.gle/cYgDjY7qJCLVER9w5", 
  },
  {
    logo: market,
    heading: "Non-IT Services",
    para: "Marketing courses that cover the most recent marketing trends",
    link: "https://forms.gle/cYgDjY7qJCLVER9w5", 
  },
];

const Services = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLearnMore = (link) => {
    // Open the Google Form URL in a new tab
    window.open(link, "_blank");
  };

  return (
    <>
      <section className={styles.services_container} id="services">
        <Heading
          para1={"Our Services"}
          heading={"Fostering a playful & engaging learning environment"}
          para2={""}
        />
        <div className={styles.services}>
          {data.map((item, index) => {
            return (
              <div className={styles.service} key={index}>
                <div className={styles.row1}>
                  <div className={styles.image_container}>
                    <Image src={item.logo} />
                  </div>
                  <h1 className={styles.heading}>{item.heading}</h1>
                </div>
                <p className={styles.para}>{item.para}</p>
                <h2
                  className={styles.learn_more}
                  onClick={() => handleLearnMore(item.link)}
                >
                  Learn More
                </h2>
              </div>
            );
          })}
        </div>
      </section>
      {/* Render the course cards based on the activeLink state */}
      {activeLink && <CourseCard link={activeLink} />}
    </>
  );
};

export default Services;
