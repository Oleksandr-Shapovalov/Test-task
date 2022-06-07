import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Form from "./form/Form";
import style from "./PostRequest.module.scss";

const PostRequest = () => {
  const [file, setFile] = useState(null);
  const formData = new FormData();
  formData.append("position_id", 2);
  formData.append("name", "Jhon");
  formData.append("email", "Jhon@gmail.com");
  formData.append("phone", "+380955388485");

  console.log(formData);
  const userRequest = (url) => {
    formData.append("photo", file);
    axios
      .get(url)
      .then(({ data }) => {
        console.log("token   ", data.token);
        return fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          {
            method: "POST",
            body: formData,
            headers: { Token: data.token, "Content-Type": "application/json" },
          }
        );
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        //   axios
        //     .post("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
        //       headers: {
        //         "Content-Type": "application/json",
        //         Token: data.token,
        //       },
        //       body: {
        //         name: "vitek",
        //         phone: "+380778362982",
        //         email: "nfbfhd@test.test",
        //         position_id: 2,
        //         photo: "photo",
        //       },
        //     })
        //     .then(function (response) {
        //       return response.json();
        //     })
        //     .then(function (data) {
        //       console.log(data);
        //     });
      });
  };
  useEffect(() => {
    // userRequest("https://frontend-test-assignment-api.abz.agency/api/v1/token");
  }, []);

  return (
    <div className={style.wrap}>
      <h2
        id="SignUp"
        className={`${style.title} h1`}
        onClick={() => {
          userRequest(
            "https://frontend-test-assignment-api.abz.agency/api/v1/token"
          );
        }}
      >
        Working with POST request
      </h2>
      <Form file={file} setFile={setFile} />
    </div>
  );
};

export default PostRequest;
