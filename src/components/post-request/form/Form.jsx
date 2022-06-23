import React from "react";
import style from "./Form.module.scss";
import { useState } from "react";
import Positions from "./positions/Positions";
const Form = ({
  props: {
    file,
    setFile,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    position,
    setPosition,
    tokenURL,
    userRequest,
  },
}) => {
  let [validEmail, setValidEmail] = useState(true);
  let [validName, setValidName] = useState(true);
  let [validPhone, setValidPhone] = useState(true);
  let [validFile, setValidFile] = useState(true);

  const formErrors = {
    name: "Should be 2-60 characters",
    email: "Must be a valid email, example: email@gmail.com",
    phone: "Number, should start with code of Ukraine +380",
    photo:
      "User photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.",
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      const validator =
        /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/gm;
      setValidEmail(
        validator.test(e.target.value) && e.target.value.length <= 100
      );
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    setValidName(e.target.value.length >= 2 && e.target.value.length <= 60);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const validPhone = new RegExp("^[+]{0,1}380([0-9]{9})$");
    setValidPhone(validPhone.test(e.target.value));
  };
  const fileHandler = (e) => {
    setFile(e.target.files[0]);

    const isType = e.target.files[0].type === ("image/jpeg" || "image/jpg");
    const isSize = e.target.files[0].size < 5242880;
    let isResolution;
    const img = new Image();
    img.src = window.URL.createObjectURL(e.target.files[0]);
    img.onload = () => {
      isResolution = img.width > 70 && img.height > 70;

      setValidFile(isSize && isResolution && isType);
    };
  };
  const submitHendler = (e) => {
    e.preventDefault();
    userRequest(tokenURL);
    setFile(null);
    setName("");
    setEmail("");
    setPhone("");
    setPosition("");
  };
  return (
    <form className={style.form} autoComplete="off" onSubmit={submitHendler}>
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
        <p>{formErrors.name}</p>
      </div>
      <div className={`${style.email} ${style.input_box}`}>
        <input
          className={`${validEmail ? "" : style.err} ${
            email !== "" ? style.txt : ""
          }`}
          type="email"
          id="email"
          required
          value={email}
          onChange={emailHandler}
        />
        <label htmlFor="email">Email:</label>
        <p>{formErrors.email}</p>
      </div>
      <div className={`${style.phone} ${style.input_box}`}>
        <input
          className={`${validPhone ? "" : style.err}`}
          type="phone"
          id="phone"
          required
          value={phone}
          onChange={phoneHandler}
        />
        <label htmlFor="phone">Phone:</label>
        <p>{formErrors.phone}</p>
      </div>
      <Positions position={position} setPosition={setPosition} />
      <div className={`${style.upload} ${style.input_box}`}>
        <label htmlFor="actual-btn" className={`${validFile ? "" : style.err}`}>
          <input
            type="file"
            accept=".jpg, .jpeg"
            file={file}
            onChange={fileHandler}
            id="actual-btn"
          />
          <span className={`${style.uploadText}`}>Upload</span>
          <span className={`${style.uploadFile}`}>
            <span
              className={`${style.fileName}`}
              style={file ? { color: "#000000DE" } : null}
            >
              {file ? file.name : "Upload your photo"}
            </span>
          </span>
          <p>{formErrors.photo}</p>
        </label>
      </div>
      <button
        type={"submit"}
        className="button"
        disabled={
          !(
            file &&
            name &&
            email &&
            phone &&
            position &&
            validEmail &&
            validName &&
            validPhone
          )
        }
      >
        Sign up
      </button>
    </form>
  );
};

export default Form;
