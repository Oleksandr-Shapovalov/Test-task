import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useGetRequest } from "../get-request/GetRequestContext";
import Form from "./form/Form";
import style from "./PostRequest.module.scss";
import SuccesfulRegPhoto from "./../../../Assets/success-image.svg";

const PostRequest = () => {
  const tokenURL =
    "https://frontend-test-assignment-api.abz.agency/api/v1/token";
  const postURL =
    "https://frontend-test-assignment-api.abz.agency/api/v1/users";
  const getPeopleURL =
    "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState(0);
  const [isSuccesfulReg, setSuccesfulReg] = useState(false);
  const sucsessReg = useRef(null);

  const usersStore = useGetRequest();
  const formData = new FormData();

  const userRequest = async (url) => {
    formData.append("photo", file);
    formData.append("position_id", position);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    const {
      data: { token },
    } = await axios.get(url);
    const formSend = await fetch(postURL, {
      method: "POST",
      body: formData,
      headers: { Token: token },
    });
    console.log(formSend);
    sucsessRegUI(formSend.ok);
    usersStore.setUsers(getPeopleURL);
  };

  const sucsessRegUI = (succes) => {
    if (succes) {
      setSuccesfulReg(true);
      setTimeout(() => {
        setSuccesfulReg(false);
      }, 5000);
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 1000);
    }
  };

  return (
    <div className={style.wrap}>
      <h2 id="SignUp" className={`${style.title} h1`}>
        Working with POST request
      </h2>
      <Form
        props={{
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
        }}
      />

      <div
        ref={sucsessReg}
        className={`${style.SuccesfulReg} `}
        style={
          isSuccesfulReg
            ? {
                maxHeight: sucsessReg.current.scrollHeight + 100,
                paddingTop: 100,
              }
            : { maxHeight: 0 }
        }
      >
        <h2 id="sucsess" className={`${style.title} h1`}>
          User successfully registered
        </h2>
        <div className={style.boxImg}>
          <img
            src={SuccesfulRegPhoto}
            alt=""
            width={"328px"}
            height={"290px"}
          />
        </div>
      </div>
    </div>
  );
};

export default PostRequest;
