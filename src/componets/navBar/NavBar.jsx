import SideBar from "../sideBar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          intial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.8 }}
        >
          Ericka Erickson{" "}
        </motion.span>
        <div className="social">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ericka-erickson-7320872a3/"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            target="_blank"
            href="https://github.com/eerickson2017/2017erickae.github.io"
          >
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
