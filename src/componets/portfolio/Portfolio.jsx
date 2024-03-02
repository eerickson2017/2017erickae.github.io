import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-commerce Site",
    img: "./ecommerce.png",
    desc: "This is a responsive  e-commerce site that has an about, blog, contact, shop, and checkout page. Made to showcase ability and skill as well as design eye, it is still a work in progress on the javascript side but is finished on the css and html side.",
    link: "https://eerickson2017.github.io/erickae.github.io/ecomerce-project/",
  },
  {
    id: 2,
    title: "Promotional Email",
    img: "./thriveEmail.png",
    desc: "This email is a responsive  promotional email I recreated from my own email promotions. To showcase my html, css, and photoshop skills on a high standard marketing level.",
    link: "https://eerickson2017.github.io/erickae.github.io/Promotional-email/",
  },

  {
    id: 3,
    title: "Newsletter Email",
    img: "./newsletter.png",
    desc: "This email is a  responsive newsletter email I recreated to stylishly and efficiently deliver information to a consumer. It  showcases  my skills and ability to perform at a high level with  quality and  precision in mind in an informative environment.",
    link: "https://eerickson2017.github.io/erickae.github.io/Newsletter-email/",
  },
  {
    id: 4,
    title: "Transactional Email",
    img: "./marriotEmail.png",
    desc: "This email is a responsive transactional email from a past reservation at the Marriott resort. Recreated to showcase my ability to produce high quality emails to deliver vital information elegantly, and efficiently under transactional circumstances.",
    link: "https://eerickson2017.github.io/erickae.github.io/Transaction-email/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a target="_blank" href={item.link}>
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 900,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
