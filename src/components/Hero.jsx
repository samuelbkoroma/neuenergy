/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Div>
      <Navbar />
      <div className="main-hero">
        <div className="texts">
          <h3 className="creative">We are Creative Digital Company</h3>
          <h1 className="strategic">Welcome to Wellbank</h1>
          <p className="invest">
            Affordable Health Financing for Employees Worried about unexpected{" "}
            <br />
            medical expenses? Wellbank helps companies provide a dedicated{" "}
            <br />
            Health Payment Account for their employees, ensuring access to{" "}
            <br />
            quality healthcare without financial strain. solutions and <br />
            sustainable transport experience
          </p>
          <Link to="/">
            <motion.div
              className="discover-more"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              More Info
            </motion.div>
          </Link>
        </div>

        <motion.div
          initial={{
            x: 500,
            scale: 1.2,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            scale: 1.2,
            opacity: 1,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="assets/mainhome.png"
            alt=""
            className="keke-pic"
            width={450}
            height={450}
          />
        </motion.div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  height: 800px;
  background-color: #081828;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 100px;

  .main-hero {
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .creative {
    color: #7e57ff;
    font-family: Dm sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 26px;
  }

  .strategic {
    color: #fff;
    font-family: Dm sans;
    font-size: 38px;
    font-style: normal;
    font-weight: 800;
    line-height: 55px;
    text-transform: capitalize;
    text-align: start;
    margin-bottom: 29px;
  }
  .invest {
    color: #e6e6e6;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: start;
    margin-bottom: 54px;
  }

  .discover-more {
    border-radius: 30px;
    background: #7e57ff;
    padding: 15px 29.487px 15.5px 30px;
    width: 200px;
    text-align: center;
    font-family: DM sans;
  }

  .texts {
    display: flex;
    flex-direction: column;
    fle-wrap: wrap;
    text-align: start;
  }

  @media (max-width: 768px) {
    .main-hero {
      margin-top: 60px;
      width: 100%;
      text-align: center;
    }
    .keke-pic {
      display: none;
    }
    .texts {
      text-align: center;
      display: block;
    }
    .creative,
    .strategic,
    .invest {
      text-align: center;
    }

    .discover-more {
      margin: 0 auto;
    }
  }

  @media (max-width: 1080px) {
    .keke-pic {
      display: none;
    }
  }
`;

export default Hero;
