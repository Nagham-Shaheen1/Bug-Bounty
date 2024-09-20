import React from "react";
import vectorImage from "../../assets/image/Vector.png";
import "../../assets/css/header/headre.css";
import ButtonMantine from "../button/ButtonMantine";
import { Link, useNavigate } from "react-router-dom";

const header = () => {
  const navigate = useNavigate();
  return (
    <div className="header ">
      <div className="header-btn">
        <div className="login-btn">
          <Link to={"/"}>
            <ButtonMantine
              type="outline"
              color="var(--main-color)"
              title="دخول"
              width="61px"
              height="50px"
            />
          </Link>
          <Link to={"/register"}>
            <ButtonMantine
              type="filled"
              color="var(--main-color)"
              title="سجّل مجاناً"
              width="99px"
              height="50px"
            />
          </Link>
        </div>
      </div>
      <div className="logo">
        <img
          src={vectorImage}
          alt="logo"
          className="img-logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default header;
