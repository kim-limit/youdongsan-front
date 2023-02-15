import { useMutation } from "react-query";
import { mutateReserve } from "../services/reserve";

export const useReserve = () => {
  const {
    mutate: reserve,
    isSuccess,
    isError,
  } = useMutation("reserve", mutateReserve, {});

  return { reserve, isSuccess, isError };
};
