import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useLoader } from "../Loader/LoaderContext";
import style from "./GetRequest.module.scss";
import Users from "./Users/Users";
const GetRequest = () => {
  const loader = useLoader();
  const [users, setUsers] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const userRequest = (url) => {
    loader.show();

    axios.get(url).then(({ data }) => {
      setUsers(data.users);
      setPageCount(data.total_pages);
      setPage(data.page);
      setNextUrl(data.links.next_url);
      loader.hide();

      console.log("get  ", users);
    });
  };
  useEffect(() => {
    userRequest(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
    );
  }, []);

  return (
    <div className={style.wrap}>
      <h2 id="Users" className={`${style.title} h1`}>
        Working with GET request
      </h2>
      <div className="_paddingContent">
        <Loader />
        {loader.visibility ? null : <Users users={users} />}
      </div>
      <div className={style.btnBox}>
        {page !== pageCount && (
          <button
            style={{ width: 120 }}
            className="button"
            onClick={() => userRequest(nextUrl)}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default GetRequest;
