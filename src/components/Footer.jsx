import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <footer>
        <div className="logo-section">
          <img src="assets/neuenergy.jpg" alt="" width={90} height={90} />

          <p>
            Making the world a better place through constructing <br /> elegant
            hierarchies.
          </p>

          <h3>Follow Us On</h3>

          <div className="social">
            <img src="assets/facebook.png" alt="" width={25} height={25} />
            <img src="assets/instagram.png" alt="" width={25} height={25} />
            <img src="assets/linkedin.png" alt="" width={25} height={25} />
            <img src="assets/twitter.png" alt="" width={25} height={25} />
          </div>
        </div>
        <div className="links-section">
          <h2>Links</h2>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Products</li>
          </ul>
        </div>

        <div className="subscribe-section">
          <h2>Subscribe</h2>

          <p>
            {" "}
            Subscribe to our newsletter for the latest <br /> updates
          </p>

          <div className="input-container">
            <input type="text" placeholder="Email address" />{" "}
            <img src="assets/email.png" alt="" />
          </div>
        </div>
      </footer>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  width: 100%;
  height: 478.13px;
  background: #081828;
  color: #fff;

  footer {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    flex-wrap: wrap;
    align-items: center;
  }

  .logo-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .logo-section p {
    color: #fff;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  .logo-section h2 {
    color: #fff;
    font-family: Dm sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 15.6px;
  }

  .social {
    display: flex;
    gap: 20px;
  }

  .social img {
    width: 35px;
    object-fit: cover;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.5 ease-in-out;
  }

  .social img:hover {
    border: 1px solid #081828;
    scale: 1.2;
    box-shadow: 0px 0px 30px 0px rgba(81, 94, 125, 0.08);
  }

  .links-section {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  .links-section h2 {
    color: #fff;
    font-family: Dm Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 20.4px;
  }

  .links-section ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .links-section ul li {
    color: #fff;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.5px;
  }

  .subscribe-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .subscribe-section h2 {
    color: #fff;
    font-family: DM Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }

  .subscribe-section p {
    color: #fff;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  .subscribe-section input {
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.12);
    outline: none;
    border: none;
    height: 52px;
    padding: 16px 70px 16px 18px;
    align-items: center;
  }

  .input-container {
    display: flex;
    gap: 5px;
  }

  .input-container img {
    width: 52px;
    height: 52px;
    padding: 16.25px 17px 17.75px 17px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.16);
  }

  @media (max-width: 768px) {
    height: 800px;
    background: #081828;

    footer {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
    }
  }
`;
