import styled from "styled-components";

const HowItWorks = () => {
  return (
    <Div>
      <h1 className="our-service">How it Works</h1>
      <p className="offer"> Simple, Secure, and Effective</p>

      <div className="more-info">
        <div>
          <ol>
            <li>
              Enroll Your Company - Employers sign up to provide healthcare{" "}
              <br />
              financing for their employees.
            </li>
            <li>
              Employees Access Funds - Employees get instant access to
              healthcare funds when needed.
            </li>
            <li>
              {" "}
              Medical Bills Covered - The funds can be used for medical expenses
              at partner hospitals and pharmacies.
            </li>
            <li>
              {" "}
              Flexible Repayments - Small monthly deductions from salaries
              ensure easy repayment.
            </li>
          </ol>
        </div>
      </div>
    </Div>
  );
};

export default HowItWorks;

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

  .more-info div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    font-family: "poppins", sans-serif;
    font-size: 18px;
  }

  .more-info div ol {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 250px;
    gap: 20px;
    list-style-type: number;
    font-family: "poppins", sans-serif;
  }
`;
