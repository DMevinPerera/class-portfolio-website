import { useRef, useState, useEffect } from "react";
import "./topstudents.scss";
import { motion, useAnimation, useInView } from "framer-motion";

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

const studentData = [
  {
    id: 1,
    photo: "/student1.jpg",
    school: "ABC High School",
    grades: "A+",
    marks: "95%",
  },
  {
    id: 2,
    photo: "/student2.jpg",
    school: "XYZ School",
    grades: "A",
    marks: "92%",
  },
  {
    id: 3,
    photo: "/student3.jpg",
    school: "DEF Academy",
    grades: "A-",
    marks: "88%",
  },
  {
    id: 4,
    photo: "/student4.jpg",
    school: "PQR Institute",
    grades: "B+",
    marks: "78%",
  },
  {
    id: 5,
    photo: "/student5.jpg",
    school: "LMN High School",
    grades: "A+",
    marks: "96%",
  },
  {
    id: 6,
    photo: "/student6.jpg",
    school: "GHI School",
    grades: "A",
    marks: "91%",
  },
  // Add data for other students
];

const TopStudents = () => {
  const ref = useRef();
  const controls = useAnimation();
  const isInView = useInView(ref, { triggerOnce: true });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % studentData.length);
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % studentData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? studentData.length - 1 : prevIndex - 1
    );
  };

  const visibleStudents = studentData.slice(currentIndex, currentIndex + 4);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={controls}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I prepare students to write answers
          <br /> for any ICT Question they face
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>ICT</motion.b> Best
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Performing</motion.b> Students.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {visibleStudents.map((student) => (
          <motion.div key={student.id} className="box">
            <motion.img
              src={student.photo}
              alt={`Student ${student.id}`}
              className="student-photo"
              whileHover={{ scale: 1.2 }}
            />
            <p className="school">{student.school}</p>
            <p className="grades">Grade: {student.grades}</p>
            <p className="marks">Marks: {student.marks}</p>
          </motion.div>
        ))}
     
        <motion.button onClick={handleNext} whileHover={{ scale: 1.2 }}>
          Next &gt;
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default TopStudents;