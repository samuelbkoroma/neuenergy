import styled from "styled-components";

const MoreInfo = () => {
  return (
    <Div>
      <h1 className="our-service">Why Choose Wellbank</h1>

      <div className="more-info">
        <div>
          <p> - No upfront payment</p>
          <p> - Instant access to healthcare fund</p>
          <p> - Flexible repayment plans</p>
          <p> - Partnered with trusted financial institutions</p>
        </div>
      </div>
    </Div>
  );
};

export default MoreInfo;

const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
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

  .more-info {
    margin: 0 auto;
  }

  .more-info div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    width: 500px;
    margin: 0 auto;

    font-family: "poppins", sans-serif;
    font-size: 18px;
  }
`;
