import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

const Navbar = () => {
  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleClickOutside = (event) => {
    const sidebar = document.getElementById("sidebar");
    const navIcons = document.getElementById("nav-icons");

    if (
      sidebar &&
      !sidebar.contains(event.target) &&
      !navIcons.contains(event.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.addEventListener("scroll", changeColor);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Div>
      <nav className={color ? "header header-bg" : "header"}>
        <div className="logo">
          <Link to="/">
            <img src="assets/neuenergy.jpg" alt="" height={20} width={90} />
          </Link>
        </div>
        <ul className={color ? "uli ulibg" : "uli"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/service">
            <li>Products</li>
          </Link>
        </ul>

        {/* <Link to="/about">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={color ? "get-started get-started-bg" : "get-started"}
          >
            Get Started
          </motion.div>
        </Link> */}
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <button id="nav-icons" onClick={handleShow} className="nav-icons">
            {show ? (
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "#727272", width: 40 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#727272", width: 30 }}
              />
            )}
          </button>
          <div id="sidebar">{show && <Sidebar />}</div>
        </div>
      </nav>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  .header {
    height: 90px;
    width: 100%;
    background-color: transparent;
    color: white;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
  .uli {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  ul li {
    color: #fff;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.5px;
    text-transform: capitalize;
  }

  .ulibg li {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 50px;
    color: black;
    cursor: pointer;
  }

  .get-started {
    color: black;
    border-radius: 30px;
    background: #fff;
    padding: 15px 40px 15.5px 40px;
    text-align: center;

    color: #081828;
    text-align: center;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.5px;
    text-transform: capitalize;
  }
  //

  .header-bg {
    background-color: white;
    color: black;
    box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    z-index: 1000;
  }

  .get-started-bg {
    background: #081828;
    color: white;
  }

  .nav-icons {
    display: none;
  }

  @media (max-width: 768px) {
    .uli {
      display: none;
    }
    .get-started {
      display: none;
    }

    .nav-icons {
      display: block;
    }
    .logo {
      display: block;
    }

    .header {
      display: flex;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
