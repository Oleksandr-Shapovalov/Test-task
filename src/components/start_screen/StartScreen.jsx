import React from "react";
import style from "./StartScreen.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
const StartScreen = () => {
  return (
    <div className={`${style.wrap} _paddingContent`}>
      <div className={`${style.content}`}>
        <h1 className="h1">Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      </div>
      <AnchorLink href="#SignUp" className="button">
        Sign up
      </AnchorLink>
    </div>
  );
};

export default StartScreen;
