import { useQuery } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { QUERY_KEY } from "../../enum";
import { getAllMember } from "./member.api";
import { UserType } from "@/types";

export const useGetAllMember = () => {
  return useQuery<UserType[], AxiosError>({
    queryKey: [QUERY_KEY.GET_ALL_MEMBER],
    queryFn: getAllMember,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
