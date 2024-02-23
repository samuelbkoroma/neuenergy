import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import styled from "styled-components";

const Faq = () => {
  const question = [
    {
      id: 1,
      question: "What is the PayAsUgo System, and how does it work?",
      answer:
        "The PayAsUgo System is our innovative approach to making alternative energy accessible. It allows users to pay for energy usage incrementally, offering flexibility and affordability.",
    },

    {
      id: 2,
      question:
        "How can I contribute to sustainable transportation with NeuEnergy?",
      answer:
        "You can support sustainable transportation by choosing our electric vehicles for public transport or taxi services. Your decision contributes to a cleaner and greener urban environment.",
    },

    {
      id: 3,
      question: "How can I become part of the NeuEnergy mission?",
      answer:
        "Explore our investment opportunities or join our team. Your involvement can be instrumental in shaping the future of sustainable energy in Africa.",
    },

    {
      id: 4,
      question: "Are NeuEnergy products suitable for residential use?",
      answer:
        "Yes, our range includes solar solutions and home charging networks, making sustainable energy accessible for residential applications. Discover a reliable source of power for your home.",
    },

    {
      id: 5,
      question:
        "How does NeuEnergy address challenges in providing solar solutions in Africa?",
      answer:
        "NeuEnergy tackles challenges by offering innovative solar solutions tailored to local needs. Our PayAsUgo System and community-focused initiatives aim to make solar energy accessible and affordable.",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <Div className="w-screen flex justify-center items-center">
      <div className="w-[89%] m-auto max-w-[1400px]   p-8 rounded-lg ">
        <motion.div
          className="offer"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Faq
        </motion.div>
        <motion.div
          className="our-service"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.div>
        <motion.div
          className="sub-heading"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Your Queries Answered, Your Path to Sustainable Energy Unveiled.
        </motion.div>
        {question.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="w-full text-left text-xl focus:outline-none p-4 bg-white
        rounded-lg shadow-md flex justify-between item-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
            </motion.div>

            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default Faq;

const Div = styled.div`
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
`;
