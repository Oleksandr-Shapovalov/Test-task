import React, { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useLoader } from "../Loader/LoaderContext";
import style from "./GetRequest.module.scss";
import { useGetRequest } from "./GetRequestContext";
import Users from "./Users/Users";
const GetRequest = () => {
  const [loaderHeight, setLoaderHeight] = useState(0);
  const getPeopleURL =
    "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";
  const loader = useLoader();
  const usersStore = useGetRequest();
  const isLastPage = usersStore.page !== usersStore.pageCount;
  const userRequest = (url) => {
    usersStore.setUsers(url);
  };
  useEffect(() => {
    userRequest(getPeopleURL);
  }, []);

  return (
    <div className={style.wrap}>
      <h2 id="Users" className={`${style.title} h1`}>
        Working with GET request
      </h2>
      <div className="_paddingContent">
        {loader.visibility ? (
          <Loader loaderHeight={loaderHeight} />
        ) : (
          <Users users={usersStore.users} setLoaderHeight={setLoaderHeight} />
        )}
      </div>
      <div className={style.btnBox}>
        {isLastPage && (
          <button
            style={{ width: 120, marginTop: 50 }}
            className="button"
            onClick={() => userRequest(usersStore.nextUrl)}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default GetRequest;
