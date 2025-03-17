import styled from "styled-components";

const MyVision = () => {
  return (
    <Div>
      <h1 className="our-service">Vision</h1>

      <div className="div-class">
        <p style={{ width: "80%", margin: "0 auto" }}>
          To be the leading employer-backed health financing platform,
          revolutionizing workplace healthcare benefits.
        </p>
      </div>
    </Div>
  );
};

export default MyVision;

const Div = styled.div`
  text-align: center;
  padding-bottom: 200px;
  padding-top: 200px;
  background: #f4f7fa;
  clip-path: polygon(1% 18%, 100% 3%, 100% 87%, 0% 100%);

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
`;
