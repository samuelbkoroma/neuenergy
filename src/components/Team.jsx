import styled from "styled-components";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <Div>
      <motion.div
        className="offer"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Expert Team
      </motion.div>
      <motion.div
        className="our-service"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Meet the Minds Behind Wellbank
      </motion.div>
      <motion.div
        className="sub-heading"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Passionate, Innovative, and Committed to Shaping a Sustainable Future
      </motion.div>

      <div className="team">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="member1"
        >
          <img src="assets/teammember1.jpg" alt="" width={200} height={200} />
          <h2 className="naame">Emmanuel Saati </h2>
          <p className="position">Chief Executive Officer</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="member1"
        >
          <img src="assets/teammember1.jpg" alt="" width={200} height={200} />
          <h2 className="naame">Emmanuel Saati </h2>
          <p className="position">Chief Executive Officer</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="member1"
        >
          <img src="assets/teammember1.jpg" alt="" width={200} height={200} />
          <h2 className="naame">Emmanuel Saati </h2>
          <p className="position">Chief Executive Officer</p>
        </motion.div>
      </div>
    </Div>
  );
};

export default Team;

const Div = styled.div`
  margin-bottom: 100px;
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
    margin-bottom: 60px;
  }

  .team {
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
  }

  .member1 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
  }

  .member1 img {
  }

  .naame {
    color: #081828;
    text-align: center;
    font-family: Dm Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.2px;
  }

  .position {
    color: #727272;
    text-align: center;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.8px;
  }
`;
