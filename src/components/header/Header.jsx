import React from "react";
import style from "./Header.module.scss";
import logo from "../../../Assets/Logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  return (
    <header className="">
      <div className={style.header_block}></div>
      <div className={style.header_block}>
        <div className={`_container  _paddingContent ${style.container}`}>
          <div className={style.logo}>
            <img width={"104px"} height={"26px"} src={logo} alt="" />
          </div>
          <div className={style.buttons}>
            <AnchorLink href="#Users" className="button">
              Users
            </AnchorLink>
            <AnchorLink href="#SignUp" className="button">
              Sign up
            </AnchorLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
