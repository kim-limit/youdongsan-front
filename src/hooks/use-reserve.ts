import { useMutation } from "react-query";
import { IReserveProps } from "../interface/reserve";
import { mutateReserve } from "../services/reserve";

export const useReserve = (props: IReserveProps) => {
  const {
    mutate: reserve,
    data,
    isLoading,
    isSuccess,
    isError,
  } = useMutation("reserve", mutateReserve, {});

  const reserveHandler = () => {
    reserve(props);
  };
  return { reserveHandler, data, isLoading, isSuccess, isError };
};
