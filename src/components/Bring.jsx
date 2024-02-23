import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Bring = () => {
  return (
    <Div>
      <p className="offer">Check Out</p>
      <h1 className="our-service">
        EcoMotion Fleet: Revolutionizing Transportation
      </h1>
      <p className="sub-heading">
        Explore our cutting-edge electric vehicle shaping the future of
        sustainable mobility
      </p>

      <div className="kekes">
        <motion.div
          className="keke1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="assets/edit1.jpg" alt="" />
        </motion.div>
        <motion.div
          className="keke1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="assets/edit2.jpg" alt="" />
        </motion.div>
        <motion.div
          className="keke1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="assets/edit3.jpg" alt="" />
        </motion.div>
        <motion.div
          className="keke1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="assets/edit4.jpg" alt="" />
        </motion.div>
        <motion.div
          className="keke1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="assets/edit5.jpg" alt="" />
        </motion.div>
        <motion.div
          className="keke1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="assets/edit2.jpg" alt="" />
        </motion.div>
      </div>

      <Link to="/service">
        <motion.div
          className="more-info"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          More Info
        </motion.div>
      </Link>
    </Div>
  );
};

export default Bring;

const Div = styled.div`
  padding-top: 20px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  place-items: center;

  .offer {
    color: #7e57ff;
    text-align: center;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  .our-service {
    color: #081828;
    text-align: center;
    font-family: DM Sans;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  .sub-heading {
    color: #727272;
    text-align: center;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  .kekes {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    place-items: center;
    gap: 100px;
  }

  .keke1 {
    border-radius: 6px;
    height: 400px;
    max-width: 416px;
    margin-top: 20px;
  }

  .keke1 img {
    transition: all 0.5s ease-in-out;
  }

  .more-info {
    border-radius: 30px;
    background: #7e57ff;
    padding: 15px 29.487px 15.5px 30px;
    width: 200px;
    color: white;
    font-family: Dm Sans;
    text-align: center;
    margin-top: 20px;
  }

  .keke1 img:hover {
    scale: 1.1;
    box-shadow: 0px 0px 30px 0px rgba(81, 94, 125, 0.08);
    border-radius: 15px;
    border-top: 5px solid #7e57ff;
    border-bottom: 5px solid #7e57ff;
  }

  @media (max-width: 765px) {
    .kekes {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      gap: 10px;
    }
  }
`;
