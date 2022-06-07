import React from "react";
import style from "./Form.module.scss";
import { useState } from "react";
import { useRef } from "react";
const Form = ({ file, setFile }) => {
  let [validEmail, setValidEmail] = useState(true);
  let [validName, setValidName] = useState(true);
  let [validPhone, setValidPhone] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const emailHandler = (e) => {
    if (e.target.value) {
      e.target.classList.add(style.txt);
      const validator =
        /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/gm;

      setValidEmail(
        validator.test(e.target.value) && e.target.value.length <= 100
      );
    }

    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setValidName(e.target.value.length >= 2 && e.target.value.length <= 60);
    setName(e.target.value);
  };
  const phoneHandler = (e) => {
    // const validPhone = ^[\+]{0,1}380([0-9]{9})$
    console.log();

    setPhone(e.target.value);
  };

  return (
    <form className={style.form} autoComplete="off">
      <div className={`${style.name} ${style.input_box} `}>
        <input
          className={`${validName ? "" : style.err}`}
          type="text"
          id="name"
          required
          value={name}
          onChange={nameHandler}
        />
        <label htmlFor="name">Name:</label>
      </div>
      <div className={`${style.email} ${style.input_box}`}>
        <input
          className={`${validEmail ? "" : style.err}`}
          type="email"
          id="email"
          required
          value={email}
          onChange={emailHandler}
        />
        <label htmlFor="email">Email:</label>
      </div>
      <div className={`${style.phone} ${style.input_box}`}>
        <input
          lassName={`${!validPhone ? "" : style.err}`}
          type="phone"
          id="phone"
          required
          value={phone}
          onChange={phoneHandler}
        />
        <label htmlFor="phone">Phone:</label>
      </div>
      <label>
        <input
          type="file"
          size="524288"
          accept=".jpg, .jpeg"
          file={file}
          onChange={(e) => {
            console.log(e.target.files[0]);
            setFile(e.target.files[0]);
          }}
        />
      </label>
    </form>
  );
};

export default Form;
