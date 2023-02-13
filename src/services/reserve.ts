import axios from "axios";
import { IReserveProps } from "../interface/reserve";

export const mutateReserve = (props: IReserveProps) => {
  const url = `/reserve`;
  return axios.post(url, { ...props }).then((res) => {
    return res.data;
  });
};
