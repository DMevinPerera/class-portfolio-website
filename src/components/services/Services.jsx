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
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on giving more to students
          <br /> than an outdated syllabus
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Empowering</motion.b> Minds
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unlocking</motion.b> Potential.
          </h1>
          <button>REGISTER</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>A/L 2025 ONLINE</h2>
          <p>
            Time : Saturday 7.00PM - 10.00PM
          </p>
          <p>
            Fees : Rs.2,000
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>A/L 2024 REVISION</h2>
          <p>
            Time : Sunday 7.00PM - 10.00PM
          </p>
          <p>
            Fees : FREE
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>GRADE 11</h2>
          <p>
            Time : Tuesday 6.00PM - 8.00PM
          </p>
          <p>
            Fees : Rs.1,000
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>GRADE 10</h2>
          <p>
            Time : Wednesday 6.00PM - 8.00PM
          </p>
          <p>
            Fees : Rs.1,000
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>WHATSAPP CHANNEL</h2>
          <p>
            For Free Notes, Tutes and Seminars.
          </p>
          <p>
           Stay connected with us on the Whatsapp Channel
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
