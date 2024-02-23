import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root"); // Set the root element for accessibility

const MainVidSection = () => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenModal = () => {
    setVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setVideoModalOpen(false);
  };

  return (
    <Div>
      <div className="background-div">
        <div className="video-div">
          <motion.div
            className="main-video"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="offer"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              Watch
            </motion.div>
            <motion.div
              className="our-service"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              Visual Insight: NeuEnergy In Action
            </motion.div>
            <motion.div
              className="sub-heading"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              Watch our products come to life and experience the future of
              sustainable energy.
            </motion.div>

            <motion.div
              className="play-button"
              onClick={handleOpenModal}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <img src="assets/playbutton.png" alt="" />
            </motion.div>

            <Modal
              isOpen={isVideoModalOpen}
              onRequestClose={handleCloseModal}
              style={{
                content: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "black",
                  border: "none",
                  maxWidth: "80vh",
                  maxHeight: "80vh",
                },
              }}
            >
              <button
                onClick={handleCloseModal}
                style={{
                  color: "white",
                  paddingTop: 20,
                  fontSize: 30,
                  textAlign: "right",
                }}
              >
                Close
              </button>
              <video
                controls
                autoPlay
                style={{
                  width: "70vh",
                  height: "70vh",
                }}
                src="assets/video1.mp4"
                type="video/mp4"
              />
            </Modal>
          </motion.div>
        </div>
      </div>
    </Div>
  );
};

export default MainVidSection;

const Div = styled.div`
  //   position: relative;
  margin-bottom: 200px;
  width: 100%;
  .background-div {
    background: #081828;
    width: 100%;
    height: 700px;
    padding-top: 250px;
  }
  .video-div {
    max-width: 900px;
    height: 600px;
    padding: 31px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    border-radius: 30px;
    border: 1px solid rgba(238, 238, 238, 0.25);
    background: rgba(255, 255, 255, 0.14);
    // position: absolute;
    // bottom: -190px;
    // right: 650px;
    // margin-right: 200px;
  }

  .main-video {
    max-width: 800px;
    height: 510.5px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.09);
    margin: 0 auto;
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

  .play-button {
    display: flex;
    width: 80px;
    height: 80px;
    padding: 29.75px 17.387px 27.25px 31.5px;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    background: #7e57ff;
    margin: 0 auto;

    transition: all 0.5s ease-in-out 0s;
    box-shadow: rgba(193, 244, 246, 0.698) 0px 0px 0px 0px;
    animation: 2.5s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running
      pulse;
  }

  .play-button img {
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }

  .play-button:is(:hover, :focus) {
    transform: scale(1.2);
  }

  @keyframes pulse {
    100% {
      box-shadow: 0 0 0 45px rgba(193, 244, 246, 0);
    }
  }
`;
