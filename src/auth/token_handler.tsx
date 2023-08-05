/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";

export const setToken = async (token: string): Promise<string | void> => {
  return await localStorage.setItem("token", token);
};

export const fetchToken = async (): Promise<string | null> => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const tokenState = useSelector((state) => {
    state.token.token;
  });
  if (tokenState) {
    return await localStorage.getItem("token");
  } else {
    return "user doesn't exist";
  }
};

// : {
//   children: React.ReactNode;
// }
export const RequireToken = ({ children: child }: { children: any }) => {
  const auth = fetchToken();
  const location = useLocation();
  const navigation = useNavigate();
  if (!auth) {
    return navigation("/login", { state: location });
  }
  return child;
};

const AuthRules = ({ children: child }: { children: any }) => {
  const auth = fetchToken();
  const location = useLocation();
  const navigation = useNavigate();

  if (!auth) {
    return navigation("/login", { state: location });
  }
  return child;
};

export default AuthRules;
