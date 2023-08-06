/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";

export const setToken = async (token: string): Promise<string | void> => {
  return await localStorage.setItem("token", token);
};

export const setTokenExpire = async (
  expiretime: string
): Promise<string | void> => {
  return await localStorage.setItem("token-expire", expiretime);
};

const refreshToken = async (token: string) => {
  const response = await axios.post(
    "http://localhost:8000/users/refresh",
    new URLSearchParams({
      token: token,
    })
  );
  console.log(response);
};

export const fetchToken = async (): Promise<string> => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const tokenState = useSelector((state) => {
    state.token.token;
  });

  const tokenFromStorage = await localStorage.getItem("token");
  const refreshedToken = await refreshToken(tokenFromStorage);

  return refreshedToken;
};

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
