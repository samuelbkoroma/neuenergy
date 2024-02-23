/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Div>
      <motion.div
        className="image-section"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="assets/mrceo.jpg" alt="" />
        <h2 className="ceo-name">Raphael Smith, CEO</h2>
        <p className="ceo-paragraph">
          The Ceo of NeuEnergy, possesses over 30 years of expertise,
          spearheading innovative solutions for sustainable energy in Africa
        </p>
      </motion.div>

      <motion.div
        className="about-texts"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="agency">
          <h1 className="agency-heading">NeuEnergy</h1>

          <p className="paragraph-1">
            Welcome to NeuEnergy, where innovation meets sustainable solutions
            under the visionary leadership of Mr. Raphael Smith. With over 30
            years of expertise in advancing alternative energy in Africa, Mr.
            Smith drives our commitment to revolutionize how we power our lives.
            <br /> <br /> Explore our initiatives, from the groundbreaking
            PayAsUgo System to transforming public transportation with
            battery-powered vehicles. Join us on this journey towards a greener
            and more sustainable future, led by Mr. Smith's passion and
            unwavering dedication.
          </p>
        </div>
      </motion.div>
    </Div>
  );
};

export default AboutSection;

const Div = styled.div`
  padding-top: 100px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 100px;
  background: #f4f7fa;

  .image-section {
    max-width: 600px;
    height: 600px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0px 0px 30px 0px rgba(81, 94, 125, 0.08);
  }
  .image-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    border-radius: 20px;
  }

  .ceo-name {
    color: #081828;
    font-family: Dm sans;
    font-size: 30px;
    font-weight: 900;
    text-transform: capitalize;
    position: absolute;
    bottom: 75px;
    text-align: right;
    margin-left: 20px;
  }
  .ceo-paragraph {
    color: #081828;
    font-family: Dm sans;
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    position: absolute;
    bottom: 40px;
    text-align: left;
    margin-left: 20px;
  }
  .about-text {
    display: flex;
    flex-direction: column;
  }

  .agency {
    max-width: 600px;
    height: 500px;
    padding: 15px;
    box-shadow: 0px 0px 30px 0px rgba(81, 94, 125, 0.08);
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .agency-heading {
    color: black;
    font-family: Dm sans;
    font-size: 30px;
    font-weight: 900;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  .paragraph-1 {
    color: #6c757d;
    font-family: Dm sans;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .paragraph-2 {
    color: #6c757d;
    font-family: Dm sans;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .small-business {
    color: black;
    font-family: Dm sans;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    .ceo-name {
      bottom: 100px;
    }
  }

  .image-section {
    margin: 10px;
  }

  .ceo-name {
  }
`;
