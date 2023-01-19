import axios from "axios";
import { INoticeProps } from "../interface/notice";

export const getNotices = () => {
  const url = `/notice`;
  return axios.get<INoticeProps[]>(url).then((res) => {
    return res.data;
  });
};
