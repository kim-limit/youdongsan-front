import axios from "axios";
import {INotice} from "../interface/notice";
import {IResponseProps} from "./request";

export const getNotices = () => {
    const url = `/notice`;
    return axios.get<IResponseProps<INotice[]>>(url).then((res) => {
        return res.data;
    });
};
