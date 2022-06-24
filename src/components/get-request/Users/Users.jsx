import React, { useEffect, useRef } from "react";
import User from "./User.jsx/User";
import style from "./Users.module.scss";
const Users = ({ users, setLoaderHeight }) => {
  const usersElem = useRef(null);
  const mediaQuery615px = window.matchMedia("(max-width: 615px)");
  const styles = {};
  styles["gridTemplateRows"] = `repeat(${Math.ceil(users.length / 3)}, 1fr)`;
  if (mediaQuery615px.matches) {
    styles["gridTemplateRows"] = `repeat(${users.length}, 1fr)`;
  }
  const mediaQuery900px = window.matchMedia("(max-width: 900px)");
  if (mediaQuery900px.matches) {
    styles["gridTemplateRows"] = `repeat(${Math.ceil(users.length / 2)}, 1fr)`;
  }
  useEffect(() => {
    setLoaderHeight(usersElem.current.scrollHeight);
  }, []);

  return (
    <div ref={usersElem} className={`${style.Users} `} style={styles}>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
