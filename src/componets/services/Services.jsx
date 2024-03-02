import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      className="services"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          I focus on Improving
          <br />a brand's online Impression
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="./people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>Design</h1>
          <p>
            I help design your vision, and gague the feasibility of it in
            execution.
          </p>
          <button>G0</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>Develop</h1>
          <p>I help bring the design into a tanagable end product.</p>
          <button>G0</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>Test</h1>
          <p>
            I test the design and functionality over multiple browsers to ensure
            smooth launch.
          </p>
          <button>G0</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>launch</h1>
          <p>I help launch and host site your site. </p>
          <button>G0</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
