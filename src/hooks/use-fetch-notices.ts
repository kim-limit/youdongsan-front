import {useQuery} from "react-query";
import {getNotices} from "../services/notice";

export const useFetchNotices = () => {
    const {data, isLoading, isSuccess} = useQuery(`notice`, async () => {
        const res = await getNotices();
        return res;
    });

    return {
        notices: data,
        isLoading,
        isSuccess,
    };
};
