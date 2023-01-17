import axios from "axios";
import { ISignInProps, ISignUpProps } from "../interface/sign";

export const signUp = ({ email, password, name }: ISignUpProps) => {
  const url = ``;
  return axios.post(url, { email, password, name }).then((res) => {
    return res.data;
  });
};

export const signIn = ({ email, password }: ISignInProps) => {
  const url = ``;
  return axios.post(url, { email, password }).then((res) => {
    return res.data;
  });
};
