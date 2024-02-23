import styled from "styled-components";
import { motion } from "framer-motion";

const OurService = () => {
  return (
    <Div>
      <p className="offer">What we Offer</p>
      <h1 className="our-service">Our Services</h1>
      <p className="sub-heading">Empowering Tomorrow: Our Diverse Offering</p>

      <div className="cards">
        <motion.div
          className="card-1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img src="assets/Icon.png" alt="" />
          </div>
          <h2>Transport with Electric Vehicles</h2>
          <p>
            Providing eco-friendly transportation options through electric
            autos, 2-wheelers and 3-wheelers, redefining the future of public
            mobility
          </p>
        </motion.div>

        <motion.div
          className="card-1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img src="assets/Icon.png" alt="" />
          </div>
          <h2>Charging Stations</h2>
          <p>
            Establish a widespread charging network, ensuring seamless access to
            electric power for personal use.
          </p>
        </motion.div>

        <motion.div
          className="card-1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img src="assets/Icon.png" alt="" />
          </div>
          <h2>Taxi Services</h2>
          <p>
            Offering convenient and sustainable taxi services, contributing to
            cleaner and greener urban transportation.
          </p>
        </motion.div>
      </div>

      <div className="cards">
        <motion.div
          className="card-1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img src="assets/Icon.png" alt="" />
          </div>
          <h2>Agricultural Products & Services Sales</h2>
          <p>
            Facilitating the sale and distribution of indigenous agricultural
            products and services locally and internationally, supporting local
            economies.
          </p>
        </motion.div>

        <motion.div
          className="card-1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img src="assets/Icon.png" alt="" />
          </div>
          <h2>Solar Solutions</h2>
          <p>
            Introducing efficient solar energy solutions for homes and
            businesses, providing a reliable and sustainable source of power in
            regions facing electricity challenges
          </p>
        </motion.div>

        <motion.div
          className="card-1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img src="assets/Icon.png" alt="" />
          </div>
          <h2>Decentralised Power Grid Solutions</h2>
          <p>
            Offering innovative centralized power grid solutions designed to
            address the energy distribution challenges in Africa, providing
            efficient and reliable electricity to communities.
          </p>
        </motion.div>
      </div>
    </Div>
  );
};

export default OurService;

const Div = styled.div`
  text-align: center;
  padding-bottom: 200px;
  padding-top: 20px;
  background: #f4f7fa;

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

  .cards {
    display: flex;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }

  .card-1 {
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(81, 94, 125, 0.08);
    width: 416px;
    height: 302px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 10px;
    transition: all 0.5s ease-in-out;
  }

  .card-1 div {
    width: 65px;
    height: 65px;
    padding: 18.38px 19px 19.62px 19px;
    border-radius: 10px;
    background: #7e57ff;
    margin: 0 auto;
  }

  .card-1 h2 {
    color: #081828;
    text-align: center;
    font-family: Dm sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }

  .card-1 p {
    color: #727272;
    text-align: center;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    padding: 10px;
  }

  .card-1:hover {
    scale: 1.1;
    border-top: 5px solid #7e57ff;
    border-bottom: 5px solid #7e57ff;
  }

  @media (max-width: 768px) {
    .card-1 {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
