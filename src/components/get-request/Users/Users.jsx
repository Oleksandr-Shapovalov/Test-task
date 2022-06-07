import React from "react";
import User from "./User.jsx/User";
import style from "./Users.module.scss";
const Users = ({ users }) => {
  return (
    <div className={`${style.Users} `}>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
