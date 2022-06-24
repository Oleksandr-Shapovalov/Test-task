import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLoader } from "../Loader/LoaderContext";

const GetRequestContext = createContext(null);
const SET_USERS = "SET_USERS";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.data.users,
        page: action.data.page,
        pageCount: action.data.total_pages,
        nextUrl: action.data.links.next_url,
      };

    default:
      return state;
  }
};

const GetRequestProvider = ({ children }) => {
  const loader = useLoader();

  const [state, dispatch] = useReducer(reducer, {
    users: [],
    nextUrl: "",
    pageCount: 0,
    page: 1,
  });
  const setUsers = async (URL) => {
    try {
      loader.show();

      const data = (await axios.get(URL || state.nextUrl)).data;
      console.log(data);
      dispatch({ type: SET_USERS, data });
      loader.hide();
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  return (
    <GetRequestContext.Provider
      value={{
        setUsers,
        users: state.users,
        nextUrl: state.nextUrl,
        pageCount: state.pageCount,
        page: state.page,
      }}
    >
      {children}
    </GetRequestContext.Provider>
  );
};

export const useGetRequest = () => useContext(GetRequestContext);
export default GetRequestProvider;
