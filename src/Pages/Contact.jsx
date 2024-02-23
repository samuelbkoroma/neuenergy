import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6q0knn",
        "template_kmkmkqm",
        form.current,
        "qFKIeiGXOr6vNsIe4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <motion.div
        className="contact-form"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="contact">
          <h1 className="contact-heading">Contact Us</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered.
          </p>

          <h2>Call us</h2>
          <p>+232 76 940 005</p>

          <h2>Email us</h2>
          <p>
            raphaelsmith@hotmail.com <br />
            hkanu0807@gmail.com
          </p>

          <h2>Our Address</h2>
          <p>
            48 Regent Road Lumley, <br /> Freetown Sierra Leone
          </p>
        </div>

        <div className="form">
          <h2 className="contact-heading">Leave a message here</h2>
          <form action="" className="form" ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="email" placeholder="Email" name="user_email" />
            </div>

            <div>
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Phone" name="user_phone" />
            </div>

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="textarea"
              placeholder=""
            ></textarea>

            <button type="submit" value="send">
              <motion.div
                className="discover-more"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Submit
              </motion.div>
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        className="map"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1421491269994!2d-13.265067523397981!3d8.485556497255557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c3862450eeaf%3A0x9f5cfae2d6d71abd!2s13%20Wilkinson%20Road%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1704456065519!5m2!1sen!2ssl"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      <Footer />
    </Div>
  );
};

export default Contact;

const Div = styled.div`

 .top-hero {
    width: 100%;
    height: 340.5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #081828;
;
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

   .contact-form{
    background: #F4F7FA;
    width: 100%;
height: 708.09px;

   }



   .discover-more {
    border-radius: 30px;
    background: #7e57ff;
    padding: 15px 30px 15px 30px;
    width: 200px;
    text-align: center;
    font-family: DM sans;
    color: #FFF;
    justify-content: center;
  }



  .contact-form{
    padding-top:100px;
    display:flex;
    justify-content:center;
    gap:100px;
   
  }


  .contact{
    display:flex;
    flex-direction:column;
    gap:20px;

  }


  .contact-heading{
    color: #081828;
font-family: Dm Sans;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 40px; 
  }


  .contact h2{
    color: #081828;
font-family: Dm Sans;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 19.2px;

  }

  .contact p{
color: #727272;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px;
  }

  .form{
    display:flex; 
    flex-direction: column;
    gap:20px;
}

.form div{
    display:flex;
    gap:20px;
}

.form div input{
max-width: 306px;
height: 52px;
padding: 16px 21px;
border-radius: 5px;
border: 1px solid #EEE;
background: #FFF;
outline:none;
color: #757575;
font-family: DM Sans;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;

}


.textarea{
max-width: 634px;
height: 198px;
border-radius: 6px;
border: 1px solid #EEE;
background: #FFF;
outline: none;
padding: 16px
}

.map{padding:100px;
  background: #F4F7FA;
  justify-content: center
}

.map iframe{
display: flex;
width: 900px;
height: 470px;
padding: 10px;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
margin:0 auto;
}



@media(max-width:768px){
  .contact-form{
    display: flex;
    flex-direction:column;
    justify-content: 
    gap:10px;
    padding-bottom:100px;
    height: auto;
  }

  .textarea{
    max-width:350px;
  }


  .map{
    padding:10px;
  }


  .map iframe{
display: flex;
width: 350px;
height: 470px;
justify-content: center;
align-items: center;
background: #FFF;
margin:0 auto;
}


.contact{
  margin-left:10px;
}

 form div {
  display: flex;
  flex-direction: column;
}

form{
  margin-left:10px;
}


}





`;
