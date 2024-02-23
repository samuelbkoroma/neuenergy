/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import styled from "styled-components";

const Service = () => {
  return (
    <Div>
      <div className="top-hero">
        <Navbar /> <br /> <br />
        <h1>Products</h1>
        <p className="linkp">Check this services we provide</p>
      </div>

      <motion.div
        className="main-product"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <p className="offer">May I introduced</p>
        <h1 className="our-service">Redefining Sustainable Transportation</h1>
        <p className="sub-heading">
          {/* There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form. */}
        </p>

        <div className="keke">
          <img src="assets/keke.png" alt="" />
          <motion.div
            className="about-text"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2>Unleash the Future: Zero Emissions, Limitless Possibilities</h2>
            <p className="p">
              Say goodbye to the past and embrace a future where your journey
              leaves no carbon footprint. Our electric vehicles redefine
              transportation, offering a sustainable and eco-friendly mode of
              travel.
            </p>
            <h2>
              Efficiency Redefined: Seamlessly Powerful, Impeccably Efficient
            </h2>
            <p className="p">
              Experience a driving revolution with NeuEnergy. Our electric
              vehicles are engineered for optimal efficiency, providing not just
              a ride but a smooth, powerful, and environmentally conscious
              driving experience.
            </p>

            <h2>Smart Choices, Smart Driving: Tech-Forward and Connected</h2>
            <p className="p">
              NeuEnergy vehicles aren't just modes of transportation; they're
              smart, connected hubs on wheels. Monitor your energy usage, stay
              connected, and revel in the convenience of a tech-forward driving
              experience, all while contributing to a sustainable tomorrow.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="main-product"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <p className="offer"></p>
        <h1 className="our-service">Our Charging Network</h1>
        <p className="sub-heading">
          {/* There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form. */}
        </p>

        <div className="keke">
          <img src="assets/cstation.jpg" alt="" />
          <motion.div
            className="about-text"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{ marginBottom: 200 }}
          >
            <h2>Empower Your Journey with NeuEnergy Charging Stations</h2>
            <p className="p">
              euEnergy's charging stations redefine the electric vehicle
              charging experience, providing accessibility and efficiency at
              every turn. Seamlessly integrated into your lifestyle, our
              strategically located stations ensure that charging is never a
              hurdle, from urban centers to your own driveway. Experience the
              convenience of rapid charging, minimizing wait times and
              maximizing your time on the road. With our commitment to
              sustainability, each charge becomes a step toward a greener
              tomorrow. NeuEnergy Charging Stations empower your journey, making
              clean and efficient energy accessible whenever and wherever you
              need it."
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="main-product"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <h1 className="our-service">
          Harness the Power of the Sun with NeuEnergy Solar Solutions
        </h1>
        <p className="sub-heading">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form.
        </p>

        <div className="keke" style={{ marginBottom: 50, marginTop: 50 }}>
          <motion.div
            className="about-text"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2>Clean, Sustainable Energy Source:</h2>
            <p className="p">
              NeuEnergy's solar solutions tap into the limitless power of the
              sun, providing a clean and sustainable energy source. Say goodbye
              to traditional energy constraints and hello to a future powered by
              sunlight.
            </p>
            <h2>Energy Independence for Your Home:</h2>
            <p className="p">
              Take control of your energy needs with our solar solutions
              designed for homes. Enjoy uninterrupted power, reduce dependency
              on the grid, and contribute to a more resilient and sustainable
              energy ecosystem.
            </p>

            <h2>Cost-Effective and Environmentally Friendly:</h2>
            <p className="p">
              Investing in NeuEnergy solar solutions not only lowers your energy
              costs but also reduces your carbon footprint. It's a
              cost-effective, environmentally friendly choice that aligns with
              your commitment to a greener lifestyle.
            </p>
          </motion.div>
          <img
            src="assets/neuenergysolor.jpg"
            alt=""
            width={500}
            height={400}
          />
        </div>
      </motion.div>

      <div className="main-product">
        <h1 className="our-service">
          Harvest Harmony: Nurturing Sustainable Agriculture
        </h1>
        <p className="sub-heading">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form.
        </p>

        <motion.div
          className="keke"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <img src="assets/agric.jpg" alt="" width={500} height={500} />
          <motion.div
            className="about-text"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2>Elevate Your Yield, Preserve the Earth:</h2>
            <p className="p">
              NeuEnergy's agricultural solutions go beyond harvests; they're a
              commitment to sustainable farming practices. Boost your yield
              while contributing to environmental preservation.
            </p>
            <h2>Connect Locally, Grow Globally:</h2>
            <p className="p">
              Join our platform to showcase and distribute your indigenous
              agricultural products locally and internationally. NeuEnergy is
              your gateway to broader markets, supporting economic growth for
              local
            </p>

            <h2>Empower Your Fields: Affordable, Accessible, Advanced:</h2>
            <p className="p">
              Our mission is to make advanced agricultural solutions accessible
              to all. From cost-effective technologies to personalized support,
              NeuEnergy empowers you to thrive in the ever-evolving agricultural
              landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="agric-video">
        <iframe src="https://www.youtube.com/embed/tLFgXnvqUn0"></iframe>
      </div>

      <p className="main-man">
        If you need any of our products be sure to call 088484378
      </p>

      <Footer />
    </Div>
  );
};

export default Service;

const Div = styled.div`
  .top-hero {
    width: 100%;
    height: 340.5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #081828;
    margin-bottom: 110px;
  }
  .top-hero h1 {
    color: #fff;
    text-align: center;
    font-family: Dm Sans;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    text-transform: capitalize;
    margin-top: 100px;
  }

  .linkp {
    color: #fff;
    text-align: center;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px; /* 150% */
    text-transform: capitalize;
    margin-top: 10px;
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

  .keke {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    fle-wrap: wrap;
  }

  .keke p {
    color: #727272;
    text-align: center;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    max-width: 600px;
  }

  .p {
    color: #727272;
    text-align: left;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 40px;
  }

  .about-text {
    max-width: 800px;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 40px;
  }

  .about-text h2 {
    color: #081828;
    text-align: left;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
  }

  .main-man {
    color: #081828;
    text-align: center;
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  .agric-video iframe {
    margin: 0 auto;
    width: 600px;
    height: 500px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .keke {
      display: flex;
      flex-direction: column;
    }

    .p {
      text-align: center;
      padding: 10px;
    }

    .about-text h2 {
      padding: 10px;
      text-align: center;
    }

    .main-man {
      text-align: center;
      padding: 10px;
      font-size: 25px;
    }
  }
`;
