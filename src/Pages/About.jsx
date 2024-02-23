/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Div>
      <div className="top-hero">
        <Navbar /> <br /> <br />
        <h1>About Us</h1>
        <div className="linkk">
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
        </div>
      </div>

      <motion.div
        className="our-service"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        About us
      </motion.div>

      <motion.div
        className="about-text"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <p className="p">
          Welcome to NeuEnergy, where innovation meets commitment, and
          sustainability shapes our vision for a brighter future. At the heart
          of our journey is CEO Raphael Smith, a seasoned visionary with over 30
          years of dedicated experience in advancing alternative energy
          solutions across Africa.
        </p>

        <h2>Our Story: A Legacy of Innovation</h2>
        <p className="p">
          Founded on the principles of innovation, partnership, and community
          empowerment, NeuEnergy has been at the forefront of pioneering
          sustainable solutions. Our primary focus, the PayAsUgo System,
          exemplifies our dedication to making alternative energy accessible,
          flexible, and affordable.
        </p>
        <h2>Our Services: Driving Positive Change</h2>
        <p className="p">
          From redefining public transportation with electric vehicles to
          offering eco-friendly taxi services, our services encompass a holistic
          approach to sustainability. The Zunspots Department explores
          cutting-edge alternative energy solutions, while our home charging
          networks bring clean energy to your doorstep.
        </p>

        <h2>Connecting Communities through Agriculture </h2>
        <p className="p">
          Beyond energy, NeuEnergy fosters economic growth by connecting local
          farmers with broader markets, both locally and internationally. Our
          commitment to indigenous agricultural products supports local
          economies and promotes sustainability.
        </p>
        <h2>Educating for a Sustainable Tomorrow</h2>
        <p className="p">
          In the spirit of empowerment, our marketing initiatives focus on tech
          education. We believe that informed communities are the driving force
          behind sustainable change. Our commitment extends to building a
          decentralized energy landscape, advocating for clean energy practices,
          and revolutionizing transportation.{" "}
        </p>
        <h2>Join Us on the Journey: Towards a Greener Tomorrow</h2>
        <p className="p">
          At NeuEnergy, we invite you to join us on this transformative journey.
          Together, we can create a future where clean energy, sustainable
          transportation, and economic empowerment are accessible to all.
          Explore our initiatives, connect with our vision, and be part of the
          movement shaping Africa's sustainable tomorrow.
        </p>
      </motion.div>

      {/* <div className="economy">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <img src="assets/about.png" alt="" className="about-img" />
        </motion.div> */}

      {/* <div>
          <motion.div
            style={{ textAlign: "left" }}
            className="offer"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            Decentralised Economy
          </motion.div>
          <motion.div
            style={{ textAlign: "left" }}
            className="our-service"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            We’ve built a platform to buy and sell shares.
          </motion.div>
          <motion.div
            style={{ textAlign: "left" }}
            className="sub-heading"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            Spend real fights effective anything extra by leading. <br />{" "}
            Mouthwatering leading how real formula also locked-in have can
            mountain thought. Jumbo plus shine sale.
          </motion.div>

          <div className="check-content">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="checked"
            >
              <img src="assets/checked.png" alt="" />
              <div>
                <h2>Digital Marketing</h2>
                <p>Quis autem vel eum reprehenderit</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="checked"
            >
              <img src="assets/checked.png" alt="" />
              <div>
                <h2>Digital Marketing</h2>
                <p>Quis autem vel eum reprehenderit</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="checked"
            >
              <img src="assets/checked.png" alt="" />
              <div>
                <h2>Digital Marketing</h2>
                <p>Quis autem vel eum reprehenderit</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* our mission */}

      <div className="mission">
        <motion.div
          className="our-service"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.div>
        <motion.div
          className="about-text"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="p">
            At NeuEnergy, our mission is to pave the way for a sustainable and
            brighter future across Africa. Committed to innovation,
            accessibility, and community empowerment, we strive to:
          </p>

          <h2>Advance Clean Energy Solutions:</h2>
          <p className="p">
            Provide cutting-edge, affordable, and reliable alternative energy
            solutions, transforming the way communities access power.
          </p>
          <h2>Redefine Transportation:</h2>
          <p className="p">
            Revolutionize public mobility with eco-friendly electric vehicles
            and taxi services, reducing environmental impact and enhancing urban
            living.
          </p>

          <h2>Foster Economic Growth:</h2>
          <p className="p">
            Connect local farmers to global markets, supporting indigenous
            agricultural products and promoting sustainable economic
            development.
          </p>
          <h2>Educate for Change:</h2>
          <p className="p">
            Lead the charge in tech education, raising awareness about clean
            energy practices and empowering communities with knowledge.
          </p>
          <h2>. Build a Decentralized Energy Landscape</h2>
          <p className="p">
            Champion a shift from traditional grids to decentralized energy
            systems, ensuring access, reliability, and resilience for all.{" "}
            <br /> <br />
            At NeuEnergy, we believe in a future where sustainable energy,
            efficient transportation, and economic empowerment are within reach
            for every community. Join us in energizing tomorrow for a brighter
            and greener Africa.
          </p>
        </motion.div>
      </div>

      {/* 
    team */}
      <Team />
      <Footer />
    </Div>
  );
};

export default About;

const Div = styled.div`
  .top-hero {
    width: 100%;
    height: 340.5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #081828;
    margin-bottom:110px;
  }
  .top-hero h1 {
    color: #fff;
    text-align: center;
    font-family: Dm Sans;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    text-transform: capitalize;
    margin-top:40px;:
  }
  .linkk{
    display: flex;
    gap:20px;
    text-align: center;
    justify-content:center;
  }


   .linkk p{
    color: #FFF;
text-align: right;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px; /* 150% */
text-transform: capitalize;
   }





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
    padding-top: 50px;
  }

  .our-service {
    color: #081828;
    text-align: center;
    font-family: DM Sans;
    font-size: 35px;
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
    margin-bottom: 60px;
  }



.p{
    color: #727272;
    text-align: left;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 40px;
  }

  .about-text{
    max-width:800px;
    justify-content: center;
    margin:0 auto;
  }

  .about-text h2{
    color: #081828;
    text-align: left;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
  }

  .economy{
    display:flex;
    justify-content: center;
    gap:50px;
  }



  .checked{
    display: flex;
    gap:20px;
    align-items: start;
  }



  .checked div{
    display:flex;
    gap:10px;
    align-items: start;
    flex-direction: column;
  }


  .checked img{
    border-radius: 10px;
background: #7E57FF;
width: 20px;
height: 20px;
padding: 4.37px 4.5px 4.63px 4.5px;
  }

    .checked div h2{
color: #081828;
font-family: Dm Sans;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 18px; 
    }


    .checked div p{
        color: #727272;
font-family: DM Sans;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px; 

    }

    .check-content{
        display:grid;
        grid-template-columns: repeat(2, 2fr);
        gap:20px;

    }


    .mission{
        margin-top:100px;


    }

    @media(max-width: 768px){
      .about-img{
        display:none;
      }

      .economy{
        margin-right:20px;
      }

      .p{
        text-align:center;
        padding:10px;
      }

      .about-text h2{
        text-align:center;
      }



    }


`;
